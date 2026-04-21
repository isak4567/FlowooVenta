



function SCProduct({name, number}) {

  
  return (
    <div className="sc-product">
      <div className="scp-amount">
        <p className="font6">{name}</p>
        <p className="font6">{number}</p>
      </div>
      <div className="scp-price">
        <p className="font6">$ precio MXN</p>
      </div>
    </div>
  )
}

export default SCProduct