import PropTypes from 'prop-types';

const Bookmark = ({ card }) => {
    return (
        <div>
            <li>{card}</li>
        </div>
    );
};

Bookmark.propTypes = {
    card: PropTypes.array
};

export default Bookmark;