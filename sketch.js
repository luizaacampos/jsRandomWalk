const TOTAL_PARTICLES = 400
const WIDTH = 600
const SPEED = 5 
const colors = []

function setup() {
  createCanvas(WIDTH, WIDTH);
  colors.push(color(0, 0, 255))
  colors.push(color(0, 255, 0))
  
}

function getRandomInt (max) {
  return Math.floor(Math.random() * max)
}

function newParticle () {
  const type = getRandomInt(2)
  if (type==0) return [getRandomInt(WIDTH / 2),getRandomInt(WIDTH), type]
  return [WIDTH / 2 + getRandomInt(WIDTH / 2),getRandomInt(WIDTH), type]
}

const PARTICLES = Array.from({length: TOTAL_PARTICLES}, newParticle)

function drawParticle (particle) {
  fill(colors[particle[2]])
  noStroke()
  circle(particle[0], particle[1], 10)
}

function randomMove (position) {
  const random = SPEED * (getRandomInt(3) - 1)
  position += random
  return min(WIDTH, max(0, position))
}

function moveParticle (particle) {
  particle[0] = randomMove(particle[0]) 
  particle[1] = randomMove(particle[1])
}

function draw() {
  PARTICLES.forEach(moveParticle)
  
  background(color(255,255,255));
  PARTICLES.forEach(drawParticle)
}