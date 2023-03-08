import React from 'react';
import CustomForms from '../../components/Forms';

const Forms = () => {
  return (
    <div className="w-4/5 h-[90vh] overflow-y-auto bg-white text-lightWhite shadow">
      <h1 className="mt-3">Forms!</h1>
      <div className="flex gap-y-2 justify-evenly">
        <CustomForms />
        <CustomForms />
      </div>
    </div>
  );
};

export default Forms;
// Render Prop
