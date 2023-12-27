import PropTypes from 'prop-types';

const Bookmark = ({ card }) => {
    return (
        <div>
            <ol>
                <li>
                    {card}
                </li>
            </ol>
        </div>
    );
};

Bookmark.propTypes = {
    card: PropTypes.array
};

export default Bookmark;