import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 20px;
  max-width: 100%;
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const FormContainer = styled.div`
  text-align: center;
  flex: 3;
  margin: 0 auto;
`;

const Form = styled.form`
  width: 1000px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchInput = styled(Input)`
  width: 50%;
  margin: 0 auto 20px auto;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #394c73;
  }
`;

const JobsContainer = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const JobCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-bottom: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const JobTitle = styled.h3`
  margin-top: 0;
`;

const JobDescription = styled.p`
  margin-bottom: 20px;
`;

const JobApplyButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #394c73;
  }
`;

function ContactPage() {
  return (
    <ContactContainer>
      <FormContainer>
        <Form>
          <SearchInput type="text" placeholder="Nome" />
          <SearchInput type="email" placeholder="E-mail" />
          <SearchInput type="text" placeholder="Assunto" />
          <SearchInput type="text" placeholder="Celular" />
          <SearchInput
            component="textarea"
            placeholder="Mensagem"
            style={{ height: '150px' }}
          />
          <Button type="submit">Enviar</Button>
        </Form>
      </FormContainer>
      <JobsContainer>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
          <JobCard>
            <JobTitle>Software Engineer</JobTitle>
            <JobDescription>
              We are looking for an experienced software engineer to join our
              team.
            </JobDescription>
            <JobApplyButton>Apply Now</JobApplyButton>
          </JobCard>
          <JobCard>
            <JobTitle>Product Manager</JobTitle>
            <JobDescription>
              We are looking for a product manager to lead our product
              development efforts.
            </JobDescription>
            <JobApplyButton>Apply Now</JobApplyButton>
          </JobCard>
        </div>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
          <JobCard>
            <JobTitle>UX Designer</JobTitle>
            <JobDescription>
              We are looking for a UX designer to help us create
              intuitive and user-friendly interfaces.
            </JobDescription>
            <JobApplyButton>Apply Now</JobApplyButton>
          </JobCard>
          <JobCard>
            <JobTitle>Data Scientist</JobTitle>
            <JobDescription>
              We are looking for a data scientist to help us analyze and
              interpret large datasets.
            </JobDescription>
            <JobApplyButton>Apply Now</JobApplyButton>
          </JobCard>
        </div>
      </JobsContainer>
    </ContactContainer>
  );
}

export default ContactPage;