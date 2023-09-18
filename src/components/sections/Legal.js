import { Container } from "react-bootstrap";

const Legal = (props) => {
    const {legals} = props;
    return ( <div className="legals">
        <Container>
        <p dangerouslySetInnerHTML={{ __html: legals }} />

        </Container>
    </div> );
}
 
export default Legal;