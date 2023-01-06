import { Alert } from "react-bootstrap";

const Footer = (props) => {
    return (
        <div>
            <alert key="light" variant="light" style={{ padding:"5%" }}>
                {props.texto}
            </alert>
        </div>
    )
}

export default Footer;