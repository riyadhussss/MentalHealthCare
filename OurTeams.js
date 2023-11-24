import React from 'react';
import pict from '../../assets/pict.png';

import '../css/style.css';

const OurTeams = ({ item }) => {
  const url = item.img;
  return (
    <div className="col-2 mx-auto p-1">
      <div className="card">
        <img src={item.img} className="card-img-top" alt="pict" style={{ width: '202px', height: '179px', borderRadius: '15px', objectFit: 'cover' }} />
        <div className="card-body text-center">
          <h6>{item.name}</h6>
          {/* <small className="text-muted">{item.roles}</small> */}
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
