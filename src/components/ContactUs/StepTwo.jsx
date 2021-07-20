import React from 'react'
import { useFormData } from '../ContactUsContext'

const StepTwo = () => {

    const {formData, inputChangeHandler} = useFormData();

    return (
        <>
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={inputChangeHandler}
              placeholder="First Name"
            />
            <input
              type="text"
              name="lname"
              value={formData.lname}
              onChange={inputChangeHandler}
              placeholder="Last Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={inputChangeHandler}
              placeholder="Email Address"
            />
            <input
              type="tel"
              name="pnumber"
              value={formData.pnumber}
              onChange={inputChangeHandler}
              placeholder="Phone Number"
            />
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={inputChangeHandler}
              placeholder="Company Name"
            />
        </>
    )
}

export default StepTwo
