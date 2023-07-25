import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header/Header';
import Dashboard from './pages/dashboard/Dashboard';
import Calender from './pages/calender/Calender';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Forgotpassword from './pages/forgotpassword/Forgotpassword';
import Passwordreset from './pages/passwordreset/Passwordreset';
import Footer from './components/footer.js/Footer';
import ProtectedRoute from "./Proctected";
import Provider from "./Provider";
import Emailsender from "./pages/email/Emailsender";
import Reviews from "./pages/reviews/Reviews";
import Createcontact from './pages/contact/create/Create';
import Profilecontact from './pages/contact/profile/Profile';
import Editcontact from './pages/contact/edit/Edit';
import Homecontact from './pages/contact/Home/Home';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forgotpassword" element={<Forgotpassword/>}/>
          <Route path="/resetpassword/:id/:token" element={<Passwordreset/>}/>
          <Route path="/emailsender" element={<ProtectedRoute><Emailsender/></ProtectedRoute>}/>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
          <Route path="/home" element={<ProtectedRoute><Homecontact/></ProtectedRoute>}/>
          <Route path="/edit/:id" element={<ProtectedRoute><Editcontact/></ProtectedRoute>}/>
          <Route path="/create" element={<ProtectedRoute><Createcontact/></ProtectedRoute>}/>
          <Route path="/profile/:id" element={<ProtectedRoute><Profilecontact/></ProtectedRoute>}/>
          <Route path="/calender" element={<ProtectedRoute><Calender/></ProtectedRoute>}/>
          <Route path="/reviews" element={<ProtectedRoute><Reviews/></ProtectedRoute>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
export default App;

