const TAU = Zdog.TAU;


let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
    translate: {  x:-900},

    dragRotate: true,
  });
  
  // add circle
  new Zdog.Shape({
    addTo: illo,
    stroke: 200,
    translate: {  z: -30},

    color: '#FFD5A8',
  });
 

  var eye = new Zdog.Shape({
    addTo: illo,
    diameter: 20,
    stroke: 12,
    rotate: { z: -TAU/4 },
    translate: { x: -20, z: 65 , y:-20},
  });
  eye.copy({
    translate: { x: 20, z: 65,y:-20 },

  })


  new Zdog.Shape({
    addTo: illo,
    path: [
      { x: 25, y: 10 }, // start at top left
      { x:  50, y: 15 }, // line to top right
      { x: 25, y:  30 }, // line to bottom left
    ],
    translate: {z: 65},
    closed: false,
    stroke: 5,
  });

     


  // ====== EARS ======
var ears = new Zdog.Group({
  addTo: illo,
  translate: { z: 0, x : -70, y :-60},
  rotate: {z: 35}
})
let leftEar = new Zdog.Shape({
  addTo: ears,
  path: [
    { x:   0, y: -30 },
    { x:  20, y: 20 },
    { x: -22, y: 20 },
  ],
  fill: true,
  stroke: 20,
  color: '#FFD5A8',
});
let leftInside = new Zdog.Shape({
  addTo: ears,
  path: [
    { x:   0, y: -10 },
    { x:  10, y: 10 },
    { x: -10, y: 10 },
  ],
  fill: true,
  stroke: 10,
  translate: { z: 8,  },
});
var otherEars = new Zdog.Group({
  addTo: illo,
  translate: { z: 0, x : 70, y :-60},
  rotate: {z: -35}
})
let rightEar = new Zdog.Shape({
  addTo: otherEars,
  path: [
      { x:   0, y: -30 },
      { x:  20, y: 20 },
      { x: -22, y: 20 },
    ],
 
  fill: true,
  stroke: 20,
  color: '#FFD5A8',
});
let rightInside = new Zdog.Shape({
  addTo: otherEars,
  path: [
    { x:   0, y: -10 },
    { x:  10, y: 10 },
    { x: -10, y: 10 },
  ],
  fill: true,
  stroke: 10,
  //translate: { z: 8,  },
});

new Zdog.Shape({
  addTo: illo,
  path: [
    { x: -40, y: 50 },   // start
    { bezier: [
      { x:  -20, y: 65 }, // start control point
      { x:  20, y:  70 }, // end control point
      { x:  40, y:  50 }, // end point
    ]},
  ],
  translate: {z: 50},
  closed: false,
  stroke: 10,
});

  illo.updateRenderGraph();


  function animate() {
    // rotate illo each frame
    illo.rotate.x += 0.03;
    illo.rotate.z += 0.01;
    illo.translate.x+= 0.9;
    illo.updateRenderGraph();
    // animate next frame
    requestAnimationFrame( animate );
  }
  // start animation
  animate();