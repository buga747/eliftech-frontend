import React from 'react';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';

import {
  ButtonContainer,
  Form,
  FormContainer,
  InputContainer,
} from './UserForm.styled';

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4285f4;
  color: #fff;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0d47a1;
  }
`;

const UserForm = ({
  handleSubmit,
  handleInputChange,
  formData,
  setCaptchaPassed,
}) => {
  const handleCaptchaChange = value => {
    setCaptchaPassed(!!value);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </InputContainer>
        <ReCAPTCHA
          sitekey="6Lc7zkUmAAAAANvm_ujvH1vCBpmVR2aWnXXdLhWo"
          onChange={handleCaptchaChange}
        />
        <ButtonContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};

export default UserForm;
