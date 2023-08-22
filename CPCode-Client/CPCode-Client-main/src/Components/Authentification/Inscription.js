// CSS
import styled from "styled-components";

// Components
import Introduction from "./Introduction";

// React-Router
import { useNavigate, Link } from "react-router-dom";

// States
import { useState } from "react";

// Redux
import { useDispatch , useSelector} from "react-redux";

// Axios
import axios from "axios";

// Assets
import Mail from "./assets/Gray Mail.svg";
import Lock from "./assets/Gray Lock.svg";
import Google from "./assets/Google.svg";
import User from "./assets/User.svg";

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
  padding-top: 2%;
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

const LinkField = styled.p`
    font-size: 1.5rem;
    margin-top: 3%;
`;

const Inscription = () => {

  // Redux
  const dispatch = useDispatch();

  //---------------------------------------
  
  const Navigate = useNavigate() ;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if email is unique
      const emailCheck = await axios.post('http://127.0.0.1:8000/api/email-check', { email });
      if (emailCheck.data.exists) {
        alert('Email already exists');
        return;
      }

      // Check if password is strong
      const strongPasswordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/);
      if (!strongPasswordRegex.test(password)) {
        alert('Password must contain at least 8 characters including at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character');
        return;
      }

      // Check if password and confirm password match
      if (password !== password_confirmation) {
        alert('Passwords do not match');
        return;
      }

      // If all checks pass, submit the form
      const data = {
        full_name: fullName,
        email,
        password,
      };
      await axios.post('http://127.0.0.1:8000/api/signup', data)
      .then((res)=>{
        const user = res.data.user ;
        dispatch({type : 'login' , payload : user})
      });

      Navigate("/home");

      

    } catch (error) {
      alert("The Error :"+error.response.data.message);
    }

  };
 
  return (
    <Container>
      <Introduction />
      <FormContainer>
        <Form onSubmit={handleSubmit} >
          <Title>Sign Up to CPCode</Title>
          <Label>Name</Label>
          <FieldContainer>
            <IconContainer>
              <Icon src={User} alt="User icon" />
            </IconContainer>
            <Field type="text" name="full_name" value={fullName} onChange={(e) => { setFullName(e.target.value) }} placeholder="Enter your name" />
          </FieldContainer>
          <Label>Email</Label>
          <FieldContainer>
            <IconContainer>
              <Icon src={Mail} alt="Email icon" />
            </IconContainer>
            <Field type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email" />
          </FieldContainer>
          <Label>Password</Label>
          <FieldContainer>
            <IconContainer>
              <Icon src={Lock} alt="Password icon" />
            </IconContainer>
            <Field type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password" />
          </FieldContainer>
          <Label>Re-Type Password</Label>
          <FieldContainer>
            <IconContainer>
              <Icon src={Lock} alt="Password icon" />
            </IconContainer>
            <Field type="password" name="password_confirmation" value={password_confirmation} onChange={(e) => { setPasswordConfirmation(e.target.value) }} placeholder="Confirm your password" />
          </FieldContainer>
          <SubmitButton type="submit" value="Sign Up" />
          <GoogleButton>
            <GoogleIcon src={Google} alt="Google icon" />
            Sign up with Google
          </GoogleButton>
        </Form>
        <LinkField className="text-center">Already have an account ? <Link to="/login">Log In</Link></LinkField>
      </FormContainer>
    </Container>
  );
};

export default Inscription;




