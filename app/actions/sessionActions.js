const SESSIONINCREMENT = "SESSIONINCREMENT";
const SESSIONDECREMENT = "SESSIONDECREMENT";
const SESSIONRESET = "SESSIONRESET"

const sessionIncrementCreator = () => {
  return {
    type: SESSIONINCREMENT
  }
}

const sessionDecrementCreator = () => {
  return {
    type: SESSIONDECREMENT
  }
}

const sessionResetCreator = () => {
  return {
    type: SESSIONRESET
  }
}

module.exports = {SESSIONINCREMENT, SESSIONDECREMENT, SESSIONRESET, sessionIncrementCreator, sessionDecrementCreator, sessionResetCreator};
