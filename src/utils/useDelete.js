import axios from 'axios'
import {React, useReducer} from 'react'

const reducer = (state, action) => {
    if(action.type === 'REQUEST'){
      return {
        ...state, 
        loading: true
      }
    }
    if(action.type === 'SUCCESS') {
      return{
        ...state, 
        loading: false,
        data: action.data
      }
    }
    //manipular o estado
    return state
  }

const useDelete = () => {
    const [data, dispatch] = useReducer(reducer, {
        loading: false, 
        data: {}
      } )
    const remove = url => {
        dispatch({type: 'REQUEST'})
        axios
        .delete(url)
        .then(() => {
            dispatch({
                type: 'SUCCESS'
            })
        })
    }
    return [data, remove]
}

export default useDelete