import { useState } from "react"
import { Button } from "react-bootstrap"
import UserDeleteModal from "./UserDeleteModel"
import UserViewModal from "./UserViewModal"

function UserRow(props) {
  const { user } = props
  console.log(user)
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user._id}</td>
      <td>
        {user.firstName} {user.lastName}
      </td>
      <td>{user.email}</td>
      <td>
        <img src={user.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      {/* <td>{user.role}</td> */}
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        {localStorage.tokenDashboardEngineer ? (
          <Button variant="danger" onClick={() => setDeleteShow(true)}>
            Delete
          </Button>
        ) : null}
      </td>
      <UserViewModal show={viewShow} setShow={setViewShow} user={user} />
      <UserDeleteModal show={deleteShow} setShow={setDeleteShow} userId={user._id} />
    </tr>
  )
}

export default UserRow
