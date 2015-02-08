(function($) {
  var GOD = {Ajax: {}};

  GOD.Ajax.options = GOD.Ajax.options || {};

  GOD.Ajax.options.bannerList = {
    root: 'xxx',
    path: 'lists',
    key: 'default'
  };

  GOD.Ajax.getBannerListUrl = function(options) {
    return [
      options && options.root || this.options.bannerList.root,
      options && options.path || this.options.bannerList.path,
      options && options.url || this.options.bannerList.url
    ].join('/');
  };

  GOD.Ajax.getBannerList = function(key, root) {
    return $.ajax({
      type: 'GET',
      url: GOD.Ajax.getBannerListUrl({
        root: root,
        url: key
      }),
      dataType: 'json',
      cache: false,
      error: function(xhr, ajaxOptions, thrownError) {
        GOD.Ajax.checkError(xhr, ajaxOptions, thrownError);
      }
    });
  };

  $.fn.bannerList = (function() {
    var id_ = 0;

    return function(options) {
      var $list;
      var self = this;

      options = $.extend({}, $.fn.bannerList.defaults, options);

      id_ += 1;

      $list = $('<div>', {
        id: options.id + id_
      });

      GOD.Ajax
        .getBannerList(options.listKey, options.serviceRoot)
        .done(function(data) {
          var index = 0;

          if (data.ListItems) {

            $.each(data.ListItems, function(key, listItem) {

              // use source from properties or generate with index
              var imageSrc = listItem.Properties ? listItem.Properties[0].Value : options.img.src(index + 1);

              // generate image-link or use name text as content
              var content = listItem.Link ? options.getImageLink(listItem.Link, imageSrc) : listItem.Name;

              $list.before(
                $('<div>', {
                    id: [id_, options.itemId, index].join(''),
                    'class': options.itemClassName
                  })
                  .html(content)

                  /* show first item only */
                  .toggle(index === 0)
              );

              index += 1;
            });
          }

          options.onSuccess($list);
          self.prepend($list);

        });

      return this;
    };
  })();

  $.fn.bannerList.defaults = {
    id: 'loadingDiv_',
    itemId: 'banner',
    itemClassName: 'banner',
    onSuccess: function() {},
    getImageLink: function(url, src) {
      return ['<a href=', url, '> <img src=', src, '/></a>'].join('"');
    },
    img: {
      src: function(id) {
        return ['Customers/HiddenName/Content/images/panel/panel', id || 1, '-sml.jpg'].join('');
      }
    }
  };

})(this.jQuery || {fn: {}});
