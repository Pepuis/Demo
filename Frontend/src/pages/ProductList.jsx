import { useLocation } from "react-router-dom";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import CSKH from "../components/CSKH";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { mobile } from "../Responsive";
import Navbar from './../components/Navbar';
import { useState } from 'react';

const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;  
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option`

`;

const ProductList = () => {
    const location = useLocation();

    const cat = location.pathname.split("/")[2];

    const [filters, setFilters] = useState({});

    const [sort, setSort] = useState("Mới nhất");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Lọc sản phẩm:</FilterText>
                    <Select name="loai" onChange={handleFilters}>
                        <Option disabled>Loại</Option>
                        <Option>Sinh nhat</Option>
                        <Option>20/10</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sắp xếp:</FilterText>
                    <Select onChange={e => setSort(e.target.value)}>
                        <Option value={"newest"}>Mới nhất</Option>
                        <Option value={"asc"}>Giá từ thấp đến cao</Option>
                        <Option value={"desc"}>Giá từ cao đến thấp</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <CSKH />
            <Footer />
        </Container>
    )
}

export default ProductList