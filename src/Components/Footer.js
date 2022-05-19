import React from 'react'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function 
() {
  return (
    <div class="footers">
         <TwitterIcon className="icons"/>
         <InstagramIcon className="icons"/>
         <GitHubIcon className="icons"/>
        <FacebookIcon className="icons"/>
    </div>
  )
}
