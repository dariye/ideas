import 'aframe'
import 'aframe-physics-system'
// import 'aframe-extras'
// import  'super-hands'
// import 'aframe-event-set-component'
// import 'aframe-environment-component'
// import './components/cursor-listener'
var ballArr=[]
var cameraEl
let ball
let ballCount=0

window.onload = function () {
  console.log('loaded')

  AFRAME.registerComponent('listener', {
    init: function() {
      this.fallSpeed = -.1
    },
    tick: function(evt) {
      // console.log(evt)
      this.fallSpeed+=.01
      const pos = this.el.getAttribute('position')
      this.el.setAttribute('position', {x:pos.x-vec.z*.1,y:pos.y-fallSpeed,z:pos.z-.1});
    }
  })

document.addEventListener('keyup', function (key) {
	if (key.code!='Space') return;

	  // Solution for Creating Entities.
  var sceneEl = document.querySelector('a-scene'); 
  cameraEl = document.querySelector('a-camera'); 
  var cameraPos = cameraEl.getAttribute('position')
    
  ball = document.createElement('a-sphere');
  ball.setAttribute('listener', '')
  ball.setAttribute('id', ++ballCount)
    ball.setAttribute('material', {color: '#EF2D5E'});
    ball.setAttribute('position', cameraPos);
    ball.setAttribute('scale', {x: .1, y: .1, z: .1});
  //   ball.setAttribute('dynamic-body', {
  // 		shape: 'sphere',
  // 		mass: 1.5,
  // 		linearDamping: 0.005
	// });    
  sceneEl.appendChild(ball);
  ballArr.push(ball)

	var cameraPos = cameraEl.getAttribute('position')
	ball.setAttribute('position',cameraPos);
	let fallSpeed=-.1;
	let rotation= cameraEl.getAttribute('rotation');
	let vec=getAngle(rotation.y)
	//ball.setAttribute('cursor','');
	ball.setAttribute('mouse-cursor','')
	ball.addEventListener('click', function (evt) {
  		console.log('entity clicked');
	});


});


}

function getAngle(yDeg){
	let y = yDeg* Math.PI/180
	return {x:Math.cos(y),z:Math.sin(y)}
}
