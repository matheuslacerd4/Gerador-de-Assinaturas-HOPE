import styles from "./styles.module.css";
import PropTypes from "prop-types";

function Background(props) {
  return <div className={styles.background}>{props.children}</div>;
}

Background.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Background;
