import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function MovieCard(props) {
    const navigate = useNavigate()
    return (
        <Card className='grid-movie-card' onClick={() => { navigate('/movie-details/' + props.id) }}>
            <Card.Img className='grid-movie-img' variant="top" src={props.image} />
            <Card.Body className='bg-light'>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default MovieCard;