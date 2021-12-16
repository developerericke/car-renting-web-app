import React, { useState } from "react";
import categories from "./Category";
import './Cars.css'

const Cars = () => {
  const [data, setData] = useState(categories);

  const filterResult =(catItem)=>{
    const result = categories.filter((currentData)=>{
      return currentData.categories === catItem;
    });
    setData(result);
  }
  return (
    <div className="car">
      <h1 className="text-center text-info">Cars Categories</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Casual')}>Casual Cars</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('SUV')}>
              SUV (Sports utility vehicle)
            </button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Trucks')}>Trucks</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Pick-up')}>Pick-Up</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Convertible')}>Convertible</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>setData(categories)}>All</button>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((values) => {
                const{id,head,title,rentFee,image} = values;
                return (
                  <>
                    <div className="col-md-4 mb-4" key={id}>
                      <div className="card">
                        <h2 className="card-title bg-success ">
                          {head}
                        </h2>
                        <img
                          className="card-img-top"
                          src={image}
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <p className="card-text">Price:  {rentFee}</p>
                          <button type="button" class="btn btn-dark" onClick={()=>{}}>
                            Rent Today
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
