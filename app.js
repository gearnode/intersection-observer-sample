(function(window, document) {
  'use strict';

  if (typeof NodeList.prototype.forEach === "undefined") {
    NodeList.prototype.forEach = Array.prototype.forEach
  }

  var listener = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0.5) {
        entry.target.style.backgroundColor = "#000000";
      } else {
        entry.target.style.backgroundColor = "#FFFFFF";
      }
    });

  }, { threshold: [0.5] });

  var items = document.querySelectorAll('.text')
  items.forEach (function (item) {
    item.classList.add('not-visible');
    listener.observe(item)
  });

}(window, document));
