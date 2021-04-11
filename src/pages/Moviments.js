import React from 'react'
import Rest from '../utils/rest'

const baseURL = 'https://mymoney-dev-ruth-default-rtdb.firebaseio.com/'
const { useGet } = Rest(baseURL)


const Moviments = ({match}) => {
   const data = useGet(`movimentacoes/${match.params.data}`)
   
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
                     </tr>
                  )
               })
         }
      </tbody>
   </table>
   </div>
   )
}

 export default Moviments  