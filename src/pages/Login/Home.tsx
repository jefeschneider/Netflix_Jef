import React, { useEffect } from "react";
import axios from 'axios'
import { useFormik } from 'formik';
import { TextField, Button, Grid, Paper } from '@mui/material';
import LoginForm from "../../components/molecules/LoginForm";
import NetflixLogo from "../../components/atoms/NetflixLogo/Index";

function Home() {
  return (
    <>
      <div style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/c2578c37-8569-4f88-b8f1-67a26a9ddcdd/7f3635ab-93c1-42f0-b7cf-c1cba69c7c15/BR-pt-20220725-popsignuptwoweeks-perspective_alpha_website_large.jpg')`,
      }}>
        <div style={{
          background: 'linear-gradient(to top, #000000 10%, transparent 80%), linear-gradient(to bottom, #000000 10%, transparent 20%)',
        }}>
          <img className="netflix-logo-login" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"></img>
          <LoginForm></LoginForm>
        </div>
      </div>
    </>
  )
}

export default Home
