import styled from 'styled-components';

const CasesSection = styled.section`
  max-width: 1100px;
  margin: 60px auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  margin-bottom: 50px;
`;

const CasesGrid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

const CaseCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(44, 62, 80, 0.1);
  padding: 25px 20px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 12px 30px rgba(44, 62, 80, 0.15);
  }
`;

const CaseTitle = styled.h3`
  color: #2c3e50;
  margin-bottom: 12px;
  font-size: 1.4rem;
`;

const CaseDescription = styled.p`
  color: #555;
  line-height: 1.5;
  margin-bottom: 18px;
  font-size: 1rem;
`;

const Outcome = styled.div`
  font-weight: 600;
  color: #f1c40f;
  font-size: 1rem;
`;

const casesData = [
  {
    title: 'Business Contract Dispute Resolution',
    description:
      'Represented a local business in resolving a complex contract dispute with a major supplier, achieving a favorable settlement that protected our client’s interests.',
    outcome: 'Successful settlement saving client $500K+',
  },
  {
    title: 'Estate Planning for High-Net-Worth Family',
    description:
      'Developed comprehensive estate plans and trusts ensuring tax efficiency and secure asset transfer for a prominent Montana family.',
    outcome: 'Preserved family wealth across generations',
  },
  {
    title: 'Real Estate Litigation Defense',
    description:
      'Defended a client against unjust claims in a commercial real estate dispute, resulting in dismissal of all charges.',
    outcome: 'Case dismissed in client’s favor',
  },
  // Add more cases as needed
];

const CasesPage = () => {
  return (
    <CasesSection>
      <Title>Our Case Highlights</Title>
      <Subtitle>
        Proven results for our clients across business, estate, real estate, and civil litigation.
      </Subtitle>

      <CasesGrid>
        {casesData.map((caseItem, idx) => (
          <CaseCard key={idx}>
            <CaseTitle>{caseItem.title}</CaseTitle>
            <CaseDescription>{caseItem.description}</CaseDescription>
            <Outcome>{caseItem.outcome}</Outcome>
          </CaseCard>
        ))}
      </CasesGrid>
    </CasesSection>
  );
};

export default CasesPage;
