const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1))
}

const generateRandomHexColor = () => {
  const colorOne = getRandomInt(255)
  const colorTwo = getRandomInt(255)
  const colorThree = getRandomInt(255)

  const hexColor = '#' + colorOne.toString(16).padStart(2, '0') + 
    colorTwo.toString(16).padStart(2, '0') + 
    colorThree.toString(16).padStart(2, '0')

  return hexColor
}

export {  getRandomInt, generateRandomHexColor };

