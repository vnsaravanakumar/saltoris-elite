import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Input from '@material-tailwind/react/Input';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/register/Page';
import Container from 'components/register/Container';
import { FormInput } from "components/form/FormInput";
import { useForm } from "react-hook-form";
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from 'react-router-dom';
import { SimpleModal } from 'components/SimpleModal';

export default function SupplierRegister({data: { companyName, email, registrationNumber}}) {

    const { register, handleSubmit, formState, control, getValues, reset } = useForm();
    const form = useRef();

    const errorMessages = {
        companyName: {
            required: "Company legal name is required"
        },
        registrationNumber: {
            required: "Registration number is required"
        },
        address: {
            required: "Address is required"
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
    const closeHandler = () => history.push("/supplier-login");

    const { errors } = formState; 

    const errorMessage = (field) => {
        const type = errors?.[field]?.type;
        return type ? errorMessages[field][type] : "";
    }
    
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const history = useHistory();

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

    useEffect(() => {
        //const result = await fetch('./api/formValues.json'); // result: { firstName: 'test', lastName: 'test2' }
        reset({companyName, registrationNumber, email }); // asynchronously reset your form values
      }, [reset])

    return (   
        <>         
        <Card>
            <CardHeader color="lightBlue" contentPosition="none">
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
                                label="Registration Number"
                                validation={errorMessage("registrationNumber")}
                                rules={{ required: true }}
                                defaultValue={registrationNumber}
                                disabled
                            />
                        </div>
                        <div className="w-full lg:w-12/12 mb-10 font-light">
                            <FormInput 
                                control={control}
                                name="address"
                                label="Address"
                                validation={errorMessage("address")}
                                rules={{ required: true }}
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
                                defaultValue={email}
                            />
                        </div>
                        <div className="w-full lg:w-6/12 lg:pr-4 mb-10 font-light">
                            <FormInput 
                                control={control}
                                name="password"
                                label="Password"
                                validation={errorMessage("password")}
                                rules={{ required: true }}
                            />
                        </div>
                        <div className="w-full lg:w-6/12 lg:pl-4 mb-10 font-light">
                            <FormInput 
                                control={control}
                                name="confirmPassword"
                                label="Confirm Password"
                                validation={errorMessage("confirmPassword")}
                                rules={{ required: true }}
                            />
                        </div>
                    </div>
            </CardBody>
            <CardFooter>
                <div className="flex justify-center">
                    <Button
                        color="lightBlue"
                        buttonType="submit"
                        size="md"
                        ripple="dark"
                    >
                        Register
                    </Button>
                </div>
            </CardFooter>
            </form>
        </Card>
        <SimpleModal showModal={showModal} setShowModal={setShowModal} closeHandler={closeHandler} message="You have been registered, please check your email for credentials to login." />
        </>
    );
}
