// Import 3d party libraries
import { PingPongContainer } from './app/app';

// Import local
import { Bomberman } from './BomberMan/Bomberman';
import { Ball } from './Ball/Ball';

// CSS sections
import './main.scss';


const canvasElement = document.querySelector('#canvas-container > #ping-pong') as HTMLCanvasElement


// Pingpong container is the drawing area
// this includes an array of bomberman game object
new PingPongContainer({
  view: canvasElement,
  width: 600,
  height: 600,
  builder: app => [
    new Bomberman(app, {
      name: 'bomberman-front',
      animationSpeed: 0.5,
      currentDirection: 'front',
      x: 300,
      y: 400
    }),
    new Bomberman(app, { 
      name: 'bomberman-back',
      animationSpeed: 0.3,
      currentDirection: 'back',
      x: 400,
      y: 100
    }),
    new Ball(app, {
      name: 'ball',
      x: 300,
      y: 200
    })
  ]
});
