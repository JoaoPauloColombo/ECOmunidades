import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const MainTitle = styled.h1`
    text-align: center;
    margin: 40px 0;
`
const Container = styled.div`
    max-width: 1000px;
    margin: auto;
    padding: 10px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
`
const ImageCard = styled.div`
    width: calc(33.333% - 20px);
    display: flex;
    flex-direction: column;
    align-items:center;
`
const StyledImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid #007BFF;
    object-fit: cover;
    margin-bottom: 10px;
`
const SubTitle = styled.h2`
    color: #007BFF;
    text-align: center;
    margin: 0 0 5px 0;
`
const Button = styled.button`
    width: 50%;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #394c73;
    }
`

function NoticiasCard({characters}){
    const navigate = useNavigate()

    const handleLearnMore = (id) =>{
        navigate(`/bio/${id}`)
    }
    return(
        <div>
            <MainTitle>Noticias</MainTitle>
            <Container>
                {characters.map((character)=>(
                    <ImageCard key={character.id}>
                        <StyledImage src={`http://localhost:5000/uploads/${character.foto}`} alt={character.nome} />
                        <SubTitle>{character.nome}</SubTitle>
                        <Button onClick={() => handleLearnMore(character.id)}>Saiba Mais</Button>
                    </ImageCard>
                ))}
            </Container>
        </div>
    )
}

export default NoticiasCard