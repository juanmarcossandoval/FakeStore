import { useParams } from "react-router-dom";
import { React, useState } from 'react';
import FetchHook from "../CustomsHooks/FetchHook";
import { Row, Display4, Col, Figure, Card } from 'bootstrap-4-react';

const ItemDetails = () => {

    const params = useParams();
    const productId = params.id;

    const [url, setUrl] = useState(`https://fakestoreapi.com/products/${productId}`);
    const { data, isPending, error } = FetchHook(url);

    const colStyle = {
        justifyContent: 'center',
        marginTop: '15px',
        padding: '15px',
        alignItems: 'center'
    }

    const imgSize = {
        height: '250px',
        width: '250px'
    }

    return (
        <>
            {
                data && <Row>
                    <Col style={colStyle} col='col-3'>
                        <Figure>
                            <Figure.Image src={data.image} style={imgSize} />
                        </Figure>
                    </Col>

                    <Col style={colStyle} col='col-9'>
                        <Card>
                            <Card.Header>{data.category}</Card.Header>
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Subtitle mb="2" text="muted"></Card.Subtitle>
                                <Card.Text>{data.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col col="col-4">Stock: {data.rating.count}</Col>
                                    <Col col="col-4">Rate: {data.rating.rate}</Col>
                                    <Col col="col-4">Price: $ {data.price}</Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>

                </Row>
            }
        </>

    )
}

export default ItemDetails