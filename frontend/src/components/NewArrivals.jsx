import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import Item from './Item'

const NewArrivals = () => {
  const {products} = useContext(ShopContext)
  const [newArrivals, setNewArrivals] = useState([])

  useEffect(()=>{
    const data = products.slice(0,10)
    setNewArrivals(data)
  },[products])

  return (
    <section>
      <Title title={'New Arrivals'} titleStyles={'text-center'}/>
      <div className="">
        {newArrivals.map((product) => (
          <div key={product._id}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals