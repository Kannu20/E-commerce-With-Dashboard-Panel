import { LuMilk } from "react-icons/lu";
import { CiDiscount1 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-item-center">
                        <span><LuMilk /></span>
                        <span className="">Everyday Fresh Products</span>
                    </div>

                    <div className="col d-flex align-item-center">
                        <span><TbTruckDelivery /></span>
                        <span className="">Free delivery for order over $70</span>
                    </div>

                    <div className="col d-flex align-item-center">
                        <span><CiDiscount1 /></span>
                        <span className="">Daily Mega Discounts</span>
                    </div>

                    <div className="col d-flex align-item-center">
                        <span><CiDollar /></span>
                        <span className="">Best price on the market</span>
                    </div>
                </div>

                <div className="row mt-5 linkWrap">
                    <div className="col">
                        <h5>FRUIT & VEGETABLES</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Breakfast & Dairy</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Groceries</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Beverages</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Breads & Bakery</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="copyright mt-3 pt-3 pb-3 d-flex gap-2">
                    <p className="mb-0">Copyright 2025 ©.All rights reserved.Powered by Kanishak Todwal.</p>
                    
                    <p className="mb-0">Privacy Policy</p>
                    
                    <p className="mb-0">Terms & Condition</p>
                    <p className="mb-0">Cookies</p>
                    <ul className="list list-inline">
                        <li className="list-inline-item ml-auto mb-0">
                            <a href="https://github.com/Kannu20" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        </li>

                        <li className="list-inline-item">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </li>

                        <li className="list-inline-item">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                        </li>

                        <li className="list-inline-item">
                            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer