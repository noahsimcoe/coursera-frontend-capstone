import React from 'react';
import { Link } from "react-router-dom";

// eslint-disable-next-line
export default function () {
  return (
    <div>
        <h2>Sorry</h2>
        <p>This page cannot be found</p>
        <Link to ="/home">Click to return to the <strong>Home Page</strong></Link>
    </div>
  )
}
