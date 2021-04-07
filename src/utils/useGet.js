import { useReducer, useEffect } from 'react'
import axios from 'axios'

//função pura - recebe parâmetros e retorna algo baseada nos parâmetros, mais fácil de testar
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
  
  const useGet = url => {
    const [data, dispatch] = useReducer(reducer, {
      loading: true, 
      data: {}
    } )
    useEffect(() => {
      dispatch({type:  'REQUEST'})
      axios
        .get(url)
        .then(res => {
          dispatch({type: 'SUCCESS', data: res.data})
        })
    }, []) 
    //os colchetes são utilizados pois a função é chamada somente uma vez e não depende de ninguém
    return data
  }

  export default useGet