import React from 'react';

const ChartsHeader = ({ category, title }) => {
return (
  <div className=" mb-2">
    <div>
      <p className="text-2xl font-extrabold tracking-tigh">{category}</p>
    </div>
    <p className="text-center text-2xl mt-3">{title}</p>
  </div>
);}

export default ChartsHeader;