import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Form(props) {
  function changeHandler(ev) {
    const { name, value } = ev.target;
    props.setForm((old) => {
      return { ...old, [name]: value };
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const formData = props.form;
    console.log("Form Data:", formData);
    navigator.clipboard
      .writeText(props.ticket.current.innerHTML)
      .then(() => {
        alert("Copiado para a área de trasferência");
      })
      .catch(() => {
        alert("Erro ao copiar");
      });
  }
  // mascaras - input

  function phoneMask(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d{4})-(\d{1})(\d{4})/, "$1$2-$3")
      .replace(/(-\d{4})\d+$/, "$1");
  }

  return (
    <div>
      <h3 className={styles.formTitulo}>
        Preencha os campos abaixo e copie a sua assinatura ?
      </h3>
      <form action="" className={styles.layoutForm} onSubmit={handleSubmit}>
        <div className={styles.formFlexCol}>
          <input
            className={`${styles.formName} ${styles.borderForm}`}
            id="name"
            name="name"
            value={props.form.name}
            onChange={changeHandler}
            type="text"
            placeholder=" "
            required
          />
          <div className={styles.underlineG}></div>
          <label htmlFor="name">Nome Completo</label>
        </div>
        <div className={styles.formFlexRow}>
          <div className={styles.formFlexCol}>
            <input
              className={`${styles.formCargo} ${styles.borderForm}`}
              id="cargo"
              name="cargo"
              value={props.form.cargo}
              onChange={changeHandler}
              type="text"
              placeholder=" "
              required
            />
            <div className={styles.underline}></div>
            <label htmlFor="cargo">Cargo</label>
          </div>
          <div className={styles.formFlexCol}>
            <input
              className={`${styles.formArea} ${styles.borderForm}`}
              id="area"
              name="area"
              value={props.form.area}
              onChange={changeHandler}
              type="text"
              placeholder=" "
              required
            />
            <div className={styles.underline}></div>
            <label htmlFor="area">Área</label>
          </div>
        </div>
        <div className={styles.formFlexRow}>
          <div className={styles.formFlexCol}>
            <input
              className={`${styles.formRamal} ${styles.borderForm}`}
              id="ramal"
              name="ramal"
              value={props.form.ramal}
              onChange={changeHandler}
              type="number"
              onInput="limitarCaracteres(this)"
              placeholder=" "
              required
            />
            <div className={styles.underline}></div>
            <label htmlFor="ramal">Ramal</label>
          </div>
          <div className={styles.formFlexCol}>
            <input
              className={`${styles.formPhone} ${styles.borderForm}`}
              id="phone"
              name="phone"
              value={phoneMask(props.form.phone)}
              onChange={changeHandler}
              type="text"
              placeholder=" "
              required
            />
            <div className={styles.underline}></div>
            <label htmlFor="phone">Telefone (Opcional)</label>
          </div>
        </div>
        <div className={styles.formFlexRow}>
          <div className={styles.formFlexCol}>
            <input
              className={`${styles.formEmail} ${styles.borderForm}`}
              id="email"
              name="email"
              value={props.form.email}
              onChange={changeHandler}
              type="text"
              placeholder=" "
              required
            />
            <div className={styles.underline}></div>
            <label htmlFor="email">E-mail</label>
          </div>
          <div className={styles.formFlexCol}>
            <input
              className={`${styles.formSkype} ${styles.borderForm}`}
              id="skype"
              name="skype"
              value={props.form.skype}
              onChange={changeHandler}
              type="text"
              placeholder=" "
              required
            />
            <div className={styles.underline}></div>

            <label htmlFor="skype">Skype</label>
          </div>
        </div>
        <div className={`${styles.formFlexCol} ${styles.selectContainer}`}>
          <select
            className={`${styles.formEndereco} ${styles.borderForm}`}
            id="address"
            name="address"
            value={props.form.address}
            onChange={changeHandler}
            placeholder=" "
            required
          >
            <option value=""></option>
            <option value="Shopping Conjunto Nacional - Sd/Norte, Conj.a - Loja 2141 - Asa Norte - DF, 70077-900">
              Brasílha - Conjunto Nacional
            </option>
            <option value="St Sai/So, Área 6.580 - Loja 105 - Zona Industrial - DF, 71219-900">
              Brasílha - Park
            </option>
            <option value="Terraço Shopping - St SHC/AOS, Ea 02/08 - Loja 262 - Área Octogonal - DF, 70660-900">
              Brasílha - Terraço Shopping
            </option>
            <option value="Rua Dr. Argeu Braga Herbster, 610 - Outra Banda - Maranguape - CE, 61942-005">
              Ceará - Maranguape
            </option>
            <option value="Av Lauro Sodre 445 - Loja 201 - Parte B-07 - Botafogo - RJ, 2290-070">
              Rio de Janeiro - Rio Sul
            </option>
            <option value="Rua Dona Ana Pimentel, 247 - Água Branca - São Paulo - SP, 05002-040">
              São Paulo - Ateliê
            </option>
            <option value="Av. Francisco Matarazzo, 1350 - Torre 1 - 18° andar - Água Branca - São Paulo - SP, 05001-100">
              São Paulo - Central Grupo Hope
            </option>
            <option value="Av. Francisco Matarazzo, 1350 - Torre 1 - 18° andar - Água Branca - São Paulo - SP, 05001-100">
              São Paulo - Central Grupo Hope / Linx
            </option>
            <option value="Av Magalhaes de Castro 1200 - Sala Comercial N L-12 - São Paulo - SP, 05676-120">
              São Paulo - Cidade Jardim
            </option>
            <option value="Av Higienopolis 698 - Loja 214 - São Paulo - SP, 01238-000">
              São Paulo - Hope Resort / Higienopolis
            </option>
            <option value="Av. das Nações Unidas, 4777 - Loja 282 - Alto de Pinheiros - São Paulo - SP, 05477-000">
              São Paulo - Hope Resort / Vila Lobos
            </option>
            <option value="Avenida Ibirapuera, 3102 - Loja 003 - São Paulo - SP, 04029-902">
              São Paulo - Ibirapuera
            </option>
            <option value="Av. Roque Petroni Júnior, 1089 - Loja 112 - São Paulo - SP, 04707-900">
              São Paulo - Morumbi
            </option>
            <option value="Rua Oscar Freire, 791 - São Paulo - SP, 01426-003">
              São Paulo - Oscar Freire
            </option>
            <option value="Rua Olimpíadas, 360 - Loja 117-A - São Paulo - SP, 04551-000">
              São Paulo - Vila Olímpia
            </option>
          </select>
          <div className={styles.underlineG}></div>
          <label htmlFor="address">Endereço</label>
        </div>
        <div className={styles.formDivButton}>
          <button type="submit" className={styles.formButton}>
            GERAR ASSINATURA
          </button>
        </div>
        <div className={styles.formHelp}>
          <button
            onClick={() => props.setIsStart(false)}
            className={styles.btnAjuda}
          >
            Ajuda
          </button>
          <a href="mailto:matheuslacerda375@gmail.com">Contato</a>
        </div>
      </form>
    </div>
  );
}

Form.propTypes = {
  form: PropTypes.object.isRequired,
  setForm: PropTypes.func.isRequired,
  setIsStart: PropTypes.func.isRequired,
  ticket: PropTypes.any,
};

export default Form;
