import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Product from './Product';


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchList() {
            const requesUrl = 'https://635a2361ff3d7bddb9aff1b9.mockapi.io/products';
            const response = await fetch(requesUrl);
            const responseJSON = await response.json();
            //console.log({responseJSON});
            // setSlideIndex(responseJSON);
            setData(responseJSON);

        }
        fetchList();
    }, []);
  return (
    <Container>
        {data.map((item) =>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products