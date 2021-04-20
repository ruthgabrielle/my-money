import {React, useState} from 'react'
import Rest from '../utils/rest'

const baseURL = 'https://mymoney-dev-ruth-default-rtdb.firebaseio.com/'
const { useGet, usePost, useDelete } = Rest(baseURL)


const Moviments = ({match}) => {
   const data = useGet(`movimentacoes/${match.params.data}`)
   const [postData, save] = usePost(`movimentacoes/${match.params.data}`)
   const [removeData, remover] = useDelete()
   const [descricao, setDescricao] = useState('')
   const [valor, setValor] = useState('')


   const onChangeDescricao = evt => {
      setDescricao(evt.target.value)
   }

   const onChangeValor = evt => {
      setValor(evt.target.value)
   }
   const saveMoviment = async() => {
      if(!isNaN(valor) && valor.search(/^[-]?\d+(\.)?\d+?$/) >= 0){
      await save({
         descricao,
         valor: parseFloat(valor)
      })
      setDescricao('')
      setValor(0)
      data.refetch()
    }
   }

   const removeMoviment = async(id) => {
      await remover (`movimentacoes/${match.params.data}/${id}`)
      data.refetch()
   }
   //controlled form
   return(
   <div className='container'> 
   <h1>Moviments</h1>

   <table className='table'>
      <thead>
         <tr>
            <th>Descrição</th>
            <th>Valor</th>
         </tr>
      </thead>
      <tbody>
         { data.data && 
            Object
               .keys(data.data)
               .map(movimentacao => {
                  return (
                     <tr>
                        <td>{data.data[movimentacao].descricao}</td>
                        <td className='text-right'>{data.data[movimentacao].valor}
                        {'  '}
                        <button className='btn btn-danger' onClick={() => removeMoviment(movimentacao)}>-</button>
                        </td>
                     </tr>
                  )
               })
         }
         <tr>
            <td>
               <input type='text' value={descricao} onChange={onChangeDescricao}/>
            </td>
            <td> 
               <input type='text' value={valor} onChange={onChangeValor}/>  
               <button className='btn btn-success' onClick={saveMoviment}>+</button> 
            </td>
         </tr>
      </tbody>
   </table>
   </div>
   )
}

 export default Moviments  