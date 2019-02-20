export default (function() {
  AFRAME.registerComponent('cursor-listener', {
    init: function() {
      console.log('cursor-listener')
      const element= this.el
      element.addEventListener('click', function(evt) {
        console.log(evt)
      })
    }
  })
})()
