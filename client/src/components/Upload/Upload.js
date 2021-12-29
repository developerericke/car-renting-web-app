import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import './upload.css';
import { Random } from 'react-animated-text';

const Upload = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [error,setError] = useState();

    const getCars =() =>{
        setIsLoading(true);
        Axios.get('http://localhost:5000/cars').then(response=>{
          console.log(response.data);
            setData(response.data.cars);
            setIsLoading(false);
           }).catch(err=>{
            setError(err);
           });
    }
      
    useEffect(()=>{
    getCars();
    }, []);
    
    if(error){
        return <h1><Random text="  Sorry something went wrong"/></h1>
    }
    if(isLoading){
      return <h1>Loading...</h1>
    }
    
    return (

    <div className="car">
      <h1 className="text-center text-info">Cars Category</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2"> 
          <div className="col-md-3">
          <button className="btn btn-warning w-100 mb-4" onClick={()=>setData(data)}>All</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>('Casual')}>Casual Cars</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>('SUV')}>
              SUV (Sports utility vehicle)
            </button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>('Trucks')}>Trucks</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>('Pick-up')}>Pick-Up</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>('Convertible')}>Convertible</button>
            
          </div>
          <div className="col-md-9">
                    <div className="row">
                    {data.map((values) => {
                        return (
                          <>
                            <div className="col-md-4 mb-4">
                              <div className="card">
                                <h2 className="card-title bg-success " key={values.id}>
                                  {values.car_name}
                                </h2>
                                <img
                                  className="card-img-top"
                                  src={`http://localhost:5000/images/uploaded_images/${values.image}`}
                                  alt="Card image cap"
                                />
                                <div className="card-body">
                                  <h2 className="card-title" >{values.category}</h2>
                                  <h3 className="card-text" >Price:  {values.price}</h3>
                                  <h4 className="card-text" >Seats:  {values.seat_capacity}</h4>
                                  <button type="button" className="btn btn-dark" onClick={()=>{}}>
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
    )
}

export default Upload
