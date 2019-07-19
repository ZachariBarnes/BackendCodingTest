// This method transforms our input to make sure speed is an integer and init is case insensitive
const normalizeInputs = ((speedInput, initInput) => {
  const speed = Math.floor(speedInput);
  const init = initInput.toUpperCase();
  // Returns a JSON object containing "speed" and "init" properties, we destructur this later
  return { speed, init };
});
// This ternary operator tells us if our input actually contains usuable characrers
const initIsValid = (initInput => ((initInput.includes('.') || initInput.includes('L') || initInput.includes('R'))));

// This methon takes our input and returns validated and normalized parametes
const validateInput = (speedInput, initInput) => {
  if (typeof (speedInput) === 'number' && typeof (initInput) === 'string') {
    const result = normalizeInputs(speedInput, initInput);
    if (speedInput > 0 && initIsValid(initInput)) {
      return result;
    }
  }
  // If input is not valid (no usable characters) , return an error
  return { speed: undefined, init: undefined, error: 'Invalid Input Provided' };
};

// This method creates a particle that we will store in a particles array
// By storing the particles this we always know where a given particle is located
//   even if its overlapping another particle
const createNewParticle = ((character, index) => {
  const newParticle = {
    position: index,
    direction: character,
    inChamber: true,
  };
  return newParticle;
});

// This method is used to insert our particle at a given location.
const replaceCharAt = ((row, index) => {
  // Here we split the row into an array of characters because
  // It is significantly more performant to assign values than it is to concatenate strings
  const charArray = row.split('');
  charArray[index] = 'X';
  const result = charArray.join('');
  return result;
});

// Move all particles and place them in the Linear Chamber then return the result
function calculateNextRow(particles, speed, targetState) {
  let newRow = targetState; // Start with an Empty Chamber
  particles.forEach((particle) => {
    // For each particle, move it
    const particleSpeed = (particle.direction === 'R') ? speed : -speed;
    particle.position += particleSpeed;
    // If the particle is not in the chamber delete it, else place it
    if (particle.position < 0 || particle.position > targetState.length - 1) {
      delete particles.indexOf(particle);
    // For performance, If this particle overlaps an existing particle do not place it
    } else if (newRow.charAt(particle.position) !== 'X') {
      newRow = replaceCharAt(newRow, particle.position);
    }
  });
  return newRow;
}

// This method returns an array containing all particle postions at each time interval
export const animate = ((speedInput, initInput) => {
  // Destructure our normalized input from the validateInput method
  const { speed, init, error } = validateInput(speedInput, initInput);
  // If the input was invalid, return an error (Fail-Fast)
  if (error) { return ['Invalid Input Provided']; }
  const particles = [];
  const result = [];
  let resultLength = 0;
  let targetState = '';

  // Interate over the init String and create particles
  for (let i = 0; i < init.length; i += 1) {
    const currentChar = init.charAt(i);
    if (currentChar === 'L' || currentChar === 'R') {
      particles.push(createNewParticle(currentChar, i));
    }
    // Create a target state (What the chamber looks like once all particles have left the chamber)
    targetState = targetState.concat('.');
  }
  // Create the intial chamber state (time index 0)
  let newestRow = calculateNextRow(particles, 0, targetState);
  result.push(newestRow); // Add the new row to the result set

  // Interate until the chamber resembles the targetState
  while (result[resultLength] !== targetState) {
    // Calculate the next row
    newestRow = calculateNextRow(particles, speed, targetState);
    result.push(newestRow); // Add the new row to the result set
    resultLength = result.length - 1;
  }

  return result;
});


export default animate();
