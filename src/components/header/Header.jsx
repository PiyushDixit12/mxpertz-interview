// import {Button,Offcanvas} from "bootstrap"
import {Container,Nav,Navbar,Button,Offcanvas} from "react-bootstrap"


// eslint-disable-next-line react/prop-types
export const Header = ({details}) => {
    return (
        <Navbar key={"sm"} expand={"sm"} variant="transparent" fixed="top" className="  mb-3 bg-transparent">
            <Container >
                <Navbar.Brand className=" text-white fw-bold fs-3" href="#">Brainly Lingo</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} className=" text-white bg-white" />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-sm`}

                    aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                    placement="end"

                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                            Brainly Lingo
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className=" ">

                        <Nav className=" justify-content-end justify-content-lg-center  flex-grow-1 pe-3">
                            <Nav.Link className=" text-white fs-5" href="#action1">Home</Nav.Link>
                            <Nav.Link className=" text-white fs-5" href="#action2">Leadership</Nav.Link>
                            <Nav.Link className=" text-white fs-5" href="#action2">Daily Quiz</Nav.Link>
                            <Nav.Link className=" fs-5 fw-bold " style={{color: "rgb(48, 48, 207)"}} href="#action3">genre</Nav.Link>

                        </Nav>

                        <Button className={` ${details ? "btn-outline-custom" : "btn-custom-gradient"}  rounded-5 px-4 py-1`} >{details ? "Sign Out " : "Sign in"}</Button>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
