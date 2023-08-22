// CSS
import styled from "styled-components";

// Components
import Introduction from "./Introduction";

// React-Router
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

// Assets
import Mail from "./assets/Gray Mail.svg";
import Lock from "./assets/Gray Lock.svg";
import Google from "./assets/Google.svg";

// States
import { useState } from "react";
import { useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0;
  padding-top: 7%;
  margin-right: 0;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-top: 10%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-right: 5%;
  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  height: 7vh;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const Field = styled.input`
  background-color: transparent;
  border: none;
  height: 100%;
  width: 100%;
  margin-left: 1%;
  margin-right: 1%;
  font-size: 1.5rem;
  &:focus {
    outline: none;
    color: #000000;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-left: 1%;
  padding-right: 1%;
`;

const Icon = styled.img`
  height: 3vh;
`;

const SubmitButton = styled.input`
  font-size: 1.5rem;
  color: white;
  background-color: #022b3a;
  border: none;
  border-radius: 0.5rem;
  height: 8vh;
  margin-top: 1rem;
  cursor: pointer;
`;

const GoogleButton = styled.button`
  font-size: 1.5rem;
  color: #5f6368;
  background-color: #e1e5f2;
  border: none;
  border-radius: 0.5rem;
  height: 8vh;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const GoogleIcon = styled.img`
  height: 3vh;
`;

const Title = styled.h1`
    margin-bottom: 3%;
`;

const LinkField = styled.div`
    margin-top: 3%;
    font-size: 1.5rem;
`;


const Connexion = () => {

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {

      const emailCheck = await axios.post('http://127.0.0.1:8000/api/email-check', { email });
      if (!emailCheck.data.exists) {
        alert('No account with that email');
        return;
      }

      await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      }).then((res)=>{
        const user = res.data.user ;
        dispatch({type : 'login' , payload : user})
        Navigate("/home");

      }).catch((err)=>{console.log(err.response.data.message)})



    } catch (err) {
      console.log(err)
    }
  };
  return (
    <Container>
      <Introduction />
      <FormContainer>
        <Form onSubmit={handleLogin}>
          <Title>Sign In to CPCode</Title>

          <Label>Email</Label>
          <FieldContainer>
            <IconContainer>
              <Icon src={Mail} alt="Email icon" />
            </IconContainer>
            <Field type="email" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </FieldContainer>

          <Label>Password</Label>
          <FieldContainer>
            <IconContainer>
              <Icon src={Lock} alt="Password icon" />
            </IconContainer>
            <Field type="password" placeholder="Enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </FieldContainer>

          <SubmitButton type="submit" value="Sign In" />
          <GoogleButton>
            <GoogleIcon src={Google} alt="Google icon" />
            Sign in with Google
          </GoogleButton>
        </Form>
        <LinkField>
          <p className="text-center">Don't have an account ? <Link to="/signup">Sign Up</Link></p>
          <p className="text-center">Forgot Password ? <Link to="/reset-password">Reset</Link></p>
        </LinkField>
      </FormContainer>
    </Container>
  );
};

export default Connexion;




