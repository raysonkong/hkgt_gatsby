import { Link } from "gatsby"
import React from 'react';
import Layout from "../components/layout";

const RockschoolComment = () => {
    return (
        <Layout>
            <h2>RockSchool recommended Rayson's Performance  </h2>
            <h1>TWICE!</h1>

            <p>Screen Capture</p>
             <div>
                <img src="/images/rs_comment_1.jpg" alt="Rockschool Mention" width="1000"/>
            </div>
             <div>
                <img src="/images/rs_comment_2.jpg" alt="Rockschool Mention" width="1000"/>
            </div>
            <Link to="/">Home</Link> <br />
        </Layout>
    )
}

export default RockschoolComment;