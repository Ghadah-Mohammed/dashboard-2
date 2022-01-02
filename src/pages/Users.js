import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import EngineersContext from "../utils/EngineersContext"
import Sidebar from "../components/Sidebar"
import AddIcon from "@mui/icons-material/Add"
import UserRow from "../components/UserRow"
// import AdminAddModal from "../components/AdminAddModal"
import { Box } from "@mui/material"

function Users() {
  const { users } = useContext(EngineersContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <h1 style={{ marginTop: 10 }}>Users</h1>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {/* <Button
              style={{ marginRight: 40, marginBottom: 10 }}
              onClick={() => setShow(true)}
              variant="outline-primary"
            >
              <AddIcon /> Add Admin
            </Button> */}
          </div>
          <Table bordered hover style={{ tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th style={{ width: "9%" }}>#</th>
                <th style={{ width: "18%" }}>Full Name</th>
                <th style={{ width: "18%" }}>Email</th>
                <th style={{ width: "18%" }}>Avatar</th>
                <th style={{ width: "18%" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <UserRow key={user._id} user={user} />
              ))}
            </tbody>
          </Table>
          {/* <AdminAddModal show={show} setShow={setShow} /> */}
        </Box>
      </Box>
    </>
  )
}

export default Users
