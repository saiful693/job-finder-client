
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#212529]  text-white p-10">
            <div className="footer">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">All Jobs</a>
                    <a className="link link-hover">Search Jobs</a>
                    <a className="link link-hover">Add Jobs</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Job Finder</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className='flex justify-start gap-60 my-16'>
                <img className='text-white' src="https://preview.colorlib.com/theme/jobfinderportal/assets/img/logo/logo2_footer.png.webp" />
                <p><span className='text-2xl font-medium'>5000+</span> Talented Hunter</p>
                <p><span className='text-2xl font-medium'>451+</span> Company</p>
                <p><span className='text-2xl font-medium'>568</span> Job Per Month</p>
            </div>

            <div className='border-t border-[#2d3544]'></div>
            <div className="text-white flex justify-between mt-10 lg:mr-60">
                <p>Copyright ©2024 All rights reserved</p>
                <div className="flex gap-4 text-xl ">
                    <FaFacebook />
                    <CiTwitter />
                    <CiLinkedin />
                    <FaGithub />
                </div>
            </div>

        </footer>
    );
};

export default Footer;