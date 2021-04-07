import React from 'react'
import Rest from './rest'

const baseURL = 'https://mymoney-dev-ruth-default-rtdb.firebaseio.com/'
const { useGet } = Rest(baseURL)

const Months = () => {
    const data = useGet('meses')
    if(data.loading){
        return <span>Loading...</span>
    }
    if(Object.keys(data.data).length > 0){
    return( 
      <table className='table'>
        <thead>
          <tr>
            <th>Month</th>
            <th>Forecast Entries</th>
            <th>Entries</th>
            <th>Exit Forecast</th>
            <th>Exits</th>
          </tr>
        </thead>
        <tbody>
        {
          Object
            .keys(data.data)
            .map(mes => {
            return (
              <tr key={mes}>
                <td>{mes}</td>
                <td>{data.data[mes].previsao_ent}</td>
                <td>{data.data[mes].entradas}</td>
                <td>{data.data[mes].previsao_saida}</td>
                <td>{data.data[mes].saidas}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    )
    }
        return null
  }
export default Months

