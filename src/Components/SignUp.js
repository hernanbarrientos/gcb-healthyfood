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

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    const cep = form.zipCode.replace(/[^0-9]/g, "");
    if (cep?.length !== 8) {
      return;
    } else {
      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => {
          setForm({
            ...form,
            ["address"]: res.data.logradouro,
            ["district"]: res.data.bairro,
            ["city"]: res.data.localidade,
          });
        })
        .catch((err) => console.log(err.response));
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
          placeholder={"CPF ___.___.___-__"}
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

        {zipCodeAuto ? (
          <>
            <InputForm
              name="address"
              value={form.address}
              placeholder={"Address"}
              readOnly
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
            />
            <InputForm
              name="city"
              value={form.city}
              placeholder={"City"}
              readOnly
            />
          </>
        ) : null}

        <Button>Submit</Button>
      </Form>
    </Container>
  );
};
export default SignUp;
