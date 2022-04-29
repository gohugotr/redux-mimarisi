import ActionTypes from "../actiontypes"

const initialSate = 0

const countReducer = (state = initialSate, action) => {

    switch (action.type) {
      case ActionTypes.count.SAYI_ARTTIR:
        return state + action.payload

      case ActionTypes.count.SAYI_AZALT:
        return state - action.payload
        
      default: return state
    
    }

}
export default countReducer