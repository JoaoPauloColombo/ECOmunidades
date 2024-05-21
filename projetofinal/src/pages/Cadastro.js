import React, { useState } from 'react';
import NoticiaForm from '../components/NoticiaForm';
import NoticiaList from '../components/NoticiaList';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Background from "../assetsFinal/tropical-leaves.jpg";

const ShadowBox = styled.hr`
-webkit-box-shadow: 11px 44px 46px 10px rgba(0,0,0,0.75);
-moz-box-shadow: 11px 44px 46px 10px rgba(0,0,0,0.75);
box-shadow: 11px 44px 46px 10px rgba(0,0,0,0.75);
`;

const HomeContainer = styled.div`
  background-image: url(${Background});
`;

const TitleProjetos = styled.h1`
  color: white;
  text-align:center;
  align-items: center;
  justify-content: center;
  animation-delay: 0.5s;
`;

const ListProjetos = styled.h1`
  color: white;
  position: relative;
  text-align:center;
  align-items: center;
  justify-content: center;
`;

function CadastroPage() {
  const [refresh, setRefresh] = useState(false);
  return (
    <div>
      <HomeContainer>
        <Header />
          <Main />
        <ShadowBox/>
        <TitleProjetos>Cadastro Projetos</TitleProjetos>
        <NoticiaForm setRefresh={setRefresh} />
        <ListProjetos>Projetos Cadastrados</ListProjetos>
        <NoticiaList refresh={refresh} setRefresh={setRefresh}/>
        <Footer />
      </HomeContainer>
    </div>
  );
}

export default CadastroPage;