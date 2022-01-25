import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import EngineersContext from "../utils/EngineersContext"
import logo2 from "../assets/logo3.png"
import { FiLogIn } from "react-icons/fi"
function Login() {
  const { login } = useContext(EngineersContext)

  return (
    <>
      <div className="login">
        <img src={logo2} width="120" height="90" />
      </div>
      <div className="loginbody">
        <h2>Are you admin?</h2>
        <h3>Login Now</h3>
        <Form onSubmit={login} className="loginForm">
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Email
            </Form.Label>
            <br />
            {/* <Col md="6"> */}
            <Form.Control type="email" name="email" required />
            {/* </Col> */}
          </Form.Group>
          <Form.Group as={Row} className="mb-1">
            <Form.Label column md="3" width="10px">
              Password
            </Form.Label>
            {/* <Col md="6"> */}
            <Form.Control type="password" name="password" required />
            {/* </Col> */}
          </Form.Group>

          <Form.Group as={Row} className="my-3" className="loginicon">
            <Col md={{ span: 10, offset: 2 }}>
              <Button
                type="submit"
                className="loginAdmin"
                style={{ marginTop: "0px", backgroundColor: "rgba(14, 15, 26, 0.87)", border: "none" }}
              >
                Login
                <FiLogIn />
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default Login
