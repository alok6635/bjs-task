import { EmailIcon, PhoneIcon } from '../../common/svg'
import "./header.css";

const Header = () => {
    return (
        <header>
            <a href="#">
                <strong>Company</strong>
            </a>
            <ul>
                <li>
                    <a href="tel:05522323555">
                        <i>
                            <PhoneIcon />
                        </i>
                        05522323555</a>
                </li>
                <li>
                    <a href="mailto:info@companyname.com">
                        <i>
                            <EmailIcon />
                        </i>
                        info@companyname.com
                    </a>
                </li>
            </ul>

        </header>
    )
}

export default Header