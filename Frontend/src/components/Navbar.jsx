import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex:1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input>

                        </Input>
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to={"/home"} style={{ textDecorationLine: "none" }}>
                        <Logo>Flower Garden</Logo>
                    </Link>
                </Center>
                <Right>

                    <MenuItem>
                        <Link to={"/register"} style={{ textDecorationLine: "none" }}>
                            Đăng ký
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={"/login"} style={{ textDecorationLine: "none" }} >
                            Đăng nhập
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={"/cart"} style={{ textDecorationLine: "none" }} >
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </Link>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar