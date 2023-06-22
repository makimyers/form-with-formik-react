import React from 'react';
import { Formik } from 'formik';

const Form = () => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
        agreeTerms: false,
        choice: 'choice1',
        fruit: '',
      }}
      validate={values => {
        const errors: Record<string, string> = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        } else if (values.password.length < 6) {
          errors.password = 'Password must be at least 6 characters long';
        }
        if (!values.fruit) {
          errors.fruit = 'Required';
        }
        if (!values.agreeTerms) {
          errors.agreeTerms = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className="flex flex-col max-w-md gap-4">
          <div className="flex flex-col gap-2 items-start">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="w-full"
            />
            <div className="text-red-600">{errors.email && touched.email && errors.email}</div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="w-full"
            />
            <div className="text-red-600">{errors.password && touched.password && errors.password}</div>
          </div>

          <div className="flex flex-col gap-2 items-start">
            <label>Radio</label>
            <label className="flex flex-row gap-3 items-center">
              <input
                type="radio"
                name="choice"
                value="choice1"
                checked={values.choice === "choice1"}
                onChange={handleChange}
              />
              Choice 1
            </label>
            <label className="flex flex-row gap-3 items-center">
              <input
                type="radio"
                name="choice"
                value="choice2"
                checked={values.choice === "choice2"}
                onChange={handleChange}
              />
              Choice 2
            </label>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <label>Select</label>
            <select
              name="fruit"
              value={values.fruit}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full"
            >
              <option value="">Select a fruit...</option>
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="cherry">Cherry</option>
            </select>
            <div className="text-red-600">{errors.fruit && touched.fruit && errors.fruit}</div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <div className="flex flex-row gap-3 items-center"><input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.agreeTerms}
            />
              <label htmlFor="agreeTerms">I agree to the terms and conditions</label>
            </div>
            <div className="text-red-600">{errors.agreeTerms && touched.agreeTerms && errors.agreeTerms}</div>
          </div>
          <button type="submit" disabled={isSubmitting} className="bg-black text-white p-3">
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
