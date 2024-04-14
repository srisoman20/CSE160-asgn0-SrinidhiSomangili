// Srinidhi Somangili
// sksomang@ucsc.edu

// DrawTriangle.js (c) 2012 matsuda
function main() {  
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  // Draw a blue rectangle
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set color to blue
  ctx.fillRect(0, 0, canvas.width, canvas.height);        // Fill a rectangle with the color
  //var v1 = new Vector3([2.25, 2.25, 0])
  // ctx.beginPath(); // Start a new path
  // ctx.moveTo(0, 0); // Move the pen to (30, 50)
  // ctx.lineTo(20, 20); // Draw a line to (x, y)
  // ctx.strokeStyle = '#ff0000'
  // ctx.stroke(); // Render the path
  //drawVector(v1, "red",ctx)

}

function drawVector(v, color,ctx) {
  ctx.beginPath(); // Start a new path
  ctx.moveTo(200, 200); // Move the pen to origin
  ctx.lineTo(200+(v.elements[0]*20), 200- (v.elements[1]*20)); // Draw a line to (x, y)
  //ctx.lineTo(300,300);
  ctx.strokeStyle = color
  ctx.stroke(); // Render the path
}

function handleDrawEvent() {
  var canvas = document.getElementById('example'); 
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set color to blue
  ctx.fillRect(0, 0, canvas.width, canvas.height); 
  let x1 = document.getElementById("v1x").value;
  let y1 = document.getElementById("v1y").value;
  var v1 = new Vector3([x1, y1, 0]);
  drawVector(v1, "red",ctx);
  let x2 = document.getElementById("v2x").value;
  let y2 = document.getElementById("v2y").value;
  var v2 = new Vector3([x2, y2, 0]);
  drawVector(v2, "blue",ctx);
}

function handleDrawOperationEvent() {
  var canvas = document.getElementById('example'); 
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set color to blue
  ctx.fillRect(0, 0, canvas.width, canvas.height); 
  let x1 = document.getElementById("v1x").value;
  let y1 = document.getElementById("v1y").value;
  var v1 = new Vector3([x1, y1, 0]);
  drawVector(v1, "red",ctx);
  let x2 = document.getElementById("v2x").value;
  let y2 = document.getElementById("v2y").value;
  var v2 = new Vector3([x2, y2, 0]);
  drawVector(v2, "blue",ctx);
  let op = document.getElementById("opssel").value;
  let v3 = new Vector3([0, 0, 0]);
  if (op == 'add') {
    v3 = v1.add(v2);
  }
  if (op == 'sub') {
    v3 = v1.sub(v2);
  }
  if (op == 'mul') {
    v3 = v1.mul(document.getElementById("scalar").value);
    let v4 = v2.mul(document.getElementById("scalar").value);
    drawVector(v4, "green",ctx);
  }
  if (op == 'div') {
    v3 = v1.div(document.getElementById("scalar").value);
    let v4 = v2.div(document.getElementById("scalar").value);
    drawVector(v4, "green",ctx);
  }
  if (op == 'mag') {
    let xmag = v1.magnitude();
    console.log("Magnitude v1: " + xmag);
    let ymag = v2.magnitude();
    console.log("Magnitude v2: " + ymag);
  }
  if (op == 'norm') {
    v3 = v1.normalize(document.getElementById("scalar").value);
    let v4 = v2.normalize(document.getElementById("scalar").value);
    drawVector(v4, "green",ctx);
  }
  if (op == 'ang') {
    angleBetween(v1, v2);
  }
  if (op == 'area') {
    areaTriangle(v1, v2);
  }
  drawVector(v3, "green",ctx);
}

function angleBetween(v1, v2) {
  let dot = Vector3.dot(v1, v2);
  let mag = v1.magnitude() * v2.magnitude();
  let div = dot/mag;
  let ang = (Math.acos(div)*180)/Math.PI
  console.log("Angle: " + ang);
  return ang
}

function areaTriangle(v1, v2) {
  let crossprod = Vector3.cross(v1, v2);
  let areapar = crossprod.magnitude();
  let area = areapar/2;
  console.log("Area: " + area);
}