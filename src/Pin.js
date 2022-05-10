import React, {useState, useEffect} from 'react';
import { RiMapPin2Fill} from 'react-icons/ri';


export default function Pin(props) { 
  return (
    <div>
      <RiMapPin2Fill 
        size="20" 
        lat={props.lat} 
        lng={props.lng}
      />
    </div>
  );
}