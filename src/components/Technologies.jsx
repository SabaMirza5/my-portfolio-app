import React from 'react'
import { FaDatabase, FaFigma, FaReact } from 'react-icons/fa'

function Technologies() {
  return (
    <>
      <div className="container" id='technologies'>
        <div className="row">
          <div className="col-md-10">
            <div className="main-technology-heading">
              <h1>Technologies</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ad ab illo doloremque dignissimos. Iusto, maiores cupiditate! explicabo maxime non laboriosam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ad ab illo doloremque dignissimos. Iusto, maiores cupiditate! explicabo maxime non laboriosam!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="technology-div">
              <FaReact size={37} color='#DCCA87' className='mt-5'/>
              <h3>Front-End</h3>
              <p>Experience with Front-End in React-Js and Bootstrape.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="technology-div">
              <FaDatabase  size={37} color='#DCCA87' className='mt-5'/>
              <h3>Back-End</h3>
              <p>Experience with Back-end in Node-js and Database.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="technology-div">
              <FaFigma  size={37} color='#DCCA87' className='mt-5'/>
              <h3>UI/UX</h3>
              <p>Experience with UI/UX tools with Photoshop and Figma.</p>
            </div>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Technologies
