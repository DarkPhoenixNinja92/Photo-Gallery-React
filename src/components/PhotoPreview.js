import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const PhotoPreview = ({bird}) => {
    const { name,image } = bird;

    return (
    <Card>
        <CardImg width='35%' src={image} alt={name}/>
        <CardImgOverlay>
            <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
    </Card>
    );
};

export default PhotoPreview;