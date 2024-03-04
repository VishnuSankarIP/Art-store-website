import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { getAImageAPI, getCategoryAPI, removeCategoryAPI, updateCategoryAPI, uploadCategoryAPI } from '../services/allAPI';
import ImageCard from './ImageCard';

function Category() {
 
  const[uploadCategory,setUploadCategory]=useState("")
  const[allCategories,setAllCategories]=useState([])
  const[show,setShow]=useState("")
  const handleClose=()=>{
    setShow(false);
    setUploadCategory("")

  }
  const handleShow=()=>setShow(true);

const handleAddCategory= async()=>{
if(uploadCategory){
  const result=await uploadCategoryAPI({uploadCategory,allImages:[]})
  handleClose()
  getAllCategory()
}
else{
  alert("Please fill the form")
}

}
const getAllCategory=async()=>{
  const result=await getCategoryAPI()
  setAllCategories(result.data)
}
console.log(allCategories)
useEffect(()=>{
  getAllCategory()
},[])

const handleRemoveCategory=async(cId)=>{
 await removeCategoryAPI(cId)
 getAllCategory()
}

const dragOverCategory=(e)=>{
  e.preventDefault()
  console.log("dragging over category");
}

const imageDropped=async(e,categoryId)=>{
  const imageId=e.dataTransfer.getData("imageId")
  console.log(`Video Dropped with iId:${imageId},inside category id:${categoryId}`);
  // get details of imageid
  const {data}= await getAImageAPI(imageId)
  console.log(data);
  // get category details where we have 

let selectedCategory=allCategories.find(item=>item.id==categoryId)
      selectedCategory.allImages.push(data)
      console.log(selectedCategory);
      await updateCategoryAPI(categoryId,selectedCategory)
      getAllCategory()
}
  return (
    <>
    <div className="d-flex justify-content-around border rounded">
    <h3>Category</h3>
    <button onClick={handleShow}>Add</button>
    </div>
    <div className="container-fluid">
     {allCategories.length>0?allCategories.map((item,index)=>(
      <div droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>imageDropped(e,item?.id)} key={index} className="border rounded p-2 mt-3">
      <div className="d-flex justify-content-between mt-2">
        <h5>{item.uploadCategory}</h5>
       <button onClick={()=>handleRemoveCategory(item.id)}>Remove</button>
       
      </div>
      <div className="row mt-2">
        {
          item.allImages?.length>0 &&
          item.allImages?.map((image,index)=>(
            <div key={index} className="col-lg-6">
              <ImageCard insideCategory={true} displayData={image}/>
            </div>

          ))
        }
      </div>
      </div>
     ))
      : <div className='text-danger fw-bolder'>No categories are added yet!!!</div>
      } 
      
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId='floatingInputCaption' label='Category name' className='mb-3' >
            <Form.Control type='text' placeholder='category name' value={uploadCategory} onChange={e=>setUploadCategory(e.target.value)} ></Form.Control>
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Category
