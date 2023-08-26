
import React from 'react';
function Cards_section_props(props) {
  return (
    <>
   
          <div className="cards">
            <div className="img-div">
            <img src={props.imgsrc} alt="my image here" className='card_img' />
            </div>
            <div className="card-heading">
            <h3 className="card-title">{props.title}</h3>
           <span className="card-category">{props.para}</span>
           <div className="button-div d-flex card-button">
           <button onClick={() =>window.location ='https://google.com'}>Code</button>
           <button onClick={() =>window.location ='https://google.com'} className='ms-5'>Source</button>
           </div>
            </div>
          </div>
     
    </>
  );
}
export default Cards_section_props
