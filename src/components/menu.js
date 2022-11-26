import React from 'react';
import Link from 'gatsby-link';
import "./menu.css";

const Menu = () => {
    return(
        <div style={{
            background: '#f4f4f4',
            paddingTop: '10px'
        }}>

        <ul 
          style={{
          listStyleType: 'none',
          textDecoration: 'none',
          display: 'flex',
          justifyContent: 'space-evenly'
          }}
        >
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/apply'>報名</Link></li>
            <li><Link to='/student_demo'>Student Demo</Link></li>
            <li><Link to='/rayson_demo'>Rayson Demo</Link></li>
            <li><Link to='/rs_comment'>Rockschool Comment</Link></li>
            <li><Link to='/free_download'>Free Tab</Link></li>
            <li><Link to='/rockschool_tab'>Buy Tab</Link></li>
            <li><Link to='/enquiry'>Enquiry</Link></li>

        </ul>

        </div>
    )
}

export default Menu;