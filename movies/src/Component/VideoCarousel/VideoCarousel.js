import react, {useState} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import ReactPlayer from 'react-player'
import TaxiDriver from "./videos/TaxiDriver.mp4"
import DevilsMile from "./videos/DevilsMile.mp4"
import OnceUpon from "./videos/OnceUpon.mp4"
import "../VideoCarousel/VideoCarousel.css"

const ModalImagesPreview = () => {
  return (
    <div>
      <Carousel>
        <div>
          <ReactPlayer
           url={DevilsMile}
           muted
            width='100%'
            height='100%'
            playing={true}
            style={{pointerEvents: 'none'}}
           
          />
        </div>
        <div className="taxidriver">
        <ReactPlayer
            url={TaxiDriver}
            muted
            width='100%'
            height='100%'
            playing={true}
           />
            
        </div>
        <div className="onceupon">
        <ReactPlayer
        url={OnceUpon}
        muted
        width='100%'
        height='100%'
        playing={true} />
        </div>
      </Carousel>
    </div>
  )
}

export default ModalImagesPreview;