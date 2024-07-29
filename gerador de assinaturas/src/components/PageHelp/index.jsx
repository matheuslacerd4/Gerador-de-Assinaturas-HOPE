import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css"; // Supondo que você tenha estilos CSS em um arquivo separado

const PageHelpItem = ({ title, content, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.item}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.imgSpan}>
          <img src={icon} alt={`${title} icon`} className={styles.icon} />
          <span className={styles.txtTitle}>{title}</span>
        </div>
        <button className={styles.btnArrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={styles.chevronDown}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className={styles.content}>
          {content.map((element, index) => {
            return <p key={index}>{element}</p>;
          })}
        </div>
      )}
    </div>
  );
};

const PageHelp = (props) => {
  const paragrafoOutlook = [
    "1 Abra uma nova mensagem. Na guia Mensagem, no grupo Incluir, clique em Assinatura e em Assinaturas.",

    "2. Comando Assinaturas na faixa de opções",

    "3. Na guia Assinatura de Email, clique em Novo.",

    "4. Digite um nome para a assinatura e clique em OK.",

    "5. Cole a assinatura na caixa de edição.",

    "6. Para concluir a criação da assinatura, clique em OK.",
  ];

  const paragrafoYahoo = [
    "1. Acesse o site do Yahoo! Mail.",

    "2. Clique no ícone Configurações.",

    "3. Clique em 'Configurações'.",

    "4. Clique em Contas.",

    "5. Selecione seu endereço de e-mail.",

    " 6. Marque a opção 'Incluir uma assinatura aos e-mails enviados'.",

    "7. Cole a assinatura",

    " 8. Clique em Salvar.",
  ];

  const paragrafoAplleEmail = [
    "Alterar a assinatura padrão: escolha Mail > Preferências, clique em Assinaturas, clique no menu local Escolher Assinatura e, em seguida, escolha Nenhuma ou uma assinatura diferente. Se você usar mais do que uma conta de e-mail no Mail, certifique-se de que a conta pretendida esteja selecionada na coluna esquerda.",
  ];

  return (
    <div className={styles.container}>
      <button
        onClick={() => props.setIsStart(true)}
        className={styles.btnVoltar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className={styles.arrowLeftShort}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
          />
        </svg>
      </button>
      <h2 className={styles.h2Title}>Como adicionar sua assinatura</h2>
      <PageHelpItem
        title="Apple Email"
        content={paragrafoAplleEmail}
        icon="https://gerador-de-assinaturas-hope.web.app/apple-mail.png"
      />
      <PageHelpItem
        title="Outlook"
        content={paragrafoOutlook}
        icon="https://gerador-de-assinaturas-hope.web.app/outlook.png"
      />
      <PageHelpItem
        title="Yahoo!"
        content={paragrafoYahoo}
        icon="https://gerador-de-assinaturas-hope.web.app/yahoo.png"
      />
    </div>
  );
};

PageHelp.propTypes = {
  setIsStart: PropTypes.func,
};

PageHelpItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
  icon: PropTypes.string,
};

export default PageHelp;
