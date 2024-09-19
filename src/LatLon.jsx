import React from 'react';

function LatLon(props) {
    return(
      <>
        <h2>Welcome to {props.city}</h2>
        <p>{props.city} is located at {props.lat} by {props.lon}</p>
      </>
    );
  
}
export default LatLon;