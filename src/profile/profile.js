import React from 'react';
import PropTypes from 'prop-types';
import { findByLabelText } from '@testing-library/react';
const Profile = (props) => {
    const handleName = (e) => {
        let name = props.fullName
        alert(name);
    }
    return (
        <div style={{ margin: 50 }}>
            <h1 style={{ textTransform: 'uppercase' }}>{props.fullName}</h1>
            <em style={{ fontSize: 20 }}>{props.profession}</em>
            <div style={{ display: 'flex' }}>
                <p style={{ width: 500 }}>{props.bio}</p>
                {props.children}
            </div>

            <a href="#" onClick={handleName} style={{ background: '#000', color: '#fff', padding: "10px 20px", textDecoration: "none" }} >Click me</a>
        </div>
    );
}

Profile.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio : PropTypes.string,
};

Profile.defaultProps = {
    fullName: "Nahla Shiri",
    profession: "web developer",
    bio : "student go my code 2020 :)",
}
  

export default Profile;