import Card from 'components/card/Card';
import CardHeader from 'components/card/CardHeader';
import CardBody from 'components/card/CardBody';
import CardFooter from 'components/card/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Input from '@material-tailwind/react/Input';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/preauth/Page';
import Container from 'components/preauth/Container';
import { useHistory } from 'react-router-dom';
import React, { useState, useRef } from "react";
import AuthService from "../services/auth.service";
import { useForm } from "react-hook-form";
import { FormInput } from "../components/form/FormInput";
import SupplierRegister from "./SupplierRegister";
import ClosingAlert from "@material-tailwind/react/ClosingAlert";
import { SimpleModal } from 'components/SimpleModal';

export default function SupplierPreRegister() {
    const form = useRef();
    const checkBtn = useRef();
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [preRegister, setPreRegister] = useState(true);
    const [preRegisterValues, setPreRegisterValues] = useState();
    
    const [showModal, setShowModal] = React.useState(false);
    const closeHandler = () => setShowModal(false);

    const errorMessages = {

        cinPan: {
            pattern: "Please enter a valid email",
            required: "CIN / PAN is required"
        },
        companyName: {
            required: "Company name is required"
        },
        address1: {
            required: "Address Line 1 is required"
        },
        address2: {
            required: "Address Line 2 is required"
        },
        city: {
            required: "City is required"
        },
        state: {
            required: "State is required"
        },
        country: {
            required: "Country is required"
        },
        zipcode: {
            required: "Zip Code is required"
        }
    }

    const errorMessage = (field) => {
            const type = errors?.[field]?.type;
            return errorMessages?.[field]?.[type];
    }

    const { register, handleSubmit, formState, control, getValues } = useForm();

    const { errors } = formState; 

    const handleRegister = (data, e) => {
        e.preventDefault();
        //alert("handler")
        setMessage("");
        setLoading(true);
    
        //form.current.validateAll();
    
        //if (checkBtn.current.context._errors.length === 0) {
          const prom = AuthService.customerPreCheck(data.companyName, data.email)
          prom.then(
            (responseData) => {
              //history.push("/supplier-register");
              if(responseData.status === "SUCCESS"){
                setPreRegisterValues({...responseData.data, registrationNumber: Math.round(Math.random() * 10000000000)});
                setPreRegister(false);
              }else if(responseData.status === "ERROR"){
                setShowModal(true);
              }

            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              setLoading(false);
              setMessage(resMessage);
            }
          );
        // } else {
        //   setLoading(false);
        // }
    };
    return (
        <>
        <Page>
            <DefaultNavbar />
            <Container className="max-w-md">             
                {preRegister ? 
                <Card>
                    <form onSubmit={handleSubmit(handleRegister)} ref={form}>
                    <div contentPosition="none" className=" p-5 mb-5 text-white rounded-lg">
                        <div className="w-full justify-center">
                            <div className="uppercase font-bold pb-4 text-center text-gray-500 text-[10px]">STEP1</div>
                            <h2 className="s-text-base text-center font-bold text-gray-800">Enter Company Details</h2>
                        </div>
                    </div>
                    {/* <ClosingAlert color="red" className="text-sm">Company doesn't exists</ClosingAlert> */}
                    <CardBody>
                        <div className="flex flex-wrap ">
                            <div className="w-full mb-10 lg:w-6/12 lg:pr-4 font-light">
                                <FormInput 
                                    control={control}
                                    name="companyName"
                                    label="Company (legal) Name"
                                    validation={errorMessage("companyName")}
                                    rules={{ required: true }}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 mb-10 lg:pl-4 font-light">
                                <FormInput 
                                    control={control}
                                    name="cinPan"
                                    label="CIN / PAN"
                                    validation={errorMessage("cinPan")}
                                    rules={{ required: true }}
                                />
                            </div>
                            <div className="w-full lg:w-12/12 mb-10 font-light lg:pr-4 lg:w-6/12 ">
                                <FormInput 
                                    control={control}
                                    name="address1"
                                    label="Address Line 1"
                                    validation={errorMessage("address1")}
                                    rules={{ required: true }}
                                />
                            </div>
                            <div className="w-full lg:w-12/12 mb-10 font-light lg:pl-4 lg:w-6/12">
                                <FormInput 
                                    control={control}
                                    name="address2"
                                    label="Address Line 2"
                                    validation={errorMessage("address2")}
                                    rules={{ required: true }}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 lg:pr-4 mb-10 font-light">
                                <FormInput 
                                    control={control}
                                    name="city"
                                    label="City"
                                    validation={errorMessage("city")}
                                    rules={{ required: true }}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 lg:pl-4 mb-10 font-light">
                                <FormInput 
                                    control={control}
                                    name="state"
                                    label="State"
                                    validation={errorMessage("state")}
                                    rules={{ required: true }}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 lg:pr-4 mb-10 font-light">
                                <FormInput 
                                    control={control}
                                    name="zipcode"
                                    label="Zipcode"
                                    validation={errorMessage("zipcode")}
                                    rules={{ required: true }}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 lg:pl-4 mb-10 font-light">
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
                            {/* <div className="w-full  mb-10 font-light">
                                <FormInput 
                                    control={control}
                                    name="email"
                                    label="Email ID"
                                    validation={errorMessage("email")}
                                    rules={{ required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/ }}
                                    type="email"
                                />
                            </div> */}
                        </div>
                    </CardBody>
                    <CardFooter className="-pt-4">
                        <div className="flex justify-center">
                            <Button
                                color="blue"
                                className="bg-primary h-12"
                                buttonType="submit"
                                size="md"
                                ripple="dark"
                                block={true}
                                iconOnly={false}
                            >
                                Get Started
                            </Button>
                        </div>
                    </CardFooter>
                    </form>
                </Card> :
                <SupplierRegister data={preRegisterValues} />}
            </Container>
        </Page>
        <SimpleModal type="ERROR" showModal={showModal} setShowModal={setShowModal} closeHandler={closeHandler} message="Please contact your admin." />
        </>
    );
}
