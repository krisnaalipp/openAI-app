import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar style={{ backgroundColor: "#1167b1" }}>
      <Container className="p-2">
        <Navbar.Brand onClick={() => navigate("/")} className="text-white">
          Home
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end gap-3">
          <Button variant="light" onClick={() => navigate("/keywords")}>
            Create Summary
          </Button>
          <Button variant="light" onClick={() => navigate("/grammar")}>
            Grammar Corrector
          </Button>
          <Button variant="light" onClick={() => navigate("/studynotes")}>
            Create Study Notes
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
