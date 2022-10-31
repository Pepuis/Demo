import styled from "styled-components"
import { useState, useEffect } from 'react';
import CategoryItem from "./CategoryItem";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between; 
`;

const Categories = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchList() {
            const requesUrl = 'https://635a2361ff3d7bddb9aff1b9.mockapi.io/categories';
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
        {
            data.map((item)=>{
                return(
                    <CategoryItem item={item} key={item.id}/>
                )
            })
        }
        
    </Container>
  )
}

export default Categories