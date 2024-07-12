import React from "react";
import "../css/emailvf.css"
import { Link } from "react-router-dom";

const EmailVerification = () => {
    return (
        <div className="emailvf">
            <h1>Email Verification</h1>
            <p>An email has been sent to your email address. Please verify your email address to continue.</p>
            <Link to="/login">Login</Link>
        </div>
    );
}
export default EmailVerification;