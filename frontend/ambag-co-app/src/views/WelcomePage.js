import { NavBar } from '../components/NavBar';
import { Link, Navigate } from 'react-router-dom';
import './WelcomePage.css';
import { Row } from 'react-bootstrap';




export default function WelcomePage() {
    return (
        <div >
            <div classNameName="row align-self-center mb-6 mt-5 pt-5 text-center">
                <div className="title col-12" >
                    <div>
                    <div className="card-body text-center">
                            <h5 className="card-title" style={{ fontSize: '10vw',color:'#4166EA' }}>Ambag</h5>
                        </div>
                    </div>
                    <h1 style={{ fontSize: '5vw', color:'#4166EA' }} className="text-center">with us</h1>
                    <Row className="justify-content-center" xs={6}>
                        <Link to='/login' className='btn btn-primary'>
                            Log In
                        </Link>
                    </Row>
                    <p className="text-center mt-4">
                        Don’t have an account?
                        <Link to="/signup" style={{ textDecoration: 'none', fontWeight: "bold", color: "Black" }} className="active"> Signup</Link>
                    </p>
                </div>
            </div>
        </div>

    );
}
