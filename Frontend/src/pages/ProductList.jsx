import styled from "styled-components"
import Announcement from "../components/Announcement";
import CSKH from "../components/CSKH";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Navbar from './../components/Navbar';

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
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;  
  margin-right: 20px;
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option`

`;

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>AAAA</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Lọc sản phẩm:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Loại
                        </Option>
                        <Option>Iphone</Option>
                        <Option>SamSung</Option>
                        <Option>Oppo</Option>
                        <Option>Vivo</Option>
                        <Option>Huawei</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Phân loại sản phẩm:</FilterText>
                    <Select>
                        <Option selected>Mới nhất</Option>
                        <Option selected>Giá từ thấp đến cao</Option>
                        <Option selected>Giá từ cao đến thấp</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <CSKH />
            <Footer />
        </Container>
    )
}

export default ProductList