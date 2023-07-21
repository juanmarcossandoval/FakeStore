import { React, useState } from 'react';
import { Row, Col, Display4 } from 'bootstrap-4-react';
import Item from './Item';
import FetchHook from '../CustomsHooks/FetchHook';

const Products = () => {
    const [url, setUrl] = useState("https://fakestoreapi.com/products");
    const { data, isPending, error } = FetchHook(url);

    const rowStyle = {
        margin: '15px',
        padding: '5px',
        justifyContent: "center"
    };

    return (
        <>
            <Row justifyContent='center'><Display4>Productos</Display4></Row>
            <Row style={rowStyle}>
                {data && data.map((product, index) =>
                    <Col col='col-6 col-sm-12' key={index} >
                        <Item product={product} />
                    </Col>
                )}
            </Row>
        </>

    );
}

export default Products