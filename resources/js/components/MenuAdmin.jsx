import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';


function MenuAdmin() {
    const token = sessionStorage.getItem("token");
    const id_rol = sessionStorage.getItem("id_rol");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/Proyecto_Inventario/public/");
        }
         if(id_rol != 1){
            navigate("/Proyecto_Inventario/public/Employee");
    
          }

    }, []);

 const handlelogout=()=>{sessionStorage.clear();}

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="home">InventiKS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="inventory">Inventory</Nav.Link>
                        <Nav.Link as={Link} to="products">Products</Nav.Link>
                        <Nav.Link as={Link} to="users">Users</Nav.Link>
                        <Button variant="outline-info" as={Link} to="logout" style={{ position: "absolute", right: 200 }} onClick={handlelogout}>Logout</Button>

                    </Nav>
                </Container>

            </Navbar>
            <br />
            <section>
                <Container>
                    <Outlet>
                    </Outlet>
                </Container>
            </section>
        </>
    );
}


export default MenuAdmin;