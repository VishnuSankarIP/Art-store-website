import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/home')
  }

  return (
    <>
      <div className="headerSection">
        <img src='GG_main.png' width={'100%'}></img>
      </div>
      <div className="mainSection" style={{ backgroundColor: '#FEFFDF' }}>
        <div className="container row">
          <div className="col-lg-6"  >
            <div className="container justify-content-center mt-5 ms-5 me-5">
              <h1 style={{ fontSize: '50px' }}>About</h1>
              <h5>Welcome to our art gallery featuring contemporary and cutting-edge art</h5>
              <button onClick={handleNavigate}>More<i className='fa-solid fa-arrow-right'></i></button>
            </div>

          </div>
          <div className="col-lg-6">
            <div className=" mt-5 ms-5 me-4">
              <p style={{ textAlign: 'justify' }}>We are pleased to showcase a wide range of artists from around the world who use a variety of mediums such as painting, sculpture, photography and mixed media to create thought-provoking and visually stunning pieces. Each exhibit is carefully curated to challenge and engage our visitors with topics ranging from social commentary and political activism to personal stories and abstract expressions. Our gallery space is designed to enhance the viewing experience, with ample natural light, spacious rooms, and clean lines that draw attention to the artwork. Whether you're an avid art collector or simply a connoisseur of contemporary art, our gallery offers a dynamic and immersive experience that's sure to inspire and captivate.</p>
            </div>

          </div>
        </div>
        <div className="headerSection2 mt-5">
          <img src='Frameart.png' width={'100%'}></img>
        </div>
        <div className="container mt-5 ">
          <h1 style={{ fontSize: '50px' }}>Exhibitions</h1>
          <div className="row">
            <div className="col-lg-6">
              <img src='Frameart2.png' width={'100%'}></img>
            </div>
            <div className="col-lg-6">
              <div className=" mt-5 ms-5 me-4">
                <h4>Colors of Being</h4>
                <p style={{ textAlign: 'justify' }}>This is oil paintings that celebrates the essence of existence through vibrant pastels and invigorating greens. The abstract paintings featured in this exhibition are a visual representation of the beauty and complexity of life. Soft pastel colors create a soothing atmosphere that invites the viewer to immerse themselves in the art. At the same time, dynamic bursts of greenery add a sense of vitality and energy, bringing the paintings to life. Each work in this exhibition is a unique expression of the artist's vision, colorfully and captivatingly conveying the essence of life.</p>
              </div>

            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <img src='Frameart3.png' width={'100%'}></img>
            </div>
            <div className="col-lg-6">
              <div className=" mt-5 ms-5 me-4">
                <h4>Solution</h4>
                <p style={{ textAlign: 'justify' }}>This is an exciting exhibition that features a stunning collection of abstract paintings in bright and vibrant colors. Works by talented contemporary artists that are used to explore dynamics, texture and movement using bold brushstrokes, geometric shapes and contrasting hues. Each painting represents a unique solution to a creative challenge, the collection as a whole offers a striking visual feast for art lovers and collectors alike. The bright colors used throughout the expression evoke a sense of energy and positivity, attention is manifested in the beauty and sensitivity of abstract art. Whether you're a longtime fan of abstract painting or just want to discover something new and exciting, Solution promises to be an unforgettable experience.</p>
              </div>

            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <img src='Frameart4.png' width={'100%'}></img>
            </div>
            <div className="col-lg-6">
              <div className=" mt-5 ms-5 me-4">
                <h4 >Street art</h4>
                <p style={{ textAlign: 'justify' }}>This is a fascinating photography exhibition showcasing the vibrant and colorful world of street art. The exhibition features photographs of walls painted by talented street artists from around the world. Every photograph is a celebration of creativity as artists use the walls as a canvas to bring their unique visions to life.</p>
              </div>

            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className=" mt-5 ms-5 me-4">
                <h4 style={{ fontSize: '40px' }}>ARt Studio</h4>
                <h6 style={{ fontSize: '30px' }}>unique art space that inspires creativity</h6>

              </div>
            </div>
            <div className="col-lg-6">
              <div className=" mt-5 ms-5 me-4">
                <p style={{ textAlign: 'justify' }}>Bright and versatile space, ideal for a variety of creative events. The studio has plenty of natural light and a flexible layout that can be adapted to suit a range of needs, from small workshops to larger events. The walls are adorned with beautiful artwork, providing an inspiring backdrop for any creative endeavor. In addition to the spacious main hall, the studio also has a photography area, complete with professional lighting and equipment, making it the perfect location for photographers looking to capture stunning shots.</p>
              </div>

            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="Frame5.png" />
                    
                  </Card>
                </div>
                <div className="col-lg-3">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="Frame6.png" />
                    
                  </Card>
                </div>
                <div className="col-lg-3">
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="Frame7.png" />
                    
                  </Card>
                </div>
                <div className="col-lg-3">
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="Frame8.png" />
                    
                  </Card>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default LandingPage
