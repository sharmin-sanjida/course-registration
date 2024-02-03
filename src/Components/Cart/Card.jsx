
import PropTypes from 'prop-types' ;

const Card = ({card}) => {
    const {title} = card;
    return (
        <div className=''>
            <h3 className='text-xl text-center bg-slate-300 mt-2 ml-12 mr-12'>{title}</h3>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object
}

export default Card;