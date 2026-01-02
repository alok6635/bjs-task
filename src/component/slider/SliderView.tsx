import { Carousel } from 'antd'


const SliderView = () => {
  return (
    <div className="slider_img">
                        <Carousel >
                            <div>
                                <img src="img\banner.png" alt="slider image" width={423} height={243} />
                            </div>
                            <div>
                                <img src="img\banner.png" alt="slider image" width={423} height={243} />


                            </div>
                        </Carousel>
                    </div>
  )
}

export default SliderView