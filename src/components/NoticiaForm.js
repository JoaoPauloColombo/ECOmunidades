import React, { useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: linear-gradient(to bottom, #136D58, #22c9a2);
  border-radius: 10px;
  overflow: hidden;
  perspective: 1000px;
  transform-style: preserve-3d;
  transform: rotateX(-10deg);
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  animation: form-animation 0.5s ease-in-out;
  width: 30%;
  font-weight: 800;
  @media (max-width: 768px) {
    width: 80%;
    left: 6%;
  }
  position: relative;
  left: 34%;
  top:20%
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
  border: 2px solid #256e5d;
  transition: border-color 0.3s ease-in-out;
`;

const InputFocus = styled(Input)`
  border-color: #256e5d;
  background-color: rgba(255, 255, 255, 0.2);
  outline: none;
`;

const InputPlaceholder = styled.span`
  display: block;
  margin: 0 auto;
  padding: 10px;
  color: #fff;
  padding-bottom: 30px;
`;

const InputPlaceholderDesc = styled.span`
  padding: 10px;
  color: #fff;
  padding-bottom: 30px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #256e5d;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  &:hover {
    background-color: #19b543;
    font-size: 17px;
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;

const CharCounter = styled.div`
  color: white;
`;

function NoticiaForm({ fetchNoticias }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const MAX_DESC_LENGTH = 500;
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('texto', descricao);
    formData.append('foto', imagem);
  
    try {
      await axios.post(
        //'http://localhost:5000/api/noticias'
        'projetos.mysql.database.azure.com/api/noticias'
        ,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setNome('');
      setDescricao('');
      setImagem(null);
      setFileInputKey(Date.now());
    } catch (error) {
      console.error('Erro ao enviar a noticia', error);
    }
  };

  const handleImageChange = (event) => {
    setImagem(event.target.files[0]);
  };

  const handleDescricaoChange = (e) => {
    const texto = e.target.value;
    if (texto.length <= MAX_DESC_LENGTH) {
      setDescricao(texto);
    }
  };

  return (
    <FormContainer>
      <InputPlaceholder>Nome da Noticia</InputPlaceholder>
      <form onSubmit={handleSubmit} ref={formRef}>
        <InputContainer>
          <InputFocus
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            autoFocus
          />
        </InputContainer>
        <InputContainer>
        <InputPlaceholderDesc>Descrição da Noticia</InputPlaceholderDesc>
          <Input
            as="textarea"
            value={descricao}
            onChange={handleDescricaoChange}
            required
          />
          <CharCounter>{MAX_DESC_LENGTH - descricao.length} caractere(s) restante(s)</CharCounter>
        </InputContainer>
        <InputContainer>
          <InputFocus type="file" key={fileInputKey} onChange={handleImageChange} required />
        </InputContainer>
        <ButtonContainer>
          <Button type="submit">Cadastrar</Button>
        </ButtonContainer>
        <hr />
      </form>
    </FormContainer>
  );
}

export default NoticiaForm;