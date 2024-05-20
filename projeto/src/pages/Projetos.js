import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import ProjetoPage from '../components/ProjetoPage';
import Background from "../assetsFinal/tropical-leaves.jpg";
import styled from 'styled-components';

const HomeContainer = styled.div`
	background-image: url(${Background});
`;

function Contato(){
    return(
        <HomeContainer>
            <Header/>
            <Main />
            <ProjetoPage/>
            <Footer/>
        </HomeContainer>
    );
}
export default Contato