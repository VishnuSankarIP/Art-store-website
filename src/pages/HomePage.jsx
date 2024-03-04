import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'


function HomePage() {
  const[uploadImageResponse,setUploadImageResponse]=useState("")


  
  return (
    <>
   <div  style={{backgroundColor:'#FEFFDF'}}>
    <div className="BtnDiv d-flex justify-content-end me-5 ">
  <Add setUploadImageResponse={setUploadImageResponse}/>
   </div>
  
<div className="container-fluid mt-3 mb-5 row">
  <div className="col-lg-9">
    <h3>All Paintings</h3>
  
    <View uploadImageResponse={uploadImageResponse} />
    </div>
  <div className="col-lg-3">
 
  <Category/>
  </div>

   
</div>

</div>
    </>
  )
}

export default HomePage
