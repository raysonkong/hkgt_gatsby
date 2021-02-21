import { Link } from "gatsby"
import React from 'react';
import Layout from "../components/layout";

const studentDemo = () => {
    return (
        <Layout>
            <h1>Grade 8 學生示範</h1>
            <div>
                <h2>Rockschool Grade 8 Meet Darth Ear by Greg</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/POnAC7H9H00" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            

            <Link to="/">Home</Link> <br />
        </Layout>
    )
}

export default studentDemo;