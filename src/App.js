import { useEffect, useState } from "react";
import './App.css';
import './index.css'
import Cards from './components/cards';
import Submitsuccess from "./components/submitsuccess";
import React from "react";
import { Helmet } from "react-helmet";

function App() {



  const initialValues = { name: "", number: "", month: "", year: "", cvc: "" }
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [redborder, setRedBorder] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [display, setDisplay] = useState("")
  const [displayon, setDisplayon] = useState("displaynone")


  const handleNumber = (e) => {

    if (e.target.value.length === 4 || e.target.value.length === 9 || e.target.value.length === 14) {
      e.target.value += " "
    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setValues({ ...values, [name]: value })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validatemessage(values))
    setRedBorder(validateborder(values))
    getComputedStyle(document.documentElement).getPropertyValue('--button-overflow');
    document.documentElement.style.setProperty('--button-overflow', "scroll")
    setIsSubmit(true)

  }

  const validateborder = (values) => {
    const redborder = {}
    if (!values.name) {
      redborder.name = "redborder"
    }

    if (!values.number) {
      redborder.number = "redborder"

    } else if (! /^[ 0-9]+$/.test(values.number)) {
      redborder.number = "redborder"

    }

    if (!values.month) {
      redborder.month = "redborder"
    } else if (! /^[ 0-9]+$/.test(values.month)) {
      redborder.month = "redborder"
    }

    if (!values.year) {
      redborder.year = "redborder"
    } else if (! /^[ 0-9]+$/.test(values.year)) {
      redborder.year = "redborder"
    }

    if (!values.year && ! /^[ 0-9]+$/.test(values.year)) {
      redborder.year = "redborder"

    }

    if (!values.cvc) {
      redborder.cvc = "redborder"

    } else if (! /^[ 0-9]+$/.test(values.cvc)) {
      redborder.cvc = "redborder"

    }

    return redborder;
  }

  const validatemessage = (values) => {
    const errors = {}


    if (!values.name) {
      errors.name = "Can't be blank"

    }

    if (!values.number) {
      errors.number = "Can't be blank"

    } else if (! /^[ 0-9]+$/.test(values.number)) {
      errors.number = "Wrong format, numbers only"

    }

    if (!values.month || !values.year) {
      errors.month = "Can't be blank"
    } else if (! /^[ 0-9]+$/.test(values.month)) {
      errors.month = <span><div>Wrong format,</div><div style={{ lineHeight: "1px" }}> numbers only</div></span>

    }

    if (values.year && ! /^[ 0-9]+$/.test(values.year)) {
      errors.month = <span><div>Wrong format,</div><div style={{ lineHeight: "1px" }}> numbers only</div></span>

    }

    if (!values.cvc) {
      errors.cvc = "Can't be blank"

    } else if (! /^[ 0-9]+$/.test(values.cvc)) {
      errors.cvc = "Wrong format, numbers only"

    }
    return errors
  }

  useEffect(() => {

    if (isSubmit && Object.keys(errors).length === 0) {
      setDisplay("displaynone")
      setDisplayon("")
    }
  }, [errors]);


  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Interactive Form</title>
        <meta name="description" content="A Frontend Mentor Challenge" />
      </Helmet>
      <div className='wrapper'>

        <Cards name={values.name} number={values.number} month={values.month} year={values.year} cvc={values.cvc}></Cards>
        <form onSubmit={handleSubmit} className={`formwrapper ${display}`}>
          <div className="label">CARDHOLDER NAME<input onChange={handleChange} name="name" value={values.name} placeholder="Jane Appleseed" className={`input ${redborder.name}`}></input></div>
          {errors && <div className="errormessage">{errors.name}</div>}
          <div className="label">CARD NUMBER<input name="number" onChange={(e) => { handleNumber(e); handleChange(e) }} value={values.number} placeholder="e.g. 1234 5678 9123 0000" maxlength="19" className={`input ${redborder.number}`}></input></div>
          {errors && <div className="errormessage">{errors.number}</div>}
          <div className="expdatecvc">

            <div className="label">EXP. DATE (MM, YY)

              <div className="inputflex">
                <input className={`input smallinput ${redborder.month}`} name="month" onChange={handleChange} value={values.month} placeholder="MM" maxlength="2"></input>

                <input className={`input smallinput ${redborder.year}`} name="year" onChange={handleChange} value={values.year} placeholder="YY" maxlength="2"></input></div>{errors && <div className="errormessage">{errors.month}</div>}</div>
            <div className="label input cvcinput">CVC<input name="cvc" className={`input  ${redborder.cvc}`} onChange={handleChange} value={values.cvc} placeholder="e.g. 123" maxlength="3"></input>{errors && <div className="errormessage">{errors.cvc}</div>}</div></div>

          <button className="button">Confirm</button>

        </form>
        <Submitsuccess displayon={displayon} className={`${displayon} formwrapper`}></Submitsuccess>
      </div>
    </React.Fragment>
  )


}

export default App;
