import { Card, Figure, Button, Col, Row } from 'bootstrap-4-react';

const Item = ({ product }) => {
    const imgSize = {
        height: '150px',
        width: '150px'
    }
    return (
        <Card style={{margin: '10px'}}>
            <Card.Body>
                <Row >
                    <Col col='6'>
                        <Figure style={{textAlign: 'center'}}>
                            <Figure.Image src={product.image} style={imgSize} />
                            <Figure.Caption style={{fontSize: '2rem', color: '#ab2f21'}}>
                                $ {product.price}
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col col='6'>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Subtitle text="muted">{product.category}</Card.Subtitle>
                        <Button as="a" href={`/productos/${product.id}`}>Detalles</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Item