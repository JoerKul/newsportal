import React from "react";
import { Link } from "react-router-dom";
export default function Blog() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h2>Blog</h2>
    </div>
  );
}
