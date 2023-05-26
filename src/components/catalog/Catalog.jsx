import React, { useState , useEffect } from 'react'

import './Catalog.css'
import Item from '../item/Item'

const Catalog = () => {

  const [tables,setTables] = useState([])

  const getData = () =>{
    fetch("http://localhost:3001/tables")
    .then(response => response.json())
    .then(data => setTables(data))
  }


  useEffect(()=>{
    getData()
  },[])

  return (
    <div className='catalog_container'>
        <h1 className='catalog_heading'>Tables</h1>
        <div className="tables_container">
            {tables && tables.length>0 && tables.map((table,index) => {
                return(
                    <Item key={index} image={table.image} title={table.title} price={table.price} />
                )
            })}
        </div>
    </div>
  )
}

export default Catalog