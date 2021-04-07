import React from  'react'
import Rest from './rest'


const baseURL = 'https://mymoney-dev-ruth-default-rtdb.firebaseio.com/'
const { useGet, usePost, useDelete } = Rest(baseURL)

function App() {
//  const data = useGet('movimentacoes/2021-03')
    const data = useGet('meses')
//  const [postData, post] = usePost('movimentacoes/2021-03')
//  const [deleteData, remove] = useDelete()

  const saveNew = () => {
    //post({ valor: 10, descricao: 'testinho'})
  }

  const doRemove = () => {
    //remove('movimentacoes/2021-03/-MXbRH1hI8HBOCZKSmJN')
  }

  return (
    <div>
    <nav className='navbar navbar-light bg-light'>
      <div className='container'>
        <a className='navbar-brand'>MyMoney</a>
      </div>
    </nav>

    <h2>Adicionar mês</h2>
    <select>
      <option value='2021'>2021</option>
      <option value='2022'>2022</option>
    </select>
    <select>
      <option value='03'>03</option>
      <option value='04'>04</option>
      <option value='05'>05</option>
    </select>
    
    <div className='container'>
      <button>Adicionar mês</button>
        {
          data.loading && <span>Carregando...</span>
        }
        {
        !data.loading && (
          <table className='table'>
            <thead>
              <tr>
                <th>Mês</th>
                <th>Previsão de Entradas</th>
                <th>Entradas</th>
                <th>Previsão de Saídas</th>
                <th>Saída</th>
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
                    <td>{data.data[mes].saida}</td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        )
      }
    </div>

    <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}

export default App;
