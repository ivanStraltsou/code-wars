// ### FrontEnd Digest #44 code wars.
//
// #### [Answer](https://github.com/ivanStraltsou/code-wars/blob/master/scripts/jquery.BannerList/jquery.bannerListNew.js)
//
// This doc contains comments for initial [code
// snippet](https://dl.dropboxusercontent.com/u/69142102/__permanent/jquery.customerName.bannerlist.js)  (c) Ivan
// Straltsou <ivan_straltsou@epam.com>
(function($) {

  // Use single object as argument. It's easier to add additional arguments in future and `3` is a lot.
  //
  //     /**
  //      * ...
  //      * @param {object} options ...
  //      * @param {string} options.listKey ...
  //      * @param {string} options.serviceRoot ...
  //      * @param {function} options.onSuccess ...
  //      */
  //      $.fn.BannerList = function(options) {
  //
  // Constructor code-style but `new $.fn.BannerList(/*args*/);` will take no effect.
  $.fn.BannerList = function(listKey, serviceRoot, onSuccess) {

    // Different type of quotes in code.
    //
    // There is no need to search for `/`. We just need to check the latest character

    //     if (serviceRoot.slice(-1) !== '/') {
    if (serviceRoot.lastIndexOf("/") != serviceRoot.length - 1) {
      serviceRoot = serviceRoot + "/";
    }

    // Not standard name for this reference. Use `self`, `that`, `this_`.
    //
    // Move variables declaration to the very beginning of the function scope.
    var placeHolder = this;

    // `loadingDiv` id doesn't look like a unique one
    var list = $('<div id="loadingDiv"></div>');

    // Is fetch logic a responsibility of this plugin?
    // It should just become data and translate it into markup.
    $.ajax({
      url: serviceRoot + "lists/" + listKey,
      dataType: "json",
      cache: false,

      // No need to add default values.
      async: true,
      success: function(data) {
        var counter = 0;
        if (data.ListItems != null) {

          // if data.ListItems is an object property order is not guaranteed across environments
          $.each(data.ListItems, function(key, listItem) {
            var cssClass = 'banner';

            // No need in default empty strings.
            var cssId = '';
            var cssStyle = '';
            var imgScr = '';
            var alt = ' alt=""';

            // It can be a single code-block with current iteration index to construct urls.
            //
            // Urls are not customizable through options
            if (counter == 0) {
              cssId = 'banner1';
              cssStyle = 'display: ;';
              imgScr = 'Customers/HiddenName/Content/images/panel/panel1-sml.jpg'
            }
            if (counter == 1) {
              cssId = 'banner2';
              cssStyle = 'display: none;';
              imgScr = 'Customers/HiddenName/Content/images/panel/panel2-sml.jpg'
            }
            if (counter == 2) {
              cssId = 'banner3';
              cssStyle = 'display: none;';
              imgScr = 'Customers/HiddenName/Content/images/panel/panel3-sml.jpg'
            }

            // You can use jquery api to add attributes in more intuitive and readable way
            if (cssClass != '') { cssClass = 'class="' + cssClass + '" '; }
            if (cssId != '') { cssId = 'id="' + cssId + '" '; }
            if (cssStyle != '') { cssStyle = 'style="' + cssStyle + '" '; }

            if (listItem.Properties != null) {
              imgScr = listItem.Properties[0].Value;
            }
            if (imgScr != '') { imgScr = 'src="' + imgScr + '" '; }

            var itemContent = null;
            if (listItem.Link != null) {
              itemContent = "<a href='" + listItem.Link + "'> <img " + imgScr + alt + "/>" + "</a>";
            } else {
              itemContent = listItem.Name;
            }

            list.before($("<div " + cssId + cssClass + cssStyle + ">" + itemContent + "</div>"));
            counter++;
          });
        }
        if (onSuccess && typeof onSuccess == 'function') {
          onSuccess(list);
        }
        placeHolder.prepend(list);

        // This return statement will take no effect. It should be placed to the end of plugin-function to enable
        // chaining.
        return this;
      },
      error: function(xhr, ajaxOptions, thrownError) {
        GOD.Ajax.checkError(xhr, ajaxOptions, thrownError);
      }
    });

    // Add `return this;` to enable chaining.
  };
})(jQuery);
