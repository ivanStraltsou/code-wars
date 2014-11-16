function $(selector) {
  return new $__init(selector);
}

function $__init(selector) {
  this.selector_ = selector;
  this.classNames_ = [];
  this.html_ = '';
}

$__init.prototype = $.prototype;

$.prototype.html = function(html) {
  var isSetter = html != null;

  if (isSetter) {
    this.html_ = html;
  }

  return isSetter ? this : this.html_;
};

$.prototype.addClass = function(classNames) {
  classNames = Array.isArray(classNames) ? classNames : String(classNames);

  if (classNames && classNames.length) {
    this.classNames_.push.apply(this.classNames_, classNames.split(' '));
  }

  return this;
};
