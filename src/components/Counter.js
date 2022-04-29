import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Actions from "../redux/actions";


const Counter = (props) => {

  const count = useSelector(state => state.countReducer);
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(Actions.sayiAksiyon.sayiArttir(2))}
        style={{ margin: '10px', padding: '20px' }}
      >
        ARTTIR (+)
      </button>
      <button
        onClick={() => dispatch(Actions.sayiAksiyon.sayiAzalt(2))}
        style={{ margin: '10px', padding: '20px' }}
      >
        AZALT (-)
      </button>
      {count}
    </>
  )
}

export default Counter