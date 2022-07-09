import Bird1 from '../assets/1.JPG';
import Bird2 from '../assets/2.jpg';
import Bird3 from '../assets/3.jpg';
import Bird4 from '../assets/4.jpg';
import Bird5 from '../assets/5.jpeg';
import Bird6 from '../assets/6.jpg';
import Bird7 from '../assets/7.jpg';
import Bird8 from '../assets/8.jpg';
import Bird9 from '../assets/9.jpg';
import Bird10 from '../assets/10.jpg';
import Bird11 from '../assets/11.JPG';
import Bird12 from '../assets/12.jpg';



const ImageGrid = () => {
    return (
        <div className="grid">
            <img src={Bird1} alt="first" />
            <img src={Bird2} alt="second" />
            <img src={Bird3} alt="third" />
            <img src={Bird4} alt="fourth" />
            <img src={Bird5} alt="fifth" />
            <img src={Bird6} alt="sixth" />
            <img src={Bird7} alt="seventh" />
            <img src={Bird8} alt="eighth" />
            <img src={Bird9} alt="nineth" />
            <img src={Bird10} alt="tenth" />
            <img src={Bird11} alt="eleventh" />
            <img src={Bird12} alt="twelfth" />
        </div>
    )
}

export default ImageGrid;