const BREAKINCREMENT = "BREAKINCREMENT";
const BREAKDECREMENT = "BREAKDECREMENT";
const BREAKRESET = "BREAKRESET";

const breakIncrementCreator = () => {
  return {
    type: BREAKINCREMENT
  }
}

const breakDecrementCreator = () => {
  return {
    type: BREAKDECREMENT
  }
}

const breakResetCreator = () => {
  return {
    type: BREAKRESET
  }
}

module.exports = {BREAKINCREMENT, BREAKDECREMENT, BREAKRESET, breakIncrementCreator, breakDecrementCreator, breakResetCreator}
