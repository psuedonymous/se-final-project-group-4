import { Form, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function SignupPage() {
    return (
        <div style={{ background: 'linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)', minHeight: '100vh' }}>
            <Container>
                <Row className='justify-content-center'>
                    <Col sm={4}>
                        <Form>
                            <h3 className='mt-5 text-center'>Sign Up</h3>

                            <div>
                                <label>Username</label>
                                <input type="text" className="form-control" placeholder="Username" />
                            </div>

                            <div>
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="email@gmail.com" />
                            </div>

                            <div>
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>

                            <div>
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Retype password" />
                            </div>

                            <Row className='justify-content-center' xs={2}>
                                <button type="submit" className="btn btn-dark btn-lg mt-3">Create Account</button>
                            </Row>
                            <p className="text-center mt-2"> Already Registered?<Link to='/login'> Log in here</Link> </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}