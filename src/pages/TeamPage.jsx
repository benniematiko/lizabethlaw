import styled from 'styled-components';

const TeamSection = styled.section`
  max-width: 1100px;
  margin: 60px auto;
  padding: 0 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 50px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 40px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(44, 62, 80, 0.1);
  padding: 30px 20px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const Photo = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 3px solid #f1c40f;
`;

const Name = styled.h3`
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 6px;
`;

const TitleText = styled.p`
  font-weight: 600;
  color: #f1c40f;
  margin-bottom: 15px;
  font-size: 1rem;
`;

const Bio = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
`;

const teamMembers = [
  {
    name: 'Maureen Wechuli',
    title: 'Advocate Associate',
    photo: '/images/maureenwechuli.png',
    bio: 'Maureen has over 20 years of experience specializing in business law, estate planning, and civil litigation. He is dedicated to protecting his clients’ interests with integrity and tenacity.',
  },
  {
    name: 'Gaudencia Kedogo',
    title: 'Advocate Associate',
    photo: '/images/gaudenciakedogo.png',
    bio: 'Gaudencia brings a wealth of knowledge in family law and real estate litigation. Her empathetic approach helps clients navigate complex legal challenges.',
  },
  {
    name: 'Elizabeth Karuiru',
    title: 'Managing Associate',
    photo: '/images/elizakaruiru.png',
    bio: 'Elizabeth focuses on business disputes and contract law, delivering pragmatic solutions tailored to each client’s unique needs.',
  },
  // Add more members as needed
];

const TeamPage = () => {
  return (
    <TeamSection>
      <Title>Meet Our Attorneys</Title>
      <Subtitle>
        Our experienced legal team is here to guide you through every step.
      </Subtitle>

      <TeamGrid>
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <Photo src={member.photo} alt={`${member.name} photo`} />
            <Name>{member.name}</Name>
            <TitleText>{member.title}</TitleText>
            <Bio>{member.bio}</Bio>
          </Card>
        ))}
      </TeamGrid>
    </TeamSection>
  );
};

export default TeamPage;
