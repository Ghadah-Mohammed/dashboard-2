import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import MovieCreationIcon from "@mui/icons-material/MovieCreation"
import AddReactionIcon from "@mui/icons-material/AddReaction"
import RecentActorsIcon from "@mui/icons-material/RecentActors"
import GroupIcon from "@mui/icons-material/Group"
import TheatersIcon from "@mui/icons-material/Theaters"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import GroupAddIcon from "@mui/icons-material/GroupAdd"
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
            <ListItemText primary="Company Engineer Dashboard" />
          </ListItem>
        </List>
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
        <Divider />
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
            <Link to="/logout">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="login" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          )}
        </List>
      </Drawer>
    </ThemeProvider>
  )
}
