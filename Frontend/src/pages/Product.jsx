import { Add } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from './../components/Announcement';
import CSKH from './../components/CSKH';
import Footer from './../components/Footer';
import Navbar from './../components/Navbar';
import { Remove } from '@material-ui/icons';
import { mobile } from '../Responsive';

const Container = styled.div`
    
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%; 
    height: 90vh;
    object-fit: cover;
    ${mobile({ height:"40vh" })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px; 
`;

const FilerContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`
   
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span` 
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;


const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2019/9/11/637037652463173144_11-xanh.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>IPHONE 13 PROMAX</Title>
                    <Desc>Giảm 20%</Desc>
                    <Price>$1120</Price>
                    <FilerContainer>
                        <Filter>
                            <FilterTitle>Màu</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>64GB</FilterSizeOption>
                                <FilterSizeOption>128GB</FilterSizeOption>
                                <FilterSizeOption>256GB</FilterSizeOption>
                                <FilterSizeOption>512GB</FilterSizeOption>
                                <FilterSizeOption>1T</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilerContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>Thêm vô giỏ hàng</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <CSKH />
            <Footer />
        </Container>
    )
}

export default Product