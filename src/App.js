// import { NavLink, Route, Routes } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
// import AuthLayout from "./pages/auth/AuthLayout";
// import Login from "./pages/auth/Login";
// import BlogLayout from "./pages/blog";
// import Blog from "./pages/blog/Blog";
// import Blog404 from "./pages/blog/Blog404";
// import Categories from "./pages/blog/Categories";
// import Post from "./pages/blog/Post";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import HomeLayout from "./pages/HomeLayout";
// import Page404 from "./pages/Page404";
// import Profile from "./pages/Profile";

// function App() {
//   return (
//     <>    
//       <Routes>
//         <Route path="/" element={<HomeLayout />}>
//           <Route index={true} element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/blog" element={<BlogLayout />}>
//             <Route index={true} element={<Blog />} />
//             <Route path="categories" element={<Categories />} />
//             <Route path="post/:id/:url" element={<Post />} />
//             <Route path="*" element={<Blog404 />} />
//           </Route>
//         </Route>
//         <Route path="/auth" element={<AuthLayout />}>
//           <Route path="login" element={<Login />} />
//         </Route>
//         <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
//         <Route path="*" element={<Page404 />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import { generatePath, useRoutes } from "react-router-dom";
import routes from "./routes";
import { url } from "./utils";

function App() {
  console.log(
    url('home.blog.post', {
      id: 3,
      url: 'test-adana',
    })
  )

  console.log(
    url('home')
  )

  console.log(
    url('home.blog.categories')
  )

  // console.log(generatePath('post/:id/:url', {id: 2, url: 'test-url'}))

  return useRoutes(routes)
}

export default App;
