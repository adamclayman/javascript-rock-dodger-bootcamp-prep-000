const DODGER = document.getElementById('dodger');
const GAME = document.getElementById('game');
const GAME_HEIGHT = 400;
const GAME_WIDTH = 400;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const ROCKS = [];
const START = document.getElementById('start');

<<<<<<< HEAD
var gameInterval = null;
=======
function checkCollision(rock) {
  // implement me!
  // use the comments below to guide you!
  const top = positionToInteger(rock.style.top)

  // rocks are 20px high
  // DODGER is 20px high
  // GAME_HEIGHT - 20 - 20 = 360px;
  if (top > 360) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left)
    const rockLeftEdge = positionToInteger(rock.style.left)
    const dodgerRightEdge = dodgerLeftEdge + 40; // the dodger is 40px x 20px (width x height convention)
    const rockRightEdge = rockLeftEdge + 20; // the rocks are 20px wide

    if (false /**
               * Think about it -- what's happening here?
               * There's been a collision if one of three things is true:
               * 1. The rock's left edge is < the DODGER's left edge,
               *    and the rock's right edge is > the DODGER's left edge;
               * 2. The rock's left edge is > the DODGER's left edge,
               *    and the rock's right edge is < the DODGER's right edge;
               * 3. The rock's left edge is < the DODGER's right edge,
               *    and the rock's right edge is > the DODGER's right edge
               */) {
      return true
    }
  }
}
>>>>>>> 0f8ac50df95402ce204d9aee7ea0d46b06548997

function createRock(x) {
  const rock = document.createElement('div');

  rock.className = 'rock';
  rock.style.left = `${x}px`;

  var top = 0;

  rock.style.top = top;
  GAME.appendChild(rock);

  /**
   * This function moves all the rocks, not only the one we just created. (20 pixels at a time
   * seems like a good pace. 2 pixels per turn looks like an impossible and undodgeable avalanche.)
   */
  function moveRock() {
     for (i = 0; i < ROCKS.length; i++) {
       top = positionToInteger(ROCKS[i].style.top);
       ROCKS[i].style.top = `${top += 20}px`;
       if (checkCollision(ROCKS[i]) === true) {
         endGame();
       }
       else if (ROCKS[i].style.top > 380)
       {
       }
       else if (ROCKS[i].style.top === 380)
       {
         ROCKS[i].remove();
       }
     }
  }

  window.requestAnimationFrame(moveRock);
  ROCKS.push(rock);
  return rock;
}

function start() {
   window.addEventListener('keydown', moveDodger);

   START.style.display = 'none';

   gameInterval = setInterval(function() {
     createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
   }, 1000)
 }

function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}

function moveDodger(e) {
<<<<<<< HEAD
=======
  // implement me!
  /**
   * This function should call `moveDodgerLeft()`
   * if the left arrow is pressed and `moveDodgerRight()`
   * if the right arrow is pressed. (Check the constants
   * we've declared for you above.)
   * And be sure to use the functions declared below!
   */

>>>>>>> 0f8ac50df95402ce204d9aee7ea0d46b06548997
   if (e.which === LEFT_ARROW) {
     e.preventDefault();
     e.stopPropagation();
     moveDodgerLeft();
   }
   else if (e.which === RIGHT_ARROW) {
     e.preventDefault();
     e.stopPropagation();
     moveDodgerRight();
   }
}

function moveDodgerLeft() {
<<<<<<< HEAD
   let dodgerLeftEdge = positionToInteger(DODGER.style.left);

   function step() {
     if (dodgerLeftEdge >= 4) {
       DODGER.style.left = `${dodgerLeftEdge -= 4}px`;
=======
  // implement me!
  /**
   * This function should move DODGER to the left
   * (mabye 4 pixels?). Use window.requestAnimationFrame()!
   */
/*
   it('moves the DODGER to the left', () => {
     const left = positionToInteger(dodger.style.left)

     moveDodgerLeft()

     expect(positionToInteger(dodger.style.left)).toBeLessThan(left)
   })
*/
   let dodgerLeftEdge = positionToInteger(DODGER.style.left); // This could fail if the string is '40px', and parseInt() doesn't know how to handle that.

   function step() {
     if (dodgerLeftEdge >= 4) {
       DODGER.style.left = `${dodgerLeftEdge -= 4}px`
//       window.requestAnimationFrame(step);
>>>>>>> 0f8ac50df95402ce204d9aee7ea0d46b06548997
     }
   }
   window.requestAnimationFrame(step);
}

function moveDodgerRight() {
<<<<<<< HEAD
   let dodgerLeftEdge = positionToInteger(DODGER.style.left);
   function step() {
     if (dodgerLeftEdge <= 356) {
       DODGER.style.left = `${dodgerLeftEdge += 4}px`;
=======
  // implement me!
  /**
   * This function should move DODGER to the right
   * (mabye 4 pixels?). Use window.requestAnimationFrame()!
   */

   let dodgerLeftEdge = positionToInteger(DODGER.style.left); // This could fail if the string is '40px', and parseInt() doesn't know how to handle that.

   function step() {
     if (dodgerLeftEdge <= 356) {
       DODGER.style.left = `${dodgerLeftEdge += 4}px`
//       window.requestAnimationFrame(step);
>>>>>>> 0f8ac50df95402ce204d9aee7ea0d46b06548997
     }
   }
   window.requestAnimationFrame(step);
}

<<<<<<< HEAD
function endGame() {
  clearInterval(gameInterval);
  for (i=0; i<ROCKS.length; i++) {
    ROCKS[i].remove();
  }
  window.removeEventListener('keydown', moveDodger);
  alert('YOU LOSE!');
}

function checkCollision(rock) {
  const top = positionToInteger(rock.style.top)

  // rocks are 20px high
  // DODGER is 20px high
  // GAME_HEIGHT - 20 - 20 = 360px;
  if (top > 360) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left);
    const rockLeftEdge = positionToInteger(rock.style.left);
    const dodgerRightEdge = dodgerLeftEdge + 40; // the dodger is 40px x 20px (width x height convention)
    const rockRightEdge = rockLeftEdge + 20; // the rocks are 20px wide
=======
/*
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}

function start() {
  window.addEventListener('keydown', moveDodger);

  START.style.display = 'none';
>>>>>>> 0f8ac50df95402ce204d9aee7ea0d46b06548997

    if (rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerLeftEdge) { // Rock straddles dodger left edge
      return true;
    }
    else if (rockLeftEdge > dodgerLeftEdge && rockRightEdge < dodgerRightEdge) { // Rock hits dodger center region
      return true;
    }
    else if (rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerRightEdge) { // Rock straddles dodger right edge
      return true;
    }
  }
}
