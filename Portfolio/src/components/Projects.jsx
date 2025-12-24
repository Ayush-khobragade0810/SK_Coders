import imageCompressor from '../assets/imageCompressor.png';
import sentimentAnalysis from '../assets/sentimentAnalysis.png';
import calculator from '../assets/calculator.png';
import bootStrap from '../assets/Bootstrap.png';

const Projects = () => {
    return (
        <div className="container mt-5 pt-5">

            {/* Row 1: Project 1 & 2 */}
            <div className="row mt-5 justify-content-center mb-5">
                {/* Project 1 */}
                <div className="col-12 col-md-6 col-lg-6 mb-4">
                    <div className="card h-100">
                        <img src={imageCompressor} className="card-img-top img-fluid" alt="imageCompressor" style={{ height: "250px", objectFit: "cover" }} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title mb-3">Image Compressor</h5>
                            <p className="card-text mb-3 flex-grow-1">
                                Focused on efficient file handling, image compression algorithms, and performance optimization.
                                Real-world utility project demonstrating strong Java fundamentals
                            </p>

                            <div className="mb-3">
                                <span className="border border-secondary rounded-4 p-2 me-1 text-light" style={{ background: "rgba(255, 255, 255, 0.15)", borderRadius: "15px" }}>
                                    JAVA
                                </span>
                                <span className="border border-secondary rounded-4 p-2 me-1 text-light" style={{ background: "rgba(255, 255, 255, 0.15)", borderRadius: "15px" }}>Servlet</span>
                                <span className="border border-secondary rounded-4 p-2 me-1 text-light" style={{ background: "rgba(255, 255, 255, 0.15)", borderRadius: "15px" }}>HTML</span>
                                <span className="border border-secondary rounded-4 p-2 me-1 text-light" style={{ background: "rgba(255, 255, 255, 0.15)", borderRadius: "15px" }}>CSS</span>
                                <span className="border border-secondary rounded-4 p-2 me-1 text-light" style={{ background: "rgba(255, 255, 255, 0.15)", borderRadius: "15px" }}>JavaScript</span>
                            </div>

                            <a href="https://github.com/Ayush-khobragade0810/Image_Compressor_Using-JAVA" className="btn btn-primary mt-auto">Github</a>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="col-12 col-md-6 col-lg-6 mb-4">
                    <div className="card h-100">
                        <img src={sentimentAnalysis} className="card-img-top img-fluid" alt="sentimentAnalysis" style={{ height: "250px", objectFit: "cover" }} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title mb-3">Sentiment Analysis</h5>
                            <p className="card-text mb-3 flex-grow-1">
                                Built using NLP techniques with a full-stack approach. Analyzes user text and classifies sentiment
                                as positive, negative, or neutral. Converts unstructured feedback into actionable insights for
                                real-world use cases like reviews and social media analysis
                            </p>

                            <div className="mb-3">
                                <span className="border border-secondary rounded-4 p-2 me-1 text-light" style={{ background: "rgba(255, 255, 255, 0.15)", borderRadius: "15px" }}>Python</span>
                                <span className="border border-secondary rounded-4 p-2 me-1 text-light" style={{ background: "rgba(255, 255, 255, 0.15)", borderRadius: "15px" }}>React</span>
                                <span className="border border-secondary rounded-4 p-2 me-1 text-light" style={{ background: "rgba(255, 255, 255, 0.15)", borderRadius: "15px" }}>Node.js</span>
                                <span className="border border-secondary rounded-4 p-2 me-1 text-light" style={{ background: "rgba(255, 255, 255, 0.15)", borderRadius: "15px" }}>LLM Model</span>
                            </div>

                            <a href="https://github.com/Ayush-khobragade0810/SentimentAnalyser" className="btn btn-primary mt-auto">Github</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 2: Project 3 & 4 */}
            <div className="row justify-content-center">
                {/* Project 3 */}
                <div className="col-12 col-md-6 col-lg-6 mb-4">
                    <div className="card h-100">
                        <img src={bootStrap} className="card-img-top img-fluid" alt="Static Website" style={{ height: "250px", objectFit: "cover" }} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title mb-3">Static Website Using Bootstrap</h5>
                            <p className="card-text mb-3 flex-grow-1">
                                Built a fully responsive static website using Bootstrap. Designed clean layouts with grid system,
                                components, and utilities. Focused on responsive design, cross-device compatibility, and UI consistency
                            </p>

                            <div className="mb-3">
                                <span className="border border-secondary rounded-4 p-2 me-1 text-light" style={{ background: "rgba(255, 255, 255, 0.15)", borderRadius: "15px" }}>HTML</span>
                                <span className="border border-secondary rounded-4 p-2 me-1 text-light" style={{ background: "rgba(255, 255, 255, 0.15)", borderRadius: "15px" }}>Bootstrap</span>
                            </div>

                            <a href="https://github.com/Ayush-khobragade0810/SK_Coders/tree/main/StaticWebsite" className="btn btn-primary mt-auto">Github</a>
                        </div>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="col-12 col-md-6 col-lg-6 mb-4">
                    <div className="card h-100">
                        <img src={calculator} className="card-img-top img-fluid" alt="Calculator" style={{ height: "250px", objectFit: "cover" }} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title mb-3">Calculator</h5>
                            <p className="card-text mb-3 flex-grow-1">
                                Performs basic arithmetic operations (addition, subtraction, multiplication, division).
                                Implemented DOM manipulation and event handling for real-time input and output.
                                Focused on clean UI, responsive layout, and accurate calculation logic
                            </p>

                            <div className="mb-3">
                                <span className="border border-secondary rounded-4 p-2 me-1 text-light" style={{ background: "rgba(255, 255, 255, 0.15)", borderRadius: "15px" }}>HTML</span>
                                <span className="border border-secondary rounded-4 p-2 me-1 text-light" style={{ background: "rgba(255, 255, 255, 0.15)", borderRadius: "15px" }}>CSS</span>
                                <span className="border border-secondary rounded-4 p-2 me-1 text-light" style={{ background: "rgba(255, 255, 255, 0.15)", borderRadius: "15px" }}>JavaScript</span>
                            </div>

                            <a href="https://github.com/Ayush-khobragade0810/SK_Coders/tree/main/Calculator" className="btn btn-primary mt-auto">Github</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Projects;