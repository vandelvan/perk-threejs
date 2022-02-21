import "./style.css";

import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { Color } from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const mntn = new THREE.TextureLoader().load('assets/mntn.jpg');
const normal = new THREE.TextureLoader().load('assets/normal.jpg');

const geometry = new THREE.TetrahedronGeometry(20,1);
const material = new THREE.MeshBasicMaterial({
  map:mntn,
  normalMap:normal,
});
const mountain = new THREE.Mesh(geometry, material);

scene.add(mountain);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5);
const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight,ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

const bg = new THREE.TextureLoader().load('assets/aurora.jpg');
scene.background = bg;

var stars = [];
function addStar(){
const geometry = new THREE.TorusKnotGeometry( 20, 1, 100, 5,2,3 );
const material = new THREE.MeshStandardMaterial( { color: 0xffffff, wireframe:true } );
const star = new THREE.Mesh( geometry, material );
const [x,y,z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(100));
star.position.set(x,y,z);
scene.add(star);
stars.push(star);
}
Array(15).fill().forEach(addStar);

mountain.position.z = -50;
mountain.position.x = 50;


function moveCamera()
{
  const t = document.body.getBoundingClientRect().top;
  mountain.rotation.x +=0.05;
  mountain.rotation.y +=0.075;
  mountain.rotation.z +=0.05;
  stars.forEach(function(e){
    e.rotation.x +=0.05;
    e.rotation.y +=0.075;
    e.rotation.z +=0.05;});
  camera.position.z = t*-0.01;
  camera.position.x = t*-0.0002;
  camera.position.y = t*-0.0002;
}

document.body.onscroll = moveCamera;

function animate() {
  requestAnimationFrame(animate);
  mountain.rotation.x +=0.001;
  mountain.rotation.y +=0.001;
  mountain.rotation.z +=0.001;
  controls.update();
  renderer.render(scene, camera);
}

animate();