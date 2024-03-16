import Main from "./assets/Components/Main";
import Contactus from "./assets/Components/Contact us";
import Blogreadmore from "./assets/Components/Blog read more";
import Aboutus from "./assets/Components/About us";
import Blog from "./assets/Components/Blog";
import Features from "./assets/Components/Features";
import Faq from "./assets/Components/FAQ";
import Readwork from "./assets/Components/Read work";
import Privacypolicy from "./assets/Components/Privacy policy";
import Pricing from "./assets/Components/Pricing";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./assets/Components/root/RootLayout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Main />}></Route>
      <Route path="/Pricing" element={<Pricing/>}></Route>
      <Route path="/Faq" element={<Faq/>}></Route>
      <Route path="/Privacypolicy" element={<Privacypolicy/>}></Route>
      <Route path="/Contactus" element={<Contactus/>}></Route>
      <Route path="/Blogreadmore" element={<Blogreadmore/>}></Route>
      <Route path="/Aboutus" element={<Aboutus/>}></Route>
      <Route path="/Blog" element={<Blog/>}></Route>
      <Route path="/Features" element={<Features/>}></Route>
      <Route path="/Read work" element={<Readwork/>}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;