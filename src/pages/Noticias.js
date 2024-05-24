import React, { useEffect, useState } from 'react'
import axios from  'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import NoticiasCard from '../components/NoticiaCard'
import styled from 'styled-components';

const HomeContainer = styled.div`
background: #136D58;
`;

function Persona(){
    const [characters, setcharacters] = useState([])

    useEffect(() =>{
        const fetchcharacters = async () =>{
            try{
                const response = await axios.get('http://localhost:5000/api/noticias')
                setcharacters(response.data)
            } catch (error){
                console.error('Erro ao buscar o noticia', error)
            }
        }

        fetchcharacters()
    }, [])
    return(
        <HomeContainer>
            <Header/>
            <Main />
            <NoticiasCard characters={characters}/>
            <Footer/>
        </HomeContainer>
    );
}
export default Persona
