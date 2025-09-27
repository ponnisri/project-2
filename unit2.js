// The area object
const area = {
  element: document.getElementById('area'),
  width: 600,
  height: 400,
};

// Move ball to a position
function moveTo(ball, x, y) {
  ball.element.style.left = x + 'px';
  ball.element.style.top = y + 'px';
}

// Reverse direction if necessary
function changeDirectionIfNecessary(ball, x, y) {
  if (x < 0 || x > area.width - ball.width) {
    ball.dx = -ball.dx;
  }
  if (y < 0 || y > area.height - ball.height) {
    ball.dy = -ball.dy;
  }
}

// Create a ball
function create(color, dx, dy) {
  const newBall = {};
  newBall.dx = dx;
  newBall.dy = dy;

  // Create HTML element
  newBall.element = document.createElement('div');
  newBall.element.className = 'ball';
  newBall.element.style.backgroundColor = color;
  newBall.element.style.width = '20px';
  newBall.element.style.height = '20px';

  // Set size
  newBall.width = parseInt(newBall.element.style.width);
  newBall.height = parseInt(newBall.element.style.height);

  // Add to area
  area.element.appendChild(newBall.element);

  return newBall;
}

// Update ball position (animation)
function update(ball, x, y) {
  moveTo(ball, x, y);
  changeDirectionIfNecessary(ball, x, y);

  setTimeout(() => {
    update(ball, x + ball.dx, y + ball.dy);
  }, 16); // ~60fps
}

// Create balls
const ball1 = create('blue', 4, 3);
const ball2 = create('red', 1, 5);
const ball3 = create('green', 2, 2);

moveTo(ball1, 1, 1);
moveTo(ball2, 10, 10);
moveTo(ball3, 20, 20);

// Start animation
update(ball1, 70, 0);
update(ball2, 20, 200);
update(ball3, 300, 330);