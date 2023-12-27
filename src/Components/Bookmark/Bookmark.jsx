import PropTypes from 'prop-types';

const Bookmark = ({ card }) => {
    return (
        <div>
            <li className='text-gray-500'>{card}</li>
        </div>
    );
};

Bookmark.propTypes = {
    card: PropTypes.array
};

export default Bookmark;