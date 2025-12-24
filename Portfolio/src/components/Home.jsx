import { useNavigate } from 'react-router-dom';
// import contact from './ContactUs';

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="container mt-5 pt-5">
            {/* Hero Section */}
            <div className="row align-items-center mt-3 mb-5">
                <div className="col-12 text-center">
                    <h1 className="display-5 fw-bold mb-3">
                        Hi, I'm Ayush👋
                    </h1>
                    <p className="lead mb-4 text-light">
                        Full Stack Developer | MERN & Java | Secure Web Applications
                    </p>
                    <div className="mt-4">
                        <button onClick={()=>navigate('/projects')} className="btn btn-primary me-3 px-4 py-2">View Projects</button>
                        <button onClick={() => navigate('/about')} className="btn btn-outline-secondary text-light px-4 py-2">About Me</button>
                    </div>
                </div>
            </div>

            {/* What I Do Section */}
            <div className="row mb-5">
                <div className="col-12">
                    <h2 className="text-center mb-4">What I Do</h2>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100 text-center p-4">
                        <h5 className="mb-3">Frontend Development</h5>
                        <p className="mb-0 text-light">Responsive, scalable UI using React & modern CSS.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100 text-center p-4">
                        <h5 className="mb-3">Backend Development</h5>
                        <p className="mb-0 text-light">REST APIs with Node.js, Express & Java Spring Boot.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100 text-center p-4">
                        <h5 className="mb-3">Secure Applications</h5>
                        <p className="mb-0 text-light">Authentication, authorization & secure data handling.</p>
                    </div>
                </div>
            </div>

            {/* Tech Stack Section */}
            <div className="row mb-5">
                <div className="col-12">
                    <h2 className="text-center mb-4">Tech Stack</h2>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card h-100 text-center p-3">
                        <p className="mb-0 text-light">React, HTML, CSS, Bootstrap</p>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card h-100 text-center p-3">
                        <p className="mb-0 text-light">Node.js, Express</p>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card h-100 text-center p-3">
                        <p className="mb-0 text-light">Java, JDBC, JSP, Servlet, Spring Boot</p>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card h-100 text-center p-3">
                        <p className="mb-0 text-light">MongoDB, MySQL</p>
                    </div>
                </div>
            </div>

            {/* Learning Section */}
            <div className="row mb-5">
                <div className="col-12">
                    <div className="card p-4">
                        <h2 className="mb-3">Learning & Growth</h2>
                        <p className="mb-0 text-light">
                            Continuously learning new tools, improving performance,
                            security, and user experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="row">
                <div className="col-12">
                    <div className="card bg-dark text-white text-center p-5">
                        <h2 className="mb-3">Let's Build Something Secure & Scalable</h2>
                        <p className="mb-4">Ready to turn your ideas into reality with secure, scalable solutions.</p>
                        <button onClick={() => navigate('/contactUs')} className="btn col-3 vstack mx-auto btn-light px-5">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;