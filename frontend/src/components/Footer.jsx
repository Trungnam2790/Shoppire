import React from 'react'
import { Link } from 'react-router-dom'
import {
    BsFacebook,
    BsTwitterX,
    BsInstagram,
    BsLinkedin,
    BsTelephoneFill,
    BsEnvelopeFill,
    BsGeoAltFill
} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className="max-padd-container mt-10">
            <div className="max-padd-container bg-black text-white py-10 rounded-tr-3xl rounded-tl-3xl">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Logo + Mô tả */}
                    <div>
                        <Link to="/">
                            <h4 className="bold-24 text-secondary">
                                Shoppire
                            </h4>
                        </Link>
                        <p className="text-white mt-5">
                            Crafted with care and dedication. Bringing quality and style right to your doorstep. Your satisfaction is our promise!
                        </p>
                        <p className="mt-4 text-white/70">Copyright 2024 shoppire. All rights reserved.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="h4 mb-4">Quick Links</h4>
                        <ul className="space-y-2 regular-15">
                            <li className="text-gray-10"><Link to="/about">About Us</Link></li>
                            <li className="text-gray-10"><Link to="/properties">Products</Link></li>
                            <li className="text-gray-10"><Link to="/services">Services</Link></li>
                            <li className="text-gray-10"><Link to="/contact">Contact</Link></li>
                            <li className="text-gray-10"><Link to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="h4 mb-4">Contact Us</h4>
                        <p className="text-gray-10 mb-2 flex items-center gap-2">
                            <BsTelephoneFill /> +1 (123) 456-7890
                        </p>
                        <p className="text-gray-10 mb-2 flex items-center gap-2">
                            <BsEnvelopeFill /> support@shoppire.com
                        </p>
                        <p className="text-gray-10 mb-2 flex items-center gap-2">
                            <BsGeoAltFill /> 123 Shoppire, Suite 100, New York, NY
                        </p>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h4 className="h4 mb-4">Follow Us</h4>
                        <div className="flex space-x-4 text-secondary text-xl">
                            <a href="#"><BsFacebook /></a>
                            <a href="#"><BsTwitterX /></a>
                            <a href="#"><BsInstagram /></a>
                            <a href="#"><BsLinkedin /></a>
                        </div>
                    </div>

                </div>

                {/* Powered by */}
                <div className="mt-10 text-center text-gray-100">
                    <p>Powered by <a href="#">Shoppire Team</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
