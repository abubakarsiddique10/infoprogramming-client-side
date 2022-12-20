import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";
import Header from "./components/Header";
import AddBlog from "./pages/dashboard/AddBlog";
import ContentManagement from "./pages/dashboard/ContentManagement";
import Dashboard from "./pages/dashboard/Dashboard";
import UpdateBlog from "./pages/dashboard/UpdateBlog";
import Home from "./pages/home/Home";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogdetails/:id" element={<BlogDetails />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<ContentManagement />} />
            <Route path="addblog" element={<AddBlog />} />
            <Route path="updateblog/:id" element={<UpdateBlog />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;