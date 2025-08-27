import styled from 'styled-components';

const StatsSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 2rem 1.5rem;
  /* background: #333; */
  /* background: blue; */
  background-image: linear-gradient(to right bottom, rgba(48, 38, 141, 0.9), 
  rgba(48, 38, 141, 0.9),rgba(48, 38, 141, 0.9),rgba(48, 38, 141, 0.9),rgba(48, 38, 141, 0.9));
  color: white;
`;

const Stat = styled.div`
  text-align: center;
`;

const Number = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

export function Stats() {
  return (
    <StatsSection>
      <Stat><Number>4+</Number><div>Years of Experience</div></Stat>
      <Stat><Number>100+</Number><div>Clients Served</div></Stat>
      <Stat><Number>Millions</Number><div>Saved for Clients</div></Stat>
    </StatsSection>
  );
}
