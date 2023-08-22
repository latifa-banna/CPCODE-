// CSS
import styled from "styled-components";

// Assets
import logo from "../Assets/logo.png"
import person from './assets/Person.svg'

const Container = styled.div`
  width: 50%;
  max-height: 100%;
  margin-left: 0;
  padding: 0;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 35%;
  margin-top: 5%;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  height: 100%;
  width: 25%;
`;

const TextContainer = styled.div`
  margin-top: 3%;
  text-align: center;
  width: 80%;
  font-size: 1.5rem;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const PersonImage = styled.img`
  height: 100%;
  width: 50%;
`;

export default function Introduction()
{
    return(
        <Container>
            <TopContainer>
                <LogoContainer>
                    <Logo src={logo} alt="Logo" />
                </LogoContainer>
                <TextContainer>
                    On offrent un ensemble de composants réutilisables et prêts à l'emploi pour la création de sites web.
                </TextContainer>
            </TopContainer>
            <BottomContainer>
                <PersonImage src={person} alt="Person" />
            </BottomContainer>
        </Container>
    )
}
