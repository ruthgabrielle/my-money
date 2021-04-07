import React from 'react'
import Months from './Months'
import AddMonth from './AddMonth'

const Home = () => {
  return (
  <div className='container'>
    <AddMonth />
    <Months />
  </div>
  )
}
export default Home