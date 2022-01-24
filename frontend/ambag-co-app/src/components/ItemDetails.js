import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function ItemDetailPage() {
    return (
        <Container>
            <h4 class="my-4">Item Name
            </h4>
            <Row>
                <Col md={7}>
                    <img class="img-fluid" src="https://via.placeholder.com/500x300" alt=""></img>
                </Col>
                <Col md={4}>
                    <Container style={{ backgroundColor: 'rgb(137, 160, 243)' }}>
                        <h5>
                            Description:
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet
                        </p>
                    </Container>

                    <Container style={{ backgroundColor: 'rgb(137, 160, 243)' }}>
                        <h5>
                            Price:
                        </h5>
                        <p>0</p>
                    </Container>

                    <Row className='justify-content-center' xs={4}>
                        <Button>
                            MINE
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}