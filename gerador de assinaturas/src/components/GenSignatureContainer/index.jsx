import SignatureCP from "../SignatureCP/SignatureCP.jsx";
import Form from "../Form/index.jsx";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function GenSignatureContainer(props) {
  const [form, setForm] = useState({
    name: "",
    cargo: "",
    area: "",
    ramal: "",
    phone: "",
    email: "",
    skype: "",
    address: "",
  });

  const ticket = useRef(null);

  return (
    <div className={styles.container}>
      <img
        src="https://gerador-de-assinaturas-hope.web.app/logo.png"
        alt="Logo Hope"
        className={styles.hopelogo}
      />
      <SignatureCP form={form} ticket={ticket} />
      <Form
        setIsStart={props.setIsStart}
        form={form}
        setForm={setForm}
        ticket={ticket}
      />
    </div>
  );
}

GenSignatureContainer.propTypes = {
  setIsStart: PropTypes.func.isRequired,
};

export default GenSignatureContainer;
