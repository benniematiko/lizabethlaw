import styled from 'styled-components';

const Section = styled.section`
  background-color: #f4f6f8;
  padding: 80px 20px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 50px;
  line-height: 1.6;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const AttorneyCard = styled.div`
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Avatar = styled.div`
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  background-color: #d1d9e6;
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const Name = styled.h3`
  font-size: 1.3rem;
  color: #1a1a1a;
  margin-bottom: 5px;
`;

const TitleText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
`;

const Bio = styled.p`
  font-size: 0.95rem;
  color: #444;
  line-height: 1.5;
`;

const attorneys = [
  {
    name: 'Elizabeth Karuiru',
    title: 'Managing Associate',
    image: 'images/elizakaruiru.png', // Replace with actual image URL if available
    bio: 'Elizabeth brings over 20 years of litigation experience, focusing on family and estate law with a passion for protecting what matters most.',
  },
  {
    name: 'Maureen Wechuli',
    title: 'Advocate Asssociate',
    image: 'images/maureenwechuli.png',
    bio: 'Maureen specializes in business and contract law, offering strategic counsel to both startups and established enterprises.',
  },
  {
    name: 'Gaudencia Kedogo',
    title: 'Criminal Defense Attorney',
    image: 'images/gaudenciakedogo.png',
    bio: 'With a strong courtroom presence, Gaudencia defends clients in state and federal criminal cases with precision and care.',
  },
  {
    name: 'Roy Omondi',
    title: 'Real Estate Counsel',
    image: 'images/royomondi.jpg',
    bio: 'Roy navigates complex property transactions, landlord-tenant disputes, and zoning matters with a practical legal approach.',
  },
];

const AttorneysSection = () => {
  return (
    <Section>
      <Container>
        <Title>Expertise In Action</Title>
        <Subtitle>Meet Karuiru Associates & Advocates Attorneys</Subtitle>
        <TeamGrid>
          {attorneys.map((attorney, index) => (
            <AttorneyCard key={index}>
              <Avatar style={{ backgroundImage: `url(${attorney.image || '/placeholder-avatar.png'})` }} />
              <Name>{attorney.name}</Name>
              <TitleText>{attorney.title}</TitleText>
              <Bio>{attorney.bio}</Bio>
            </AttorneyCard>
          ))}
        </TeamGrid>
      </Container>
    </Section>
  );
};

export default AttorneysSection;
