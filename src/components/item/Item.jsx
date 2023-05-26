import React from 'react'


const Item = (props) => {
  return (
    <div className="tables_item">
        <img src={props.image} alt="" />
        <h4 className='item_name'>{props.title}<br /><small item_price>$ {props.price} </small></h4>
        <button>Add to card</button>
    </div>
  )
}

export default Item