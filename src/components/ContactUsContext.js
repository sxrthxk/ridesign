import React from "react";
import { useContext, useState } from "react";

const FormContext = React.createContext();

export const useFormData = () => {
  return useContext(FormContext);
};

export default function FormProvider({ children }) {

    
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const [pageNumber, setPageNumber] = useState(0)
  const nextPage = () => {
      setPageNumber(pageNum => pageNum + 1)
  }
  const prevPage = () => {
      setPageNumber(pageNum => pageNum - 1)
  }

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    pnumber: "",
    budget: "",
    companyName: "",
    startingTime: "",
    description: "",
  });

  function inputChangeHandler(e) {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    // axios.post('https://sheet.best/api/sheets/1140f02b-06f6-4d2b-ab10-f7b163a167fb',formData).then(res => console.log(res)).then(() => alert('Successfully Submitted.')).catch(error => console.error(error))

  };
  

  function recaptchaHandler() {
    // console.log("Recap done");
    setSubmitEnabled(true);
  }

  const value = {
    submitEnabled,
    setSubmitEnabled,
    pageNumber,
    setPageNumber,
    inputChangeHandler,
    formData,
    submitHandler,
    recaptchaHandler,
    nextPage,
    prevPage
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
