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

    const { handleSubmit, trigger, formState, control, watch, getValues, setValue, reset } = useForm();
    const form = useRef();
    

    const errorMessages = {
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
        },
        acceptTerms: {
            required: "Accept terms is required"
        }

    }

    const [showModal, setShowModal] = React.useState(false);
    const [showTermsAndConditions, setShowTermsAndConditions] = React.useState(false);
    
    const closeHandler = () => history.push("/supplier-login");

    const { errors } = formState; 

    const errorMessage = (field) => {
        const type = errors?.[field]?.type;
        return type ? errorMessages?.[field]?.[type] : "";
    }
    
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const history = useHistory();
    const watchUseEmail = watch("useEmail", true);

    // watch((data, { name, type }) => {
    //     if(name === "useEmail"){

    //     }
    //     console.log(data, name, type)
    // })

    // useEffect(() => {
    //     //const result = await fetch('./api/formValues.json'); // result: { firstName: 'test', lastName: 'test2' }
    //     reset({ email, useEmail: true }); // asynchronously reset your form values
    //   }, [reset])

    const onCaptchaChange = (value) => {
        console.log("Captcha value:", value);
        if(value !== null){
            setCaptchaVerified(true);
        }else{
            setCaptchaVerified(false);
        }
    }

    const onAcceptTermsChange = (value) => {
        console.log("Captcha value:", value);
        if(value !== null){
            setAcceptTerms(true);
        }else{
            setAcceptTerms(false);
        }
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
            {/* <CardHeader color="" className="bg-primary" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-xl">Supplier Registration</h2>
                </div>
            </CardHeader> */}
            <form onSubmit={handleSubmit(handleRegister)} ref={form}>
            <div contentPosition="none" className=" p-5 mb-5 text-white rounded-lg">
                <div className="w-full justify-center">
                    <div className="uppercase font-bold pb-4 text-center text-gray-500 text-[10px]">STEP2</div>
                    <h2 className="text-lg text-center font-bold text-gray-800 s-text-base">Enter Company Administrator Details</h2>
                </div>
            </div>
            <CardBody>
                    <div className="flex flex-wrap ">
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
                        <div className="w-full lg:w-6/12 lg:pr-4 mb-10 font-light">
                            <FormInput 
                                control={control}
                                name="businessRole"
                                label="Business Role"
                                validation={errorMessage("businessRole")}
                                rules={{ required: true }}
                            />
                        </div>
                        <div className="w-full lg:w-6/12 lg:pl-4 mb-10 font-light">
                            <FormInput 
                                control={control}
                                name="email"
                                label="Username (Email Address)"
                                validation={errorMessage("email")}
                                rules={{ required: true }}
                               // value={watchUseEmail ? email : ''}
                               // defaultValue={email}
                            />
                        </div>
                        {/* <div className="w-full lg:w-12/12 mb-5 font-light flex justify-end">
                        <div className="w-full lg:w-6/12 lg:pl-4 font-light">
                            <FormCheckbox 
                                control={control}
                                name="useEmail"
                                rules={{ required: false }}
                                text="Use my email as username"
                            />
                            </div>
                        </div> */}
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
                        onChange={onCaptchaChange}
                    />
                </div>
                <div className="flex justify-center pb-6">
                    <FormCheckbox 
                        control={control}
                        name="acceptTerms"
                        //rules={{ required: true }}
                        text=""
                        onChange={onAcceptTermsChange}
                    />
                    <span className="text-sm">I have read and agree with the <span  className="text-primary cursor-pointer">Terms of Use</span>.</span>
                </div>
                <div className="flex justify-center mb-8">
                    <Button
                        color="blue"
                        className="bg-primary h-12 disabled:opacity-50"
                        buttonType="submit"
                        size="md"
                        ripple="dark"
                        disabled={!captchaVerified || !acceptTerms}
                        block={true}
                        iconOnly={false}
                    >
                        Register
                    </Button>
                </div>
            </CardFooter>
            </form>
        </Card>
        <SimpleModal showModal={showModal} setShowModal={setShowModal} closeHandler={closeHandler} message="You have been registered, please check your email for credentials to login." />
        <TermsAndConditions showModal={showTermsAndConditions} setShowModal={setShowTermsAndConditions} closeHandler={closeHandler} />
        </>
    );
}
