import MyProfile from '../assets/myProfile.jpg';

const About = () => {
    return (
        <div className='container mt-5'>

            <div className="row mb-4">

                <div className="col-md-12 mb-3 mt-5 d-flex justify-content-center align-items-start">
                    <img src={MyProfile} alt="MyProfile" className='rounded mt-4' width={"200px"} />
                </div>


                <div className="col-md-12">
                    <div className="row h-100">
                        {/* About me */}
                        <div className="col-md-6 mb-3 mb-md-0">
                            <div className="card text-light h-100" style={{ width: "100%" }}>
                                <div className="card-body">
                                    <p className="card-text">Self-driven Computer Science undergraduate with a strong foundation in full-stack development, Java technologies, and modern
                                        web frameworks. Passionate about building secure, scalable applications and solving real-world problems through code. Eager
                                        to apply technical knowledge, analytical thinking, and a continuous learning mindset in a growth-focused organization.</p>
                                </div>
                            </div>
                        </div>

                        {/* what I do in my career */}
                        <div className="col-md-6">
                            <div className="card d-flex align-items-end flex-column text-light h-100" style={{ width: "100%" }}>
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-body-secondary">What I Do</h6>
                                    <p className="card-text">I design and develop end-to-end web applications—from intuitive user interfaces to robust backend systems.

                                        On the frontend, I build responsive and interactive UIs.
                                        On the backend, I focus on business logic, data handling, and system reliability.

                                        Think of it like this:
                                        Frontend is the dashboard users interact with, backend is the engine that keeps everything running smoothly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* My Tech Stack */}
            <div className="row mb-4">
                <div className="col-12">
                    <h5 className="card-title text-light mb-3">Tech Stack</h5>

                    <div className="row">
                        {/* Frontend */}
                        <div className="col-md-3 col-sm-6 mb-3">
                            <div className="card h-100" style={{ width: "100%" }}>
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Frontend</h6>
                                    <p className="card-text text-light">React.js, JavaScript, HTML, CSS</p>
                                    <p className="card-text text-light">Tailwind CSS, Responsive Design</p>
                                </div>
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="col-md-3 col-sm-6 mb-3">
                            <div className="card h-100" style={{ width: "100%" }}>
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Backend</h6>
                                    <p className="card-text text-light">Java (JDBC, Servlets, JSP)</p>
                                    <p className="card-text text-light">Node.js, Express.js</p>
                                </div>
                            </div>
                        </div>

                        {/* Database */}
                        <div className="col-md-3 col-sm-6 mb-3">
                            <div className="card h-100" style={{ width: "100%" }}>
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Database</h6>
                                    <p className="card-text text-light">MySQL, PostgreSQL</p>
                                    <p className="card-text text-light">MongoDB</p>
                                </div>
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="col-md-3 col-sm-6 mb-3">
                            <div className="card h-100" style={{ width: "100%" }}>
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Tools & Practices</h6>
                                    <p className="card-text text-light">Git & GitHub</p>
                                    <p className="card-text text-light">REST APIs</p>
                                    <p className="card-text text-light">MVC Architecture</p>
                                    <p className="card-text text-light">Clean Code Principles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* My Vision */}
            <div className="row">
                <div className="col-12">
                    <h5 className="card-title text-light mb-3">Career Vision</h5>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card" style={{ width: "100%" }}>
                                <div className="card-body">
                                    <p className="card-text text-light">My goal is to grow as a Full-Stack Java Developer who builds secure, scalable systems that solve meaningful problems.</p>
                                    <p className="card-text text-light">I want to work in environments where:</p>
                                    <p className="card-text text-light">Code quality matters</p>
                                    <p className="card-text text-light">Security is valued</p>
                                    <p className="card-text text-light">Learning and improvement are encouraged</p>
                                    <p className="card-text text-light">Long term, I aim to contribute to large-scale, reliable software systems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;