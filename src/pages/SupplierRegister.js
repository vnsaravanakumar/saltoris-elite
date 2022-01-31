import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import { FormInput } from "components/form/FormInput";
import { FormCheckbox } from 'components/form/FormCheckbox';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/register/Page';
import Container from 'components/register/Container';
import { useForm } from "react-hook-form";
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from 'react-router-dom';
import { SimpleModal } from 'components/SimpleModal';
import { TermsAndConditions } from 'components/TermsAndConditions'
import { Link } from 'react-router-dom';
import Checkbox from '@material-tailwind/react/Checkbox';
import ReCAPTCHA from "react-google-recaptcha";

export default function SupplierRegister({data: { companyName, email, registrationNumber}}) {

    const { handleSubmit, trigger, formState, control, watch, getValues, setValue, reset } = useForm({defaultValues: {
        useEmail: true,
        email: email
      }});
    const form = useRef();
    

    const errorMessages = {
        companyName: {
            required: "Company legal name is required"
        },
        registrationNumber: {
            required: "Registration number is required"
        },
        address1: {
            required: "Address Line 1 is required"
        },
        country: {
            required: "Country is required"
        },
        city: {
            required: "City is required"
        },
        pincode: {
            required: "Pincode is required"
        },
        firstName: {
            required: "First name is required"
        },
        lastName: {
            required: "Last name is required"
        },
        businessRole: {
            required: "Business role is required"
        },
        email: {
            required: "Email is required"
        },
        password: {
            required: "Password is required"
        },
        confirmPassword: {
            required: "Confirm password is required"
        }

    }

    const [showModal, setShowModal] = React.useState(false);
    const [showTermsAndConditions, setShowTermsAndConditions] = React.useState(false);
    
    const closeHandler = () => history.push("/supplier-login");

    const { errors } = formState; 

    const errorMessage = (field) => {
        const type = errors?.[field]?.type;
        return type ? errorMessages[field][type] : "";
    }
    
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const history = useHistory();
    const watchUseEmail = watch("useEmail", true);

    // watch((data, { name, type }) => {
    //     if(name === "useEmail"){

    //     }
    //     console.log(data, name, type)
    // })

    useEffect(() => {
        //const result = await fetch('./api/formValues.json'); // result: { firstName: 'test', lastName: 'test2' }
        reset({companyName, registrationNumber, email, useEmail: true }); // asynchronously reset your form values
      }, [reset])

    const onChange = (value) => {
        console.log("Captcha value:", value);
        setCaptchaVerified(true);
    }

    const handleRegister = (data, e) => {
        e.preventDefault();
        //alert("handler")
        // setMessage("");
        // setLoading(true);
        setShowModal(true)
        
        

        //form.current.validateAll();
    
        //if (checkBtn.current.context._errors.length === 0) {
        //   const prom = AuthService.customerPreCheck(email, password)
        //   prom.then(
        //     () => {
        //       history.push("/login");
        //     },
        //     (error) => {
        //       const resMessage =
        //         (error.response &&
        //           error.response.data &&
        //           error.response.data.message) ||
        //         error.message ||
        //         error.toString();
    
        //       setLoading(false);
        //       setMessage(resMessage);
        //     }
        //   );
        // } else {
        //   setLoading(false);
        // }
    };


    //   useEffect(() => {
    //     trigger("useEmail", true);
    //   }, []);

    return (   
        <>         
        <Card>
            <CardHeader color="" className="bg-primary" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-xl">Supplier Registration</h2>
                </div>
            </CardHeader>
            <form onSubmit={handleSubmit(handleRegister)} ref={form}>
            <CardBody>
                    <h6 className="text-lightBlue-500 text-sm mt-3 mb-6 font-light uppercase">
                        Company Information
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-6/12 mb-10 lg:pr-4 font-light">
                            <FormInput 
                                control={control}
                                name="companyName"
                                label="Company Legal Name"
                                validation={errorMessage("companyName")}
                                rules={{ required: true }}
                                defaultValue={companyName}
                            />
                        </div>
                        <div className="w-full lg:w-6/12 mb-10 lg:pl-4 font-light">
                            <FormInput 
                                control={control}
                                name="registrationNumber"
                                label="Corporate Identification Number (CIN)"
                                validation={errorMessage("registrationNumber")}
                                //rules={{ required: true }}
                                defaultValue={registrationNumber}
                                disabled
                            />
                        </div>
                        <div className="w-full lg:w-12/12 mb-10 font-light">
                            <FormInput 
                                control={control}
                                name="address1"
                                label="Address Line 1"
                                validation={errorMessage("address1")}
                                rules={{ required: true }}
                            />
                        </div>
                        <div className="w-full lg:w-12/12 mb-10 font-light">
                            <FormInput 
                                control={control}
                                name="address2"
                                label="Address Line 2"
                            />
                        </div>
                        <div className="w-full lg:w-4/12 lg:pr-4 mb-10 font-light">
                            <FormInput 
                                control={control}
                                name="country"
                                label="Country"
                                validation={errorMessage("country")}
                                rules={{ required: true }}
                                list="country-list"
                            />
                            <datalist id="country-list">
                                <option value="India" />
                                <option value="US" />
                                <option value="Australia" />
                            </datalist>
                        </div>
                        <div className="w-full lg:w-4/12 lg:px-4 mb-10 font-light">
                            <FormInput 
                                control={control}
                                name="city"
                                label="City"
                                validation={errorMessage("city")}
                                rules={{ required: true }}
                            />
                        </div>
                        <div className="w-full lg:w-4/12 lg:pl-4 mb-10 font-light">
                            <FormInput 
                                control={control}
                                name="pincode"
                                label="Pincode"
                                validation={errorMessage("pincode")}
                                rules={{ required: true }}
                            />
                        </div>
                    </div>

                    <h6 className="text-lightBlue-500 text-sm my-6 font-light uppercase">
                        Administrator Information
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-6/12 lg:pr-4 mb-10 font-light">
                            <FormInput 
                                control={control}
                                name="firstName"
                                label="First Name"
                                validation={errorMessage("firstName")}
                                rules={{ required: true }}
                            />
                        </div>
                        <div className="w-full lg:w-6/12 lg:pl-4 mb-10 font-light">
                            <FormInput 
                                control={control}
                                name="lastName"
                                label="Last Name"
                                validation={errorMessage("lastName")}
                                rules={{ required: true }}
                            />
                        </div>
                        <div className="w-full lg:w-6/12 lg:pr-4 mb-2 font-light">
                            <FormInput 
                                control={control}
                                name="businessRole"
                                label="Business Role"
                                validation={errorMessage("businessRole")}
                                rules={{ required: true }}
                            />
                        </div>
                        <div className="w-full lg:w-6/12 lg:pl-4 mb-2 font-light">
                            <FormInput 
                                control={control}
                                name="email"
                                label="Username (Email Address)"
                                validation={errorMessage("email")}
                                rules={{ required: true }}
                                value={watchUseEmail ? email : ''}
                                defaultValue={email}
                            />
                        </div>
                        <div className="w-full lg:w-12/12 mb-5 font-light flex justify-end">
                        <div className="w-full lg:w-6/12 lg:pl-4 font-light">
                            <FormCheckbox 
                                control={control}
                                name="useEmail"
                                rules={{ required: false }}
                                text="Use my email as username"
                            />
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 lg:pr-4 mb-10 font-light">
                            <FormInput 
                                control={control}
                                name="password"
                                label="Password"
                                validation={errorMessage("password")}
                                rules={{ required: true }}
                                type="password"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 lg:pl-4 mb-10 font-light">
                            <FormInput 
                                control={control}
                                name="confirmPassword"
                                label="Confirm Password"
                                validation={errorMessage("confirmPassword")}
                                rules={{ required: true }}
                                type="password"
                            />
                        </div>
                    </div>
            </CardBody>
            <CardFooter>
                <div className="flex justify-center mb-4">
                    <ReCAPTCHA
                        sitekey="6LfA3UYeAAAAANF0S7U6iNL0sI6yi_BCRuXFkB3h"
                        onChange={onChange}
                    />
                </div>
                <div className="flex justify-center">
                    <Button
                        color=""
                        className="bg-primary disabled:opacity-50"
                        buttonType="submit"
                        size="md"
                        ripple="dark"
                        disabled={!captchaVerified}
                    >
                        Register
                    </Button>
                </div>
                <div className="flex justify-center mt-4">
                    <FormCheckbox 
                        control={control}
                        name="acceptTerms"
                        rules={{ required: true }}
                        text=""
                    />
                    <span className="text-sm">I have read and agree with the <span  className="text-primary cursor-pointer">Terms of Use</span>.</span>
                     
                </div>
            </CardFooter>
            </form>
        </Card>
        <SimpleModal showModal={showModal} setShowModal={setShowModal} closeHandler={closeHandler} message="You have been registered, please check your email for credentials to login." />
        <TermsAndConditions showModal={showTermsAndConditions} setShowModal={setShowTermsAndConditions} closeHandler={closeHandler} />
        </>
    );
}
