import React from 'react';

import cottage from '../assets/property-images/cottage.jpg';
import desres from '../assets/property-images/desres.jpg';
import hut from '../assets/property-images/hut.jpg';
import shed from '../assets/property-images/shed.jpg';
import placeholder from '../assets/property-images/placeholder.jpg';

export default function RealEstate() {
    const [propertyArr] = React.useState([
        {
            propertyLocation: 'Kensington, London',
            priceGBP: 890000,
            roomsM2: [14, 18, 14, 10, 6],
            comment: 'Highly desirable location in stunning scenery!',
            image: cottage
        },
        {
            propertyLocation: 'Wirral, Liverpool',
            priceGBP: 650000,
            roomsM2: [18, 16, 15, 14, 17, 19, 9, 8],
            comment: 'Astonishing view with a modern finish!',
            image: desres
        },
        {
            propertyLocation: 'Beach, Brighton',
            priceGBP: 420000,
            roomsM2: [5],
            comment: 'Beautiful interior and a spacious room.',
            image: hut
        },
        {
            propertyLocation: 'Highlands, Scotland',
            priceGBP: 550000,
            roomsM2: [6, 12, 11, 5],
            comment: 'Lots of potential, snug, a must see!',
            image: shed
        }
    ]);
    console.log(propertyArr.length);
    const [noPropertyArr] = React.useState([
        {
            propertyLocation: '1 Joe Bloggs street',
            priceGBP: 100000,
            roomsM2: [16, 12, 6, 11, 5],
            comment: 'This is the description',
            image: placeholder
        }
    ]);
    const [showProperties, setShowProperties] = React.useState(false);
    function toggleProperties() {
        setShowProperties(prev => !prev);
    }
return(
    <>  
        <button 
            className="show-properties-btn" 
            onClick={toggleProperties}
        >{showProperties ? 'Hide Properties' : 'Show Properties'}</button>
        <div className="real-estate-container">
        {showProperties && 
            (propertyArr.length > 0 
                ? (propertyArr.map((property, index) => (
                    <div key={index} className="property-card">
                        <div className="image-container">
                            <img
                                src={property.image}
                                alt={property.propertyLocation}
                            />
                        </div>
                        <div className="property-details">
                            <h3>{property.propertyLocation}</h3>
                            <p className="price">
                                £{property.priceGBP.toLocaleString()}
                            </p>
                            <p className="comment">
                                {property.comment}
                            </p>
                             <p className="rooms">
                                Rooms: {property.roomsM2.length}
                            </p>
                            <p className="area">
                                Total Area: {property.roomsM2.reduce((a, b) => a + b, 0)} m²
                            </p>
                        </div>
                    </div>
                    ))
                )
                : (noPropertyArr.map((property, index) => (
                    <div key={index} className="property-card">
                        <div className="image-container">
                            <img src={property.image} alt={property.propertyLocation} />
                        </div>
                        <div className="property-details">
                            <h3>{property.propertyLocation}</h3>
                            <p className="price">
                                Price: £{property.priceGBP.toLocaleString()}
                            </p>
                            <p className="comment">
                                {property.comment}
                            </p>
                            <p className="rooms">
                                Rooms: {property.roomsM2.length}
                            </p>
                            <p className="area">
                                Total Area: {property.roomsM2.reduce((a, b) => a + b, 0)} m²
                            </p>
                        </div>
                    </div>
                    ))
                )
            )
        }
            
        </div>
    </>
)
}