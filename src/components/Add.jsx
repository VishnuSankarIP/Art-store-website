import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadImageAPI } from '../services/allAPI';



function Add({setUploadImageResponse}) {

    const [uploadImage, setUploadImage] = useState({ title: "", artName: "", imageLink: "" })
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true);
    console.log(uploadImage);



    const handleClose = () => {
        setShow(false)
        setUploadImage({ ...uploadImage, title: "", artName: "", imageLink: "" })
    }


    const handleUpload = async () => {
        const { title, artName, imageLink } = uploadImage
        if (title && artName && imageLink) {
            const result = await uploadImageAPI(uploadImage)
            console.log(result);
            if (result.status >= 200 && result.status < 300) {
                alert(`Image'${result.data.title}'upload succesfully`)
                setUploadImageResponse(result.data)
                handleClose()
            }
            else {
                alert("API call Failed...Please try after some time!!")
            }
        }
        else {
            alert("Please fill form completely")
        }

    }


    return (
        <>
            <div className="btnDiv mt-5">
                <button onClick={handleShow}  >Add Paintings</button>
                
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}

            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Paintings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the form</p>
                    <div className="border rounded border-secondary p-3">
                        <FloatingLabel controlId='floatingInputTitle' label='Art title' className='mb-3' >
                            <Form.Control value={uploadImage.caption} onChange={e => setUploadImage({ ...uploadImage, title: e.target.value })} type='text' placeholder='Art title'></Form.Control>
                        </FloatingLabel>
                        <FloatingLabel controlId='floatingInputName' label='Artist Name' className='mb-3' >
                            <Form.Control value={uploadImage.imageUrl} onChange={e => setUploadImage({ ...uploadImage, artName: e.target.value })} type='text' placeholder='Artist Name'></Form.Control>
                        </FloatingLabel>
                        <FloatingLabel controlId='floatingInputLink' label='Art Image url' className='mb-3' >
                            <Form.Control value={uploadImage.youtubeLink} onChange={e => setUploadImage({ ...uploadImage, imageLink: e.target.value })} type='text' placeholder='Art Image url'></Form.Control>
                        </FloatingLabel>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpload} variant="primary">Upload</Button>
                </Modal.Footer>
            </Modal>


        </>
    )
}



export default Add