import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UploadBlog from "./Pages/Dashboard/UploadBlog";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/User/Login";
import Register from "./Pages/User/Register";
import 'react-toastify/dist/ReactToastify.css';
import History from "./Pages/History/History";
import BlogList from "./Pages/Dashboard/BlogList";

function App() {
  return (<>
    <header>
      <Header></Header>
    </header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/history' element={<History />} />
      <Route path='/dashboard' element={<Dashboard />} >
        <Route path="/dashboard/upload-blog" element={<UploadBlog />} />
        <Route path="/dashboard/blog-list" element={<BlogList />} />
      </Route>
    </Routes>
  </>);
}

export default App;
