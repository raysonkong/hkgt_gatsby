import { Link } from "gatsby"
import React from 'react';
import Layout from "../components/layout";

const studentDemo = () => {
    return (
        <Layout>
            <h1>Student Demos </h1>
            

            <Link to="/">Home</Link> <br />
        </Layout>
    )
}

export default studentDemo;