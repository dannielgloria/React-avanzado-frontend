import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Navigationbar() {
    const { user, logout } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Tiwtter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {user ? (
                            <>
                                <Nav.Link href="/posts">Posts</Nav.Link>
                                <Nav.Link href="/create-post">Crear Post</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="/">Login</Nav.Link>
                                <Nav.Link href="/register">Register</Nav.Link>
                            </>
                        )}
                    </Nav>
                    {user && (
                        <Button variant="outline-danger" onClick={handleLogout}>
                            Logout
                        </Button>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}