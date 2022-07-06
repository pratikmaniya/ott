import { Container } from "react-bootstrap";

function FooterI() {
    return (
        <div className="Footer">
            <footer className="bg-dark text-center text-white">
                <Container className="p-4">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-google"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-github"></i></a>
                    </section>
                    <section>
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <ul className="list-unstyled mb-0 text-left">
                                    <li>
                                        <a href="#!" className="text-secondary text-decoration-none">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-secondary text-decoration-none">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-secondary text-decoration-none">FAQs</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-secondary text-decoration-none">Jobs</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <ul className="list-unstyled mb-0 text-left">
                                    <li>
                                        <a href="#!" className="text-secondary text-decoration-none">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-secondary text-decoration-none">Terms and Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </Container>
                <div className="text-center p-3">&#169; 2020 Copyright, OTT</div>
            </footer>
        </div>
    );
}

export default FooterI;
