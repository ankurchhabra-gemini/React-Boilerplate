/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomSelect from '../shared/CustomSelect';
import MultipleSelectCheckmarks from '../shared/CustomSelectMultipleFields';
import Checkbox from '@mui/material/Checkbox';

const CustomForms = () => {
  const options = ['option 1', 'option 2', 'option 3'];
  const [selectedOption, setSelectedOption] = useState<string>('option 1');
  const [checked, setChecked] = useState<boolean>(false);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className="w-[45%] shadow-cardShadow mt-4">
      <header className="bg-lightBluish p-2 text-white">Reactive forms</header>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = { email: '', password: '' };
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          } else if (values.password.length < 8) {
            errors.password = 'Password must be greater than 8 or equal';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="flex p-4">
              <div className="flex flex-col h-[100px] w-1/2">
                <p>Username</p>
                <Field
                  type="email"
                  name="email"
                  style={{ border: '1px solid #e1e1e1' }}
                  className="w-4/5 px-2 py-1 outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-Bittersweet"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <p>Password</p>

                <Field
                  type="password"
                  name="password"
                  style={{ border: '1px solid #e1e1e1', outline: 'none' }}
                  className="w-4/5 px-2 py-1 outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-Bittersweet"
                />
              </div>
            </div>
            <div className="flex flex-col w-1/2 p-4">
              <p>select option</p>
              <CustomSelect
                pagesData={options}
                itemsPerPage={selectedOption}
                setItemsPerPage={setSelectedOption}
              />
            </div>
            <div className="w-1/2 mt-4 p-4">
              <MultipleSelectCheckmarks />
              <Checkbox
                {...label}
                onClick={() => {
                  setChecked(!checked);
                }}
              />
              <span>CheckBox</span>
              {checked && (
                <div className="ml-3">
                  <Field
                    type="email"
                    name="checkedValue"
                    style={{ border: '1px solid #e1e1e1' }}
                    className="w-4/5 px-2 py-1 outline-none"
                  />
                </div>
              )}
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomForms;
