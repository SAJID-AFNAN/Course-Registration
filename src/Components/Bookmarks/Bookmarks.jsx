import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ cards }) => {
    return (
        <div className="w-1/4 mx-4 bg-white rounded-xl p-6 ">
            <h2 className="text-lg text-[#2F80ED] border-b-2 font-bold pb-4">Credit Hour Remaining { } hr</h2>
            <h1 className="text-xl font-bold pt-4">Course Name</h1>
            <p className="border-b-2 py-4">
                {
                    cards.map((card, idx) => <Bookmark key={idx} card={card}></Bookmark>)
                }
            </p>
            <p className="border-b-2 py-4">Total Credit Hour : { }</p>
            <p className="pt-4">Total Price : </p>

        </div>
    );
};

Bookmarks.propTypes = {
    cards: PropTypes.array
};

export default Bookmarks;