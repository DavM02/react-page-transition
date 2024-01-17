import { Link } from "react-router-dom"
import './Nav.scss'
function Nav() {
    return <header>
         
            <nav>
                <ul className="menu">
                    <li>
                        <Link to={'/'}>Home</Link>
                        
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>

                    <li>
                        <Link to={'/contacts'}>Contact</Link>
                    </li>

                </ul>
            </nav>
        
    </header>
}

export default Nav