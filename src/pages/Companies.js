import { Button } from "react-bootstrap"
import { useState } from "react"
import { useContext } from "react"
import { Table } from "react-bootstrap"
import EngineersContext from "../utils/EngineersContext"
// import AddIcon from "@mui/icons-material/Add"
import CompanyRow from "../components/CompanyRow"
import Sidebar from "../components/Sidebar"
import { Box } from "@mui/material"
function Companies() {
  const { companies } = useContext(EngineersContext)
  const [setShow] = useState(false)
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <h1 style={{ marginTop: 10 }}>Companies</h1>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {/* <Button
              style={{ marginRight: 40, marginBottom: 10 }}
              onClick={() => setShow(true)}
              variant="outline-primary"
            >
              <AddIcon /> Add Cast
            </Button> */}
          </div>
          <Table bordered hover style={{ tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th style={{ width: "12%" }}>#</th>
                <th style={{ width: "13%" }}> Name</th>
                <th style={{ width: "18%" }}>Photo</th>
                <th style={{ width: "18%" }}>projects</th>
                <th style={{ width: "25%" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {companies.map(company => (
                <CompanyRow key={company._id} company={company} />
              ))}
            </tbody>
          </Table>
          {/* <CompanyAddModa show={show} setShow={setShow} /> */}
        </Box>
      </Box>
    </>
  )
}

export default Companies
