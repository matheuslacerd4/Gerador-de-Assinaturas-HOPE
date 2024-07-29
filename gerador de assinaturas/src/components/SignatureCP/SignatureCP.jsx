import PropTypes from "prop-types";

function SingnatureCP(props) {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        width: "100%",
        margin: "0",
        display: "flex",
        justifyContent: "center",
        marginTop: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "40px 60px",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
          border: "dotted rgba(0, 0, 0, 0.1)",
          borderWidth: "1px 0",
        }}
      >
        <div
          style={{
            textAlign: "left",
            backgroundColor: "#fff",
            padding: "20px",
            margin: "auto",
            display: "inline-block",
            verticalAlign: "middle",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          }}
          ref={props.ticket}
        >
          <table>
            <tbody>
              <tr>
                <td>
                  <strong
                    style={{
                      color: "rgb(60, 61, 63)",
                      fontSize: "18px",
                      fontFamily: "arial",
                      fontWeight: "900",
                      textTransform: "uppercase",
                    }}
                  >
                    {props.form.name || "NOME COMPLETO"}
                  </strong>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "5px" }}>
                  <span
                    style={{
                      color: "rgb(60, 61, 63)",
                      fontSize: "16px",
                      fontFamily: "arial",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    {props.form.cargo || "Cargo"}
                  </span>
                  <span> | </span>
                  <span
                    style={{
                      color: "rgb(60, 61, 63)",
                      fontSize: "16px",
                      fontFamily: "arial",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    {props.form.area || "Área"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <img
                      src="https://gerador-de-assinaturas-hope.web.app/grupohope/phone.png"
                      alt=""
                      style={{
                        verticalAlign: "middle",
                        marginRight: "5px",
                        width: "16px",
                      }}
                    />
                    <font>
                      <a
                        href="/"
                        style={{
                          paddingRight: "7px",
                          textDecoration: "none",
                          color: "rgb(133, 132, 135)",
                          fontSize: "13px",
                          fontWeight: "700",
                          verticalAlign: "middle",
                          fontFamily: "arial",
                        }}
                      >
                        {props.form.phone || "(11) 2169-2200"}
                      </a>
                    </font>
                  </span>
                  {props.form.ramal ? (
                    <span>
                      <font>
                        <a
                          href="/"
                          style={{
                            paddingRight: "7px",
                            textDecoration: "none",
                            color: "rgb(133, 132, 135)",
                            fontSize: "13px",
                            fontWeight: "700",
                            verticalAlign: "middle",
                            fontFamily: "arial",
                          }}
                        >
                          R:{props.form.ramal}
                        </a>
                      </font>
                    </span>
                  ) : null}
                  <span>
                    <img
                      src="https://gerador-de-assinaturas-hope.web.app/grupohope/email.png"
                      alt=""
                      style={{
                        verticalAlign: "middle",
                        marginRight: "5px",
                        width: "16px",
                      }}
                    />
                    <font>
                      <a
                        href="/"
                        style={{
                          paddingRight: "7px",
                          textDecoration: "none",
                          color: "rgb(133, 132, 135)",
                          fontSize: "13px",
                          fontWeight: "700",
                          verticalAlign: "middle",
                          fontFamily: "arial",
                        }}
                      >
                        {props.form.email || "seuemail@grupohope.com.br"}
                      </a>
                    </font>
                  </span>
                  {props.form.skype ? (
                    <span>
                      <font>
                        <img
                          src="https://gerador-de-assinaturas-hope.web.app/grupohope/skype.png"
                          alt=""
                          style={{
                            verticalAlign: "middle",
                            marginRight: "5px",
                            width: "16px",
                          }}
                        />
                        <a
                          href="/"
                          style={{
                            paddingRight: "7px",
                            textDecoration: "none",
                            color: "rgb(133, 132, 135)",
                            fontSize: "13px",
                            fontWeight: "700",
                            verticalAlign: "middle",
                            fontFamily: "arial",
                          }}
                        >
                          {props.form.skype}
                        </a>
                      </font>
                    </span>
                  ) : null}
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "6px" }}>
                  <font
                    style={{
                      color: "rgb(133, 132, 135)",
                      fontSize: "13px",
                      fontFamily: "arial",
                      fontWeight: "600",
                    }}
                  >
                    {props.form.address ||
                      "Av. Francisco Matarazzo, 1350 - Torre 1 - 18° andar - Água Branca - São Paulo - SP, 05001-100"}
                  </font>
                </td>
              </tr>
              <tr>
                <td>
                  <table style={{ backgroundColor: "#000", border: "#000" }}>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            paddingLeft: "22px",
                            paddingRight: "15px",
                            paddingTop: "0px",
                          }}
                        >
                          <img
                            src="https://gerador-de-assinaturas-hope.web.app/grupohope/esperanca.png"
                            alt=""
                            style={{ verticalAlign: "middle", width: "100px" }}
                          />
                        </td>
                        <td
                          style={{
                            paddingLeft: "22px",
                            paddingRight: "25px",
                            paddingTop: "19px",
                          }}
                        >
                          <img
                            src="https://gerador-de-assinaturas-hope.web.app/grupohope/grupo-hope-logo.png"
                            alt=""
                            style={{ verticalAlign: "middle", width: "115px" }}
                          />
                        </td>
                        <td
                          style={{ borderLeft: "1px rgb(162, 164, 169) solid" }}
                        ></td>
                        <td style={{ paddingLeft: "20px" }}>
                          <img
                            src="https://gerador-de-assinaturas-hope.web.app/grupohope/bonjour-logo.png"
                            alt=""
                            style={{ verticalAlign: "middle", width: "59px" }}
                          />
                        </td>
                        <td style={{ paddingLeft: "20px" }}>
                          <img
                            src="https://gerador-de-assinaturas-hope.web.app/grupohope/hope-logo.png"
                            alt=""
                            style={{ verticalAlign: "middle", width: "59px" }}
                          />
                        </td>
                        <td
                          style={{ paddingLeft: "20px", paddingRight: "22px" }}
                        >
                          <img
                            src="https://gerador-de-assinaturas-hope.web.app/grupohope/hope-resort-logo.png"
                            alt=""
                            style={{ verticalAlign: "middle", width: "104px" }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div></div>
    </div>
  );
}

SingnatureCP.propTypes = {
  form: PropTypes.shape({
    name: PropTypes.string,
    cargo: PropTypes.string,
    area: PropTypes.string,
    ramal: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    skype: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  ticket: PropTypes.any,
};

export default SingnatureCP;
