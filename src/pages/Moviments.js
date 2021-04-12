import {React, useState} from 'react'
import Rest from '../utils/rest'

const baseURL = 'https://mymoney-dev-ruth-default-rtdb.firebaseio.com/'
const { useGet, usePost, useDelete } = Rest(baseURL)


const Moviments = ({match}) => {
   const data = useGet(`movimentacoes/${match.params.data}`)
   const [postData, save] = usePost(`movimentacoes/${match.params.data}`)
   const [removeData, remover] = useDelete()
   const [descricao, setDescricao] = useState('')
   const [valor, setValor] = useState(0.0)


   const onChangeDescricao = evt => {
      setDescricao(evt.target.value)
   }

   const onChangeValor = evt => {
      setValor(parseFloat(evt.target.value))
   }
   const saveMoviment = async() => {
      await save({
         descricao,
         valor
      })
      setDescricao('')
      setValor(0)
      data.refetch()
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
                        <td>{data.data[movimentacao].valor}</td>
                        <button onClick={() => removeMoviment(movimentacao)}>-</button>
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
               <button onClick={saveMoviment}>+</button> 
            </td>
         </tr>
      </tbody>
   </table>
   </div>
   )
}

 export default Moviments  