import React,{ useState } from 'react';

const PriceCart = ({setVal,val}) => {
    const [status,setStatus]=useState(true)
const handleAdd=()=>{
    setStatus(false)
    setVal((initialVal)=>initialVal+1)
}
const handleRemove=()=>{
    setStatus(true)
    if(val>0){
        setVal((initialVal)=>initialVal-1)
    }
}
    return (
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {status?<a onClick={handleAdd} className="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>:<a onClick={handleRemove} className="btn btn-outline-dark mt-auto" href="#" >
                      Remove from cart
                    </a>}
                  </div>
                </div>
    );
};

export default PriceCart;