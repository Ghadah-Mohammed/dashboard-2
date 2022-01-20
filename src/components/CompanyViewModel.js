import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function CompanyViewModal(props) {
  const { show, setShow, company } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Company</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong> Name:</strong> {company.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>avatar:</strong>{" "}
            <img src={company.avatar} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
        </ListGroup>
        <ListGroup.Item>
          <strong>Projects:</strong>
          <ListGroup style={{ maxHeight: 150, overflowY: "scroll" }}>
            {company.project.map(project => (
              <ListGroup.Item>
                <Image src={project.photo[0]} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                <p>
                  <strong>Title</strong>
                  <p style={{ marginLeft: 10 }}>{project.title}</p>
                </p>
                <p>
                  <strong>description</strong>
                  <p style={{ marginLeft: 10 }}>{project.description}</p>
                </p>
                {/* <span style={{ marginLeft: 10 }}>{project.likes}</span>
                <span style={{ marginLeft: 10 }}>{project.comment}</span> */}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>

        <ListGroup.Item>
          <strong>Comments:</strong>
          <ListGroup>
            {company.comment?.map(comment => (
              <ListGroup.Item>
                <p style={{ marginLeft: 10 }}>{comment.comment}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CompanyViewModal
