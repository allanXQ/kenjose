import {Route, Routes} from "react-router-dom"
import './style.css'
import { BrowserRouter } from 'react-router-dom';
import Indexpage from "./components";
import About from "./components/about";
import Sculptures from "./components/sculptures";
import ImageImport from "./components/import_img";
import Admin from "./components/admin/admin";
import Contacts from "./components/contacts";
import AdminContacts from "./components/admin/contacts";
import AdminAbout from "./components/admin/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Indexpage/>}></Route>
        <Route path="/home" element={<Indexpage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route exact path="/sculptures" element={<Sculptures/>}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path="/admin/contacts" element={<AdminContacts/>}></Route>
        <Route path="/admin/about" element={<AdminAbout/>}></Route>


        {/* <Route path="*" element={<NotFound/>}></Route> */}

      </Routes>
      </BrowserRouter>
  );
}

export default App;
