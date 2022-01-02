import { Container} from "react-bootstrap"
import Sidebar from "../components/Sidebar"

function Home() {
  return (
    <>
      <Container>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}></Box>
        </Box>
      </Container>
    </>
  )
}

export default Home
