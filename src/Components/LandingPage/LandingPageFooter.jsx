import React from 'react'
import { CiInstagram } from 'react-icons/ci'
import { FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const LandingPageFooter = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal text-[#2b2b2b] py-10">
                <aside>
                    <p>Your partner in social media success</p>
                    <section className='flex gap-4 text-2xl mt-4'>
                        <CiInstagram
                            className="p-3 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#FAFAFA] rounded-full"
                        />
                        <FaXTwitter className="p-3 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#FAFAFA] rounded-full" />
                        <FaYoutube className="p-3 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#FAFAFA] rounded-full" />
                    </section>
                </aside>

                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <a className="link link-hover">Who We Are</a>
                    <a className="link link-hover">What We Do</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Our Vision</a>
                    <a className="link link-hover">Our Pricing</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Our Services</h6>
                    <a className="link link-hover">Socmed Management</a>
                    <a className="link link-hover">Content Creation</a>
                    <a className="link link-hover">Analytics & Reporting</a>
                    <a className="link link-hover">Campaign Management</a>
                    <a className="link link-hover">Social Listening</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">FAQs</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Refund Policy</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Community</h6>
                    <a className="link link-hover">Join Our Community</a>
                    <a className="link link-hover">Events & Workshops</a>
                    <a className="link link-hover">Member Stories</a>
                </nav>
            </footer>
        </div>
    )
}

export default LandingPageFooter
