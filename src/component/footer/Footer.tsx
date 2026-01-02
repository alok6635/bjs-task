import "./footer.css";
import { MailIconBottom, PhoneIconBottom } from '../../common/svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer_cover">
                <div className="container">
                    <div className="top_footer">
                        <div className="footer_left">
                            <h4>About COMPANY Haulage</h4>
                            <div className="footer_data">
                                <div className='company_detail'>
                                    <strong>Company</strong>
                                    <p>
                                        COMPANY Haulage is Lorem Ipsum is simply simply dummy text of the printing and  dummy text of the printing and typesetting industry. Lorem Ipsum has ry's standard dummy
                                    </p>
                                </div>

                            </div>
                            

                        </div>
                     <div className='footer_right'>
                           <div className="footer_content">
                            <h4>Address</h4>
                            <p>
                                Company House, 3rd floor <br/>
                                Magnam Tower

                            </p>
                        </div>
                        <div className="footer_content">
                            <a href="tel:7879879897877">
                                <PhoneIconBottom />
                                7879879897877
                            </a>
                            <a href="mailto:info@companyname.com">
                                <MailIconBottom />
                                info@companyname.com
                            </a>
                        </div>
                     </div>
                    </div>
                </div>
                <div className="bottom_footer">
                    <div className="container">
                        <div className="bookmark">
                            <h4>©COMPANY Distribution Limited, 2025 - All rights reserved.</h4>
                            <ul>
                                <li>
                                    <a href="#" className='carrer'>Careers</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">CCTV Policy</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer