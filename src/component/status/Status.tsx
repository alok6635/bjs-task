import { Select } from 'antd';
import "./status.css";
import { AddressIcon, LocationIcon } from '../../common/svg';

const Status = () => {
    return (
        <section className="status">
            <div className="container">
                <ul>
                    <li>
                        <i>
                            <LocationIcon />
                        </i>
                        <div className='box'>
                            <h4>Location</h4>
                            <span>4 Woodside Pl, Chippenham, WS10 8RR</span>
                        </div>
                    </li>
                    <li>
                        <i>
                            <AddressIcon />
                        </i>
                        <div className='box'>
                            <h4>Address & Postcode</h4>
                            <span>4 Woodside Pl, Chippenham, WS10 8RR</span>
                        </div>
                    </li>
                    <li className="select">
                        <h4>Status</h4>
                        <Select
                            placeholder="Select an option"
                            size='middle'
                            showSearch={{
                                optionFilterProp: ['label', 'otherField'],
                            }}
                            style={{ background: "#E5E7E9", borderRadius: 20, color:"#090B0E" }}
                            options={[
                                { value: 'a11', label: 'a11', otherField: 'c11' },
                                { value: 'b22', label: 'b22', otherField: 'b11' },
                                { value: 'c33', label: 'c33', otherField: 'b33' },
                                { value: 'd44', label: 'd44', otherField: 'd44' },
                            ]}
                        />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Status