import React from 'react'
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function 
() {
  return (
    <div>
        <img src="virat.jpg"></img>
        <h3>VIRAT KOHLI</h3>
        <Button variant="contained" startIcon={<EmailIcon />} sx={{marginRight:"5%"}}>EMAIL</Button>
        <Button variant="contained" startIcon={<LinkedInIcon />}>LinkedIn</Button>
    </div>
  )
}
