import { Button, Container, Row, Col, DropdownButton, Dropdown, Spinner } from 'react-bootstrap';
import axios from 'axios';
import InventoryEmployeeItem from "./InventoryEmployeeItem";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';



function InventoryEmployee() {
    const [inventoryData, setInventoryData] = useState([]);
    const [productData, setProductData] = useState([]);
    const [supplierData, setSupplierData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedStock, setSelectedStock] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const navigate = useNavigate();
    const { token, rol_id } = useContext(Context);


    useEffect(() => {


        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost/Proyecto_Inventario/public/api/inventory_index",

                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    }

                );
                setInventoryData(response.data);

                const productResponse = await axios.get("http://localhost/Proyecto_Inventario/public/api/product_index",
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    });
                setProductData(productResponse.data);

                const supplierResponse = await axios.get("http://localhost/Proyecto_Inventario/public/api/supplier_index",
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setSupplierData(supplierResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleFilter = async () => {
        try {
            const response = await axios.post("http://localhost/Proyecto_Inventario/public/api/inventory_show",
                {
                        product_id: selectedProduct,
                        stock: selectedStock,
                        admission_date: selectedDate,
                        supplier_id: selectedSupplier,
                  
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
                ,
            );
            setInventoryData(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching filtered data:', error);
        }
    };

    const handleClearFilters = async () => {
        try {
            const response = await axios.get("http://localhost/Proyecto_Inventario/public/api/inventory_index",
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setInventoryData(response.data);
            setSelectedProduct(null);
            setSelectedStock(null);
            setSelectedDate(null);
            setSelectedSupplier(null);
        } catch (error) {
            console.error('Error clearing filters:', error);
        }
    };


    if (!inventoryData.length) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    return (
        <>

            <br />

            <hr />

            <Row className="mb-3">
                <Col>
                    <DropdownButton id="dropdown-product" title="Product">
                        {productData.map((product) => (
                            <Dropdown.Item key={product.id} onClick={() => setSelectedProduct(product.id)}>
                                {`${product.id} - ${product.name}`}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </Col>

                <Col>
                    <DropdownButton id="dropdown-stock" title="Stock">
                        {inventoryData.map((inventory) => (
                            <Dropdown.Item key={inventory.id} onClick={() => setSelectedStock(inventory.stock)}>
                                {inventory.stock}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </Col>

                <Col>
                    <DropdownButton id="dropdown-date" title="Admission Date">
                        {inventoryData.map((inventory) => (
                            <Dropdown.Item key={inventory.id} onClick={() => setSelectedDate(inventory.admission_date)}>
                                {inventory.admission_date}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </Col>

                <Col>
                    <DropdownButton id="dropdown-supplier" title="Supplier">
                        {supplierData.map((supplier) => (
                            <Dropdown.Item key={supplier.id} onClick={() => setSelectedSupplier(supplier.id)}>
                                {`${supplier.id} - ${supplier.name}`}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </Col>

                <Col>
                    <Button variant="success" onClick={handleFilter}>
                        Apply filters</Button>
                </Col>

                <Col>
                    <Button variant="danger" onClick={handleClearFilters}>
                        Delete filters
                    </Button>
                </Col>



            </Row>

            <hr />
            <Container fluid>
                <Row className="gap-6">
                    {inventoryData.map((inventory) => (
                        <InventoryEmployeeItem
                            key={inventory.id}
                            id={inventory.id}
                            product_id={inventory.product_id}
                            stock={inventory.stock}
                            admission_date={inventory.admission_date}
                            supplier_id={inventory.supplier_id}
                        />
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default InventoryEmployee;
