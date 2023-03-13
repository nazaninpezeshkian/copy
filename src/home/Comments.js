import React from 'react';
import "./Comments.css"
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Comments() {
  return (
    <div className='test'>
   <MDBCarousel showControls showIndicators >
      <MDBCarouselItem
       className='d-block bordernone'
       itemId={1}
      >
        <div className='commentflex'>
        <div className='frame1 '>llll</div>
        <div className='frame2'>oooo</div>
        </div>
         
      </MDBCarouselItem>
      <MDBCarouselItem
        className=' d-block  bordernone'
        itemId={2}
        
      
      >
     <div className='commentflex'>
        <div className='frame1'>llll</div>
        <div className='frame2'>oooo</div>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className=' d-block  bordernone'
        itemId={3}
      
   
      >
      <div className='commentflex'>
        <div className='frame1'>llll</div>
        <div className='frame2'>oooo</div>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
  ;
    </div>


  )
}