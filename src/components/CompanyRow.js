import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import CompanyDeleteModal from "./CompanyDeleteModel"
import CompanyViewModal from "./CompanyViewModel"
import EngineersContext from "../utils/EngineersContext"
function CompanyRow(props) {
  const { company } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const { verifiedcompany } = useContext(EngineersContext)

  return (
    <>
      <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{company._id}</td>
        <td>{company.name}</td>
        <td>
          <img src={company.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
        </td>
        <td>
          {company.project.map(project => (
            <p>{project.title}</p>
          ))}
        </td>
        <td>
          <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
            View
          </Button>
          <Button variant="danger" className="me-2" onClick={() => setDeleteShow(true)}>
            Delete
          </Button>
          {!company.verified ? (
            <Button variant="success" onClick={() => verifiedcompany(company._id)}>
              Verify
            </Button>
          ) : (
            <Button variant="secondary">verified</Button>
          )}
        </td>
        <CompanyViewModal show={viewShow} setShow={setViewShow} company={company} />
        <CompanyDeleteModal show={deleteShow} setShow={setDeleteShow} companyId={company._id} />
      </tr>
    </>
  )
}

export default CompanyRow
