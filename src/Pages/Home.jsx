import { Container } from 'react-bootstrap';
import Carousel from '../Components/Carousel';
import ProductsGrid from '../Components/ProductsGrid';

function Home() {
    return (
        <div className="Home">
            <Carousel />
            <Container fluid='md' className='mt-5'>
                <h4 className='text-left'>Featured Movies</h4>
                <ProductsGrid />
            </Container>
            <Container fluid='md' className='mt-5'>
                <h4 className='text-left'>Featured Shows</h4>
                <ProductsGrid />
            </Container>
            <Container fluid='md' className='my-5'>
                <div className='homepage-banner-container'>
                    <img src="https://cdn.europosters.eu/image/hp/53271.jpg" alt="" />
                </div>
            </Container>
        </div>
    );
}

export default Home;
