
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import { mobile } from "../Responsive";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;  
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "black" : "transparent"};
  color: ${props => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-around;
    ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;

`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;    
    background-color: ${props=>props.color};
    
`;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;  
  margin-top: 10px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600; 
`;


const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>Giỏ hàng của bạn</Title>
                <Top>
                    <TopButton>Tiếp tục mua sắm</TopButton>

                    <TopButton type="filled">Thanh toán ngay</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2019/9/11/637037652463173144_11-xanh.png" />
                                <Details>
                                    <ProductName><b>Tên sản phẩm:</b> AAA</ProductName>
                                    {/* <ProductID><b>Mã:</b>123</ProductID> */}
                                    <ProductColor color="black"/>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2019/9/11/637037652463173144_11-xanh.png" />
                                <Details>
                                    <ProductName><b>Tên sản phẩm:</b> AAA</ProductName>
                                    {/* <ProductID><b>Mã:</b>123</ProductID> */}
                                    <ProductColor color="black" />
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Chi tiết hoá đơn</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Tổng tiền: </SummaryItemText>
                            <SummaryItemPrice>$60</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Giảm: </SummaryItemText>
                            <SummaryItemPrice>$30</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Cần thanh toán: </SummaryItemText>
                            <SummaryItemPrice>$30</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Thanh toán ngay</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart