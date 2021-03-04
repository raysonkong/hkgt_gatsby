import { Link } from "gatsby"
import React from 'react';
import Layout from "../components/layout";

const rayson_demo = () => {
    return (
        <Layout>
            <h1>Rayson's demo </h1>
            <div>
                <h2>Rockschool Grade 8 Meet Darth Ear</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/w7MpZ5X3HNo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div>
                <h2>RockSchool Grade 8 Mind The Gaps</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/umOM_zU2BMs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div>
                <h2>Tender Surrender - Steve Vai - Cover By Rayson Kong</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ySFA69-ktQU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div>
                <h2>Scarified - Racer X/Paul Gilbert - Cover By Rayson Kong</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7Xz6gtnDbUI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div>
                <h2>Korean Girl Funk - Cover by Rayson Kong</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mYk0g6b2_FU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
            </div>

            <div>
                <h2>Dm Solo</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8f2lQcj9FP4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
            </div>

            <Link to="/">Home</Link> <br />
        </Layout>
    )
}

export default rayson_demo;