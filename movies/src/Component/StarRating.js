import React from 'react';
import PropTypes from 'prop-types';

const width = 110;

const styles = {
    starsInner: {
        width: `${width}px`
    },
    starsEmptyInner: {
        position: 'absolute',
        width: `${width}px`
    },
    starsOuter: {
        overflow: 'hidden'
    },
    star: {
        padding: '1px'
    }
};

const cropWidth = (rating) => {
    return Math.floor(rating * width / 5);
};

const StarRating = (props) => {

    const containerStyle = { width: `${cropWidth(props.rating)}px` };

    return (
        <div>
            <div style={styles.starsOuter}>
                <div style={containerStyle}>
                    <div className="nejma" style={styles.starsEmptyInner}>
                        <i className="fa fa-star-o fa-lg nejma1" style={styles.star}></i>
                        <i className="fa fa-star-o fa-lg nejma2" style={styles.star}></i>
                        <i className="fa fa-star-o fa-lg nejma3" style={styles.star}></i>
                        <i className="fa fa-star-o fa-lg nejma4" style={styles.star}></i>
                        <i className="fa fa-star-o fa-lg nejma5" style={styles.star}></i>
                    </div>
                    <div className="nejma" style={styles.starsInner}>
                        <i className="fa fa-star fa-lg nejma1" style={styles.star}></i>
                        <i className="fa fa-star fa-lg nejma2" style={styles.star}></i>
                        <i className="fa fa-star fa-lg nejma3" style={styles.star}></i>
                        <i className="fa fa-star fa-lg nejma4" style={styles.star}></i>
                        <i className="fa fa-star fa-lg nejma5" style={styles.star}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

StarRating.defaultProps = {
    rating: 0
};

StarRating.propTypes = {
    rating: PropTypes.number
};

export default StarRating;