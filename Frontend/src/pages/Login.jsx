import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vw;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url("https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHgxNjExNzExLWltYWdlLWpvYjYyM18yLWwxcHFianlxLnBuZw.png") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`;

const Form = styled.form`
display: flex;
  flex-direction: column;
  `;

const Title = styled.h1`
font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
      <Container>
          <Wrapper>
              <Title>Đăng nhập</Title>
              <Form>
                  <Input placeholder="Tài khoản" />
                  <Input placeholder="Mật khẩu" />
                  <Button>Đăng nhập</Button>
                  <Link >Nhớ mật khẩu?</Link>
                  <Link >Đăng ký tài khoản mới?</Link>
              </Form>
          </Wrapper>
      </Container>
  )
}

export default Login