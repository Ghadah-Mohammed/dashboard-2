import { CssBaseline } from "@mui/material"
// import { Box } from "@mui/system"
import axios from "axios"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import EngineersContext from "./utils/EngineersContext"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "./App.css"
import Login from "./pages/Login"
import Companies from "./pages/Companies"
import Users from "./pages/Users"
function App() {
  const [companies, setCompanies] = useState([])
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  //get companies
  const getCompanies = async () => {
    const response = await axios.get("https://companies-api-1.herokuapp.com/api/admin/Companies")
    setCompanies(response.data)
    console.log(response.data)
  }

  //get users
  const getUsers = async () => {
    const response = await axios.get("https://companies-api-1.herokuapp.com/api/admin/Users", {
      headers: {
        Authorization: localStorage.tokenDashboardEngineer,
      },
    })
    setUsers(response.data)
  }

  useEffect(() => {
    getCompanies()
    getUsers()
  }, [])

  //delet user
  const deleteUser = async userId => {
    try {
      await axios.delete(`https://companies-api-1.herokuapp.com/api/auth/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardEngineer,
        },
      })
      toast.success("user deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  // verifiedcompany
  const verifiedcompany = async companyId => {
    try {
      await axios.get(`https://companies-api-1.herokuapp.com/api/company/${companyId}/verify`, {
        headers: {
          Authorization: localStorage.tokenDashboardEngineer,
        },
      })
      toast.success("verifiedcompany")
      getCompanies()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //delet company
  const deleteCompany = async companyId => {
    try {
      await axios.delete(`https://companies-api-1.herokuapp.com/api/company/${companyId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardEngineer,
        },
      })
      toast.success("company deleted")
      getCompanies()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //add Admin
  const addAdmin = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const adminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post(`https://companies-api-1.herokuapp.com/api/admin/add-admin`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboardEngineer,
        },
      })
      getUsers()
      toast.success("add admin success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //logout
  const logout = () => {
    localStorage.removeItem("tokenDashboardEngineer")
  }

  //login

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("https://companies-api-1.herokuapp.com/api/admin/login", adminBody)
      localStorage.tokenDashboardEngineer = response.data
      toast.success("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    companies,
    login,
    logout,
    users,
    deleteUser,
    deleteCompany,
    addAdmin,
    verifiedcompany,
  }
  return (
    <EngineersContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />

      <Routes>
        <Route path="/" element={localStorage.tokenDashboardEngineer ? <Companies /> : <Navigate to="/login" />} />
        <Route path="/users" element={localStorage.tokenDashboardEngineer ? <Users /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </EngineersContext.Provider>
  )
}

export default App
