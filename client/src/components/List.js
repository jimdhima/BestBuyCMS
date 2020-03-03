import React, {useState, useEffect} from 'react';
import { Col, Row } from './Grid';
import useDebounce from '../util/useDebouce';
import API from '../util/API';

function List() {
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);
    const debouncedSearchTerm = useDebounce(search, 500);
    const handleInputChange = (e) => {
        const value = e.target.value;

        setSearch(value);
    };

    const handleAddToCart = (id) => {
        const item = products.find((i) => i.sku === id);

        API.addToCart(item).then(console.log);
    }

    useEffect(() => {
        if (!search) {
            return;
        }
        if (debouncedSearchTerm) {
            API.search(search).then(({data}) => setProducts(data)).catch(console.log)
        }
    }, [debouncedSearchTerm]);

    

    return (
        <div className="container">
            <Col size="12">
                <input type="text" onChange={(e) => handleInputChange(e)} />
            </Col>

            <Col size="12">
                {products.map((p) => (
                    <Row key={p.sku}>
                        <p>
                            Name: {p.name}
                        </p>

                        <p>
                            Price: {p.regularPrice}
                        </p>

                        <p>
                            <button type="button" onClick={() => handleAddToCart(p.sku)}>Add to Cart</button>
                        </p>
                    </Row>
                ))}
            </Col>
        </div>
    )
}

export default List;