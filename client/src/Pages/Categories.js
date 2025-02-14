import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../../src/Hooks/useCategory";
import Layout from "../components/Layout/Layout";
import "../Styles/CategoriesStyles.css"
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container" >
        <div className="row container">
          {categories.map((c) => (
            <div className="col-md-6 mt-5 mb-3 gx-5 gy-5" key={c._id}>
              <div className="card">
                <Link to={`/category/${c.slug}`} className="btn cat-btn">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;