const numberRreducer = (state, action) => {
    switch (action.abc) {
      case 'INCREMENT':
        return state + action.val
      case 'DECREMENT':
        return state - action.val
      default:
        throw new Error()
    }
  }
  export default numberRreducer;