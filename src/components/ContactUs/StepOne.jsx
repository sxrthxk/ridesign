import React from 'react'
import Services from '../../assets/models/ServicesModel'
import { useFormData } from '../ContactUsContext'


const StepOne = () => {

    const { formData, inputChangeHandler } = useFormData();

    return (
        <>
            <br />
            <div className="checkboxes">
              {Services.map((service) => (
                <label key={service.key}>
                  <input type="checkbox" name={service.id} value={formData.checks} onChange={inputChangeHandler}/>
                  {service.title}
                </label>
              ))}
            </div>
        </>
    )
}

export default StepOne
