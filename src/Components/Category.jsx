import { React, useState } from 'react';
import { Row, Col, Display4 } from 'bootstrap-4-react';
import Item from './Item';
import FetchHook from '../CustomsHooks/FetchHook';


const Category = ({cat}) => {
    const urlCompuesta = "https://fakestoreapi.com/products/category/" + cat;
    const [url, setUrl] = useState(urlCompuesta);
    const { data, isPending, error } = FetchHook(url);

    const rowStyle = {
        margin: '15px',
        padding: '5px',
        justifyContent: "center"
    };

    return (
        <>
            <Row justifyContent='center'><Display4>{cat}</Display4></Row>
            {isPending && <h2>cargando...</h2>}
            {error && <h2>{error}</h2>}
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

export default Category