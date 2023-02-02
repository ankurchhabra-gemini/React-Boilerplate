import React from 'react';
import CustomSearch from '../../components/shared/CustomSearch';

const Loader = () => {
  return (
    <div className="w-4/5 h-[90vh] overflow-y-auto bg-white text-lightWhite">
      <CustomSearch />
    </div>
  );
};

export default Loader;
