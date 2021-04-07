import React from  'react'
import Rest from './rest'
import Header from './elements/Header'
import Months from './Months'
import AddMonth from './AddMonth'
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
      <Header/>
        <div className='container'>
          <AddMonth/>
          <Months/>
        </div>
    </div>
  )
}

export default App;
