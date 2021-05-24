import React from 'react';
import '../CryptoTableStyle.scss';
import {Link} from 'react-router-dom';

export const NameCol = ({id, name, colClassName}) => 
  <div className={`row-col `+ colClassName }>
    <Link
      className="name-btn" 
      to={{
        pathname: "/charts",
        value: { id: id, name: name }
      }}
    >
      {name}
    </Link>
  </div>