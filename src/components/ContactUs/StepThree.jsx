import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
import { useFormData } from '../ContactUsContext';

const StepThree = () => {

    const { formData, inputChangeHandler, recaptchaHandler, submitEnabled } = useFormData();

    return (
        <>
            <textarea
            rows="8"
              placeholder="Details (Optional)"
              name="description"
              value={formData.description}
              onChange={inputChangeHandler}
            ></textarea>
            <StyledWrapper>
          <StyledReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={recaptchaHandler}/>
            <button type="submit" disabled={!submitEnabled}>Submit Response</button>
            </StyledWrapper>
        </>
    )
}

const StyledWrapper = styled.div`
grid-column-start: 1;
grid-column-end: 3;
display: flex;
`;

const StyledReCAPTCHA = styled(ReCAPTCHA)`
  margin: 20px;
  width: 20rem;
`;

export default StepThree
