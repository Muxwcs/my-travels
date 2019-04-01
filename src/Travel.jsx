import React from 'react';

const Travel = ({ destination, country, photo, distance }) => {
    return (
        <div>
            <h1>
                Welcome to {destination}, {country}
            </h1>
            <img src={photo} class="img" alt="festival" />
            <h3>
                {distance} from Biarritz
            </h3>
        </div>
    );
};
export default Travel;