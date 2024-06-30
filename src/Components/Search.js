import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = (props) => {
  const {setforecast,setweather,setLoading}=props
  const [city,setcity]=useState("chandigarh")
 
  
  const update = async () => {
    try{
      setLoading(true)
    const response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
    const result = await response.json()
    // props.setforecast(result)
    console.log(result)
    if(result.message==="NOT_FOUND")
    {
      toast.error("Not Found")
    }else{
    setweather(result)
     setforecast(result.forecast)
     setLoading(false)
    }
  }catch(error){
      setLoading(false)
      console.log(error)
      toast.error('Server error')
    }
  }
  const handleChange=(e)=>{

    setcity(e.target.value)
   
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    update()
  }
  
  useEffect(() => {
    update()
    // eslint-disable-next-line
  },[])
  return (<>   
 <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    <div className='b flex justify-center'>
      <form onSubmit={handleSubmit} className='flex-col my-4'  >
        <input className=' w-60 h-9 p-2 rounded-2xl border-3 border-transparent focus:border-blue-500 outline-none' value={city} onChange={handleChange}/>
        <input type='submit' className='bg-blue-800 text-white mx-2 border rounded-xl ring-2 hover:ring-4 w-20 h-8'  value={"Search"} />
        </form>
    </div>
  
    </>

  )
}

export default Search
