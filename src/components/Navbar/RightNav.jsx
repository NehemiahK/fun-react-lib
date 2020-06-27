import React from "react";
import styled from 'styled-components';

const Ul = styled.ul`
    list-style:none;
    display:flex;
    flex-flow:row nowrap;
    
    li{
    padding:18px 10px;
    }
    
    @media (max-width:768px){
        flex-flow:column nowrap;
    }
`;

const RightNav = () => {
    return(
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Blog</li>
            </ul>
    )
};

export default RightNav;