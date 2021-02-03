import React,{Component} from 'react';
import Logo from '../assets/Images/bio_cule.svg';
import '../assets/css/Header.scss';
import Search from '../assets/Images/search.svg';
import Cart from '../assets/Images/shopping-bag.svg';
import AngleDown from '../assets/Images/angle-down.png';


class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="container">
                <div className="margin-box">
                    <nav className="nav-bar">
                        <div className="left-side">
                            <div className="brand-logo">
                                <a href="#">
                                    <img src={Logo} alt="brand logo" />
                                </a>
                            </div>
                            <ul className="items">
                                <a><li className="list-item">Build My Regime</li></a>
                                <a><li className="list-item">Biocule Expert</li></a>
                                <a><li className="list-item">Skin<span><img src={AngleDown}  alt="angle down"/></span></li></a>
                                <a><li className="list-item">Hair<span><img src={AngleDown}  alt="angle down"/></span></li></a>
                                <a><li className="list-item">Educare</li></a>

                            </ul>
                        </div>
                        <div className="right-side">
                            <div className="search">
                                <a>
                                    <img src={Search} alt='search icon' />
                                </a>
                            </div>
                            <div className="cart-bag">
                                <a>
                                    <img src={Cart} alt="add-to cart bag" />
                                </a>
                            </div>
                            <div className="sign-in">
                                <a>
                                    Sign In
                                </a>
                            </div>
                            <div className="create-acc">
                                <a>Create Account</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
export default Header;