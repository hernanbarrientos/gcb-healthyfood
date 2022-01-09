import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Container, Form, Input, Button, Label, P } from "./signUpStyles";
import swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const SignUp = () => {

  const schema = yup
  .object({
    name: yup.string().required(),
    date: yup.string().required("date is a required"),
    cpf: yup.string().length(11).required(),
    zipCode: yup.string().length(8).required(),
    address: yup.string().required(),
    number: yup.string().required(),
    district: yup.string().required(),
    city: yup.string().required(),
  })
  .required();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const watchZipCode = watch("zipCode");
  const watchAddress = watch("address");

  const onSubmit = (data) => {

    reset();
    
    new swal({
      title: "Very Good",
      text: "Successfully Registered!",
      icon: "success",
    });

    const formJSON = JSON.stringify(data);
    localStorage.setItem("form", formJSON);
    Cookies.set("form", formJSON);
    
  }

  const [error, setError] = useState();
 
    useEffect(() => {
    setValue("address", "")
    setValue("district", "")
    setValue("city", "")
    setError(undefined)
    if (watchZipCode?.length !== 8) {     
      return;
    } else {
      axios
        .get(`https://viacep.com.br/ws/${watchZipCode}/json/`)
        .then((res) => {
          if(res.data.erro){
            setError(true)         
          } else {
            
            setValue("address", res.data.logradouro)
            setValue("district", res.data.bairro)
            setValue("city", res.data.localidade)
            };
          
        })
        .catch((err) => setError({...err}));
    }
  }, [watchZipCode]);

  
  return (
    <>
    <Container>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <Input
          type="text"
          placeholder="Name"
          {...register("name")}
        />
        <P> {errors.name?.message} </P>
      </Label>

      <label>
        <Input
          type="date"
          placeholder="Birth Date"
          {...register("date", { required: true })}
        />
        <P> {errors.date?.message} </P>
      </label>

      <label>
        <Input
          type="number"
          placeholder="CPF"
          {...register("cpf")}
        />
        <P> {errors.cpf?.message} </P>
      </label>

      <label>
        <Input
          type="number"
          placeholder="Zip Code"
          {...register("zipCode")}
        />
        <P> {errors.zipCode?.message} </P>
      </label>

{watchAddress ? <>
      <label>
        <Input
          type="text"
          placeholder="Address"
          readOnly
          {...register("address", { required: true })}
        />
        <P> {errors.address?.message} </P>
      </label>

      <label>
        <Input
          type="text"
          placeholder="Number"
          {...register("number", { required: true })}
        />
        <P> {errors.number?.message} </P>
      </label>

      <label>
        <Input
          type="text"
          placeholder="District"
          readOnly
          {...register("district", { required: true })}
        />
        <P> {errors.district?.message} </P>
      </label>

      <label>
        
        <Input
          type="text"
          placeholder="City"
          readOnly
          {...register("city", { required: true })}
        />
        <P> {errors.city?.message} </P>
      </label>
      </> : null}

     
        {error ? <P> Zip Code Invalid </P> : null}

      <Button type="submit">Submit</Button>
    </Form>
    
    
    </Container>
    </>
  );
};

export default SignUp;
