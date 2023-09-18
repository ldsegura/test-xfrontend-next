import { Container } from "react-bootstrap";

const Main = (props) => {
    const {h1, discount, paragraphs} = props;
    return ( <div className="main-top">
        <Container>
        <div className="main-body">
            <h1 className="title text-uppercase">{h1}</h1>
            <div className="main-description">
                <div>{discount}</div>
                <div><p>{paragraphs}</p></div>
            </div>
        </div>

        </Container>
    </div> );
}
 
export default Main;