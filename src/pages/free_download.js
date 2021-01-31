import { Link } from "gatsby"
import React from 'react';
import Layout from "../components/layout";

const freeDownload = () => {
    return (
        <Layout>
            <h1>Free Downloads </h1>
            <h2>Lots of free stuff</h2>

            <Link to="/">Home</Link> <br />
        </Layout>
    )
}

export default freeDownload;