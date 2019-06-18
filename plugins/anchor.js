import Vue from 'vue'
Vue.directive('anchor', {
  bind: function(el, binding) {
    el.clickToAnchor = function() {
      var element = document.getElementById(binding.arg)

      // here I check that click was outside the el and his childrens
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
    el.addEventListener('click', el.clickToAnchor)
  },
  unbind: function(el) {
    el.removeEventListener('click', el.clickToAnchor)
  }
})
