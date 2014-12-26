(function($) {

	$.fn.BannerList = function(listKey, serviceRoot, onSuccess) {
		if (serviceRoot.lastIndexOf("/") != serviceRoot.length - 1) {
			serviceRoot = serviceRoot + "/";
		}
		var placeHolder = this;
		var list = $('<div id="loadingDiv"></div>');
		$.ajax({
			url: serviceRoot + "lists/" + listKey,
			dataType: "json",
			cache: false,
			async: true,
			success: function(data) {
				var counter = 0;
				if (data.ListItems != null) {
					$.each(data.ListItems, function(key, listItem) {
						var cssClass = 'banner';
						var cssId = '';
						var cssStyle = '';
						var imgScr = '';
						var alt = ' alt=""';

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
						//if (counter == data.ListItems.length - 1) cssClass = 'last';
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

				return this;
			},
			error: function(xhr, ajaxOptions, thrownError) {
				GOD.Ajax.checkError(xhr, ajaxOptions, thrownError);
			}
		});
	};
})(jQuery);