import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EditNoticiaModal from './EditNoticiaModal'
import {
    ListContainer,
    NoticiaCard,
    NoticiaImage,
    NoticiaInfo,
    NoticiaNome,
    NoticiaDescricao,
    Actions,
    ActionButton
} from '../styles/NoticiaListStyle'

function NoticiaList({refresh, setRefresh}) {
    const [noticias, setNoticias] = useState([])
    const [editNoticia, setEditNoticia] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        fetchNoticias()
    }, [refresh])

    const fetchNoticias = async () => {
        try {
            const response = await axios.get(
                'http://localhost:5000/api/noticias'
                
                )
            setNoticias(response.data)
        } catch (error) {
            console.error('erro ao buscar noticias', error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(
                `http://localhost:5000/api/noticias/${id}`
                
                )
            fetchNoticias()
        } catch (error) {
            console.error('Erro ao deletar a noticia', error)
        }
    }

    const handleEdit = async (id) => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/noticias/${id}`
                
                )
            setEditNoticia(response.data)
            setIsModalOpen(true)
        } catch (error) {
            console.error('Erro ao buscar a noticia para edição', error)
        }
    }

    return (
        <ListContainer>
            {noticias.map((noticias) => (
                <NoticiaCard key={noticias.id}>
                    <NoticiaImage src={
                        `http://localhost:5000/uploads/${noticias.foto}`
                        
                        } alt={noticias.nome} style={{ width: '100px' }} />
                    <NoticiaInfo>
                        <NoticiaNome>{noticias.nome}</NoticiaNome>
                        <NoticiaDescricao>{noticias.texto}</NoticiaDescricao>
                        <Actions>
                            <ActionButton onClick={() => handleDelete(noticias.id)}>Deletar</ActionButton>
                            <ActionButton onClick={() => handleEdit(noticias.id)}>Editar</ActionButton>
                        </Actions>
                    </NoticiaInfo>
                </NoticiaCard>
            ))}
            {editNoticia && (
                <EditNoticiaModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    noticia={editNoticia}
                    setRefresh={setRefresh}
                    setEditNoticia={setEditNoticia}
                />
            )}
        </ListContainer>
    )
}
export default NoticiaList