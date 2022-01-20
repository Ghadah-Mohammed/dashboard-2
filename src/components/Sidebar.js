import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import GroupIcon from "@mui/icons-material/Group"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import { useContext } from "react"
import EngineersContext from "../utils/EngineersContext"
import { MdOutlineEngineering } from "react-icons/md"
import { RiBuildingLine } from "react-icons/ri"

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logout } = useContext(EngineersContext)
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "rgb(18, 18, 18)" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <MdOutlineEngineering style={{ fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText style={{marginTop:"20px"}} primary="Company Engineer Dashboard" />
          </ListItem>
        </List>
        <Divider />

        <List>
          <Link to="/">
            <ListItem button>
              <ListItemIcon>
                <RiBuildingLine style={{ fontSize: "30px" }} />
              </ListItemIcon>
              <ListItemText primary="companies" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          {/* <Link to="/genres">
            <ListItem button>
              <ListItemIcon>
                <AddReactionIcon />
              </ListItemIcon>
              <ListItemText primary="genres" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link> */}
          {/* <Link to="/casts">
            <ListItem button>
              <ListItemIcon>
                <RecentActorsIcon />
              </ListItemIcon>
              <ListItemText primary="casts" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link> */}
        </List>
        <List>
          <Link to="/users">
            <ListItem button>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="users" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: "auto" }}>
          {localStorage.tokenDashboardFilms ? (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="logout" sx={{ color: "white", textDecoration: "none" }} onClick={logout} />
              </ListItem>
            </Link>
          ) : (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="logout" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          )}
        </List>
      </Drawer>
    </ThemeProvider>
  )
}
