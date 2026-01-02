import { OrderIcon, RequestIcon, VechileIcon } from '../../common/svg'

const SliderDetail = () => {
    return (
        <div className="slider_left">
            <h2>Defect <strong>Air System-</strong> <span>Air Bags</span> </h2>
            <h3>
                <span>
                    <VechileIcon />
                </span> FON WU73 BR</h3>
            <ul>
                <li>
                    <i>
                        <OrderIcon />
                    </i>
                    <div className="order_details">
                        <strong>Assigned Date & Time </strong>
                            <span>27/08/2024 - 12:30 PM</span>
                       
                    </div>
                </li>
                <li>
                    <i>
                        <RequestIcon />
                    </i>
                    <div className="order_details">
                        <strong>Required by Date</strong>
                            <span>29/08/2024</span>
                    </div>
                </li>
                <li>
                    <i>
                        <RequestIcon />

                    </i>
                    <div className="order_details">
                        <strong>Booking Date
                            <span>26/08/2024</span>
                        </strong>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SliderDetail