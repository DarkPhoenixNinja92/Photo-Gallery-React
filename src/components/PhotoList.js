import { Col, Row } from 'reactstrap';
import PhotoPreview from './PhotoPreview';
import { BIRDPHOTOS } from '../shared/BIRDPHOTOS';

const PhotoList = () => {
    return(
        <Row className='ms-auto'>
            {BIRDPHOTOS.map((bird) => {
                return(<Col md = '5' className = 'm-4' key ={bird.id}>
                    <PhotoPreview bird={bird}/>
                </Col>)
            })}
        </Row>
    )
}

export default PhotoList;