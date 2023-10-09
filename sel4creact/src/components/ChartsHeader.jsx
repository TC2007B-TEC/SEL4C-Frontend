import React from 'react';

const ChartsHeader = ({ category, title }) => {
return (
  <div className=" mb-10">
    <div>
      <p className="text-3xl font-extrabold tracking-tigh">{category}</p>
    </div>
    <p className="text-center text-3xl mt-3">{title}</p>
  </div>
);}

export default ChartsHeader;