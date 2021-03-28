'use strict';


// function for getting 1 station with id

//function for getting all stations (limit results by default 10)

//function for getting stations defined with GEOlocation polygon

//adding a new station

//modifying a station

//function for deleting a station

const rectangleBounds = (topRight, bottomLeft) => (
    {
        type: 'Polygon',
        coordinates: [
            [
                [bottomLeft.lng, bottomLeft.lat],
                [bottomLeft.lng, topRight.lat],
                [topRight.lng, topRight.lat],
                [topRight.lng, bottomLeft.lat],
                [bottomLeft.lng, bottomLeft.lat],
            ],
        ],
    }
);

export {rectangleBounds};


