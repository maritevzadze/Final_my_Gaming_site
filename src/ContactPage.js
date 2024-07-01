import React from 'react';
import { useForm } from 'react-hook-form';

const ContactPage = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input type="text" name="name" ref={register({ required: true })} />
          {errors.name && <span>This field is required</span>}
        </label>
        <label>
          Email:
          <input type="email" name="email" ref={register({ required: true })} />
          {errors.email && <span>This field is required</span>}
        </label>
        <label>
          Message:
          <textarea name="message" ref={register({ required: true })} />
          {errors.message && <span>This field is required</span>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
