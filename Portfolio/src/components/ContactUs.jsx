import React from 'react'
import './Contact.css';

const ContactUs = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
            <div className="card mainBlock" style={{ width: "50%", maxWidth: "600px", minWidth: "300px" }}>
                <h5 className="card-header bg-primary text-white text-center py-3">Contact Us</h5>
                <div className="card-body p-4">
                    <div className='d-grid gap-3'>
                        {/* Name Field */}
                        <div>
                            <label className="form-label mb-2">Name</label>
                            <input type="text" placeholder='Your Name' className='form-control inputField rounded' style={{ height: '45px' }}
                            />
                        </div>
                        
                        {/* Email Field */}
                        <div>
                            <label className="form-label mb-2">Email</label>
                            <input 
                                type="email" placeholder='yourmail@gmail.com' className='form-control inputField rounded' style={{ height: '45px' }}
                            />
                        </div>
                        
                        {/* Message Field */}
                        <div>
                            <label className="form-label mb-2">Message</label>
                            <textarea  placeholder='Enter Your Message' className='form-control inputField rounded' rows="4" 
                            />
                        </div>
                        
                        {/* Submit Button */}
                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn btn-primary px-4 py-2" style={{ minWidth: '150px' }}>
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;