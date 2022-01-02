import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import EngineersContext from "../utils/EngineersContext"
function CompanyDeleteModal(props) {
  const { deleteCompany } = useContext(EngineersContext)
  const { show, setShow, companyId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete </Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this company ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteCompany(companyId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CompanyDeleteModal
