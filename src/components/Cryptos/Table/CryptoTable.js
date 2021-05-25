import React from 'react';
import {CryptoTableRow} from './TableRow';
import {TableHeaders} from './TableHeaders';
import './CryptoTableStyle.scss';

export const CryptoTable = ({crypts, selectCurrency}) => {
  return (
    <div className="table">
      <TableHeaders/>
      <div className="table-row-group"> 
        {Object.values(crypts).map((opt, i) => 
          <CryptoTableRow
            key={i}
            data={opt}
            selectCurrency={selectCurrency}
          />
        )}
      </div>
    </div> 
  );
}