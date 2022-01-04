import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Container, Form, InputForm, Button } from "./signUpStyles";
import swal from "sweetalert2";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    cpf: "",
    zipCode: "",
    address: "",
    number: "",
    district: "",
    city: "",
  });

  const [error, setError] = useState();

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setError(false);
  };

  useEffect(() => {
    const cep = form.zipCode.replace(/[^0-9]/g, "");
    setForm({
      ...form,
      ["address"]: "",
      ["district"]: "",
      ["city"]: "",
    });
    if (cep?.length !== 8) {
      return;
    } else {
      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => {
          if(res.data.erro){
            setError(true)         
          } else {
            setForm({
              ...form,
              ["address"]: res.data.logradouro,
              ["district"]: res.data.bairro,
              ["city"]: res.data.localidade,
            });
          }
        })
        .catch((err) => setError({...err}));
    }
  }, [form.zipCode]);

  useEffect(() => {
    const formString = localStorage.getItem("form") || Cookies.get("form");
    if (formString) {
      const formJson = JSON.parse(formString);
      setForm(formJson);
    }
  }, []);


  const handleSignUp = (event) => {
    event.preventDefault();
    
    new swal({
      title: "Very Good",
      text: "Successfully Registered!",
      icon: "success",
    });

    const formJSON = JSON.stringify(form);
    localStorage.setItem("form", formJSON);
    Cookies.set("form", formJSON);

    setForm({
      name: "",
      date: "",
      cpf: "",
      zipCode: "",
    });
  };

  const zipCodeAuto = form.zipCode.length == 8 ? true : false;

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <InputForm
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder={"Full Name"}
          required
        />
        <InputForm
          name="date"
          value={form.date}
          onChange={onChange}
          placeholder={"Birth date MM/DD/YYYY"}
          max="2011-12-31"
          type="date"
          required
        />
        <InputForm
          name="cpf"
          value={form.cpf}
          onChange={onChange}
          placeholder={"CPF Only numbers"}
          required
          maxLength={11}
          pattern={"[0-9]{11}"}
          title={"Only Numbers - Your CPF must contain 11 digits "}
        />
        <InputForm
          name="zipCode"
          value={form.zipCode}
          onChange={onChange}
          placeholder={"Zip Code - Only numbers"}
          required
          maxLength={9}
          title={"Only Numbers - Your ZIP Code must contain 8 digits"}
        />

        {form.address ? (
          <>
            <InputForm
              name="address"
              value={form.address}
              placeholder={"Address"}
              readOnly
              required
            />
            <InputForm
              name="number"
              value={form.number}
              onChange={onChange}
              placeholder={"Number"}
              required
            />
            <InputForm
              name="district"
              value={form.district}
              placeholder={"District"}
              readOnly
              required
            />
            <InputForm
              name="city"
              value={form.city}
              placeholder={"City"}
              readOnly
              required
            />
          </>
        ) : null}
        {error ? <p> Zip Code Invalid </p> : null}
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};
export default SignUp;
