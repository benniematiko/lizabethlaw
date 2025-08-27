import styled from "styled-components";

const Section = styled.section`
  padding: 3rem 1.5rem;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.75rem;
  background: #0077cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export function Contact() {
  const handleSubmit = e => {
    e.preventDefault();
    // placeholder for validations or API call
    alert('Message sent!');
  };

  return (
    <Section>
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea placeholder="Your Message" rows="5" required />
        <Button type="submit">Send Message</Button>
      </Form>
    </Section>
  );
}
