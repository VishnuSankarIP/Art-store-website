import React from 'react'
import { Card } from 'react-bootstrap'
import { removeImageAPI } from '../services/allAPI'

function ImageCard({ displayData ,setDeleteImageResponse,insideCategory}) {

  // remove image
  const deleteImage= async (imId)=>{
   const result= await removeImageAPI(imId)
    setDeleteImageResponse(result.data)


  }
  // dragStarted
  const dragStarted=(e,iId)=>{
    console.log(`Dragging started with video id:${iId}`);
    e.dataTransfer.setData("imageId",iId)
  }

  return (
    <>
      <Card draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} style={{ height: '100%' }} >
       {!insideCategory&&  <Card.Img variant="top" src={displayData?.imageLink}  height={'350px'}/>}
        <Card.Body>
          <Card.Title>{displayData?.title}</Card.Title>
          <Card.Text>
            {displayData?.artName}
          </Card.Text>
          <div className="btnDiv d-flex text-center justify-content-center">
         {!insideCategory&& <button onClick={()=>deleteImage(displayData?.id)} >Remove</button>}
          </div>
         
        </Card.Body>
      </Card>



    </>
  )
  }

export default ImageCard
