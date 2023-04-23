import React from 'react'

const Cartinneritems = ({prop}) => {
    // console.log(prop);
  return (
    <div id={prop.groupName} className="choise-item">
    <h3>{prop.groupName}(optional)</h3>
    <div className="item1">
        {
            prop?.choices.map((ele,i)=>    <div key={i} className="item-names">
            <input id={ele.id} type="checkbox" />
            <label htmlFor={ele.id}>{ele.name}</label>
            <span>₹{(ele.price)/100}</span>
        </div>)
        }

   
    </div>
    
</div>
  )
}

export default Cartinneritems