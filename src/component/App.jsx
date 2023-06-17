import LoginPage from './LoginPage'
import ForgotPassword from './ForgotPassword'
import ChangePassword from './ChangePassword';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import '../css/App.scss'

function App() {
  return (
    <>
      <BrowserRouter>
          <Outlet/>
          <Routes>
            <Route index element={<LoginPage/>} />
            <Route path="ForgotPassword" element={<ForgotPassword/>} />
            <Route path="ChangePassword" element={<ChangePassword/>} />
            <Route path="Dashboard" element={<Dashboard/>} />
            <Route path="*" element={<h1>ERROR 404 URL NOT FOUND</h1>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
