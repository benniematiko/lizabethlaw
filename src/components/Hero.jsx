import { Link } from "react-router-dom";
import styled from "styled-components";

const HeroContainer = styled.section`
  width: 100%;
  background: linear-gradient(
      135deg,
      rgba(0, 64, 77, 0.9) 0%,
      rgba(2, 12, 27, 0.6) 100%
    ),
    url("./images/naiday.jpg") center/cover no-repeat;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;

  /* @media (max-width: 768px) {
    height: 82vh;
  } */
`;

const Title = styled.h1`
  font-size: 3rem;
  /* margin-bottom: 0.1rem; */
  color: gold;
  width: 50%;
  line-height: 3rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.6rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  background: #fff;
  color: #150958;
  padding: 14px 25px;
  cursor: pointer;
  border: none;
  outline: none;
  /* font-size: 16px; */
  font-size: 1rem;
  border-radius: 30px;
  margin-top: 20px;
`;


const StatsSection = styled.section`
 
  display: flex;
  justify-content: space-around;
  padding: 2rem 1.5rem;
  /* background: #333; */
  /* background: blue; */
  background-image: linear-gradient(to right bottom, rgba(48, 38, 141, 0.9), 
  rgba(48, 38, 141, 0.9),rgba(48, 38, 141, 0.9),rgba(48, 38, 141, 0.9),rgba(48, 38, 141, 0.9));
  color: white;
  position:absolute;
  right: 0;
  bottom: 30px;
`;



const Stat = styled.div`
  text-align: center;
  margin: 0 18px;
  border-radius: 4px 0 0 4px;
`;


const Number = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

// const CallButton = styled.button`
//   background-color: #fff;
//   color: #333;
//   border: none;
//   padding: 0.75rem 1.5rem;
//   cursor: pointer;
//   font-size: 1rem;
//   margin-top: 1.2rem;
// `;

export function Hero() {
  return (
    <HeroContainer>
      <Subtitle>
        Protecting Your Legal Interests in all counties of Kenya.
      </Subtitle>

      <Title>Commissioner for oaths & Notary Public</Title>
      <Subtitle>
        Experienced attorneys dedicated to your peace of mind.
      </Subtitle>
      <Link to="/contact">
        <Button>Free Consultation</Button>
      </Link>

      <StatsSection>
        <Stat>
          <Number>4+</Number>
          <div>Years of Experience</div>
        </Stat>
        <Stat>
          <Number>100+</Number>
          <div>Clients Served</div>
        </Stat>
        <Stat>
          <Number>Millions</Number>
          <div>Saved for Clients</div>
        </Stat>
      </StatsSection>
    </HeroContainer>
  );
}
