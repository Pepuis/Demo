import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Product from './Product';
import { axios } from 'axios';


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
    
    //console.log(cat,filters,sort);

    const[products,setProducts]=useState([]);
    const[filteredProducts,setFilteredProducts]=useState([]);
    
    const [data, setData] = useState([]);

    useEffect(()=>{
        const getProducts = async()=>{
            try {
                const res = await axios.get("http://localhost:8000/Backend/products")
            } catch (err) {
                
            }
        }
    })

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