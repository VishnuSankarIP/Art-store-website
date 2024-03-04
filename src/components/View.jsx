import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ImageCard from './ImageCard'
import { getAllImageAPI } from '../services/allAPI'

function View({uploadImageResponse}) {

  const [allImages, setAllImages] = useState([])
  const[deleteImageResponse,setDeleteImageResponse]=useState("")
  const getAllImage = async () => {
    const result = await getAllImageAPI()

    if (result?.status == 200) {
      setAllImages(result?.data);
    }
  }
  useEffect(() => {
    getAllImage()
  }, [uploadImageResponse,deleteImageResponse,])

  console.log(allImages);
  return (
    <div>
      <Row>{allImages?.length > 0 ? allImages?.map((image, index) => (
        <Col className='mb-4' sm={16} md={6} lg={4}>
          <ImageCard displayData={image} setDeleteImageResponse={setDeleteImageResponse} />
        </Col>

      ))
        :
        <div className="text-danger fw-bolder">No content are uploaded yet</div>
      }

      </Row>
    </div>
  )
}

export default View
