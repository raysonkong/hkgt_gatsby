import { Link } from "gatsby"
import React from 'react';
import Layout from "../components/layout";

const enquiry = () => {
    return (
        <Layout>
            <h1>About Page </h1>
            <p>Email</p>
            <p>hongkongguitartutor@gmail.com</p>

            <Link to="/">Home</Link> <br />
        </Layout>
    )
}

export default enquiry;