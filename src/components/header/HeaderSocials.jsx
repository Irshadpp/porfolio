import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mohammed-irshad-2398b125b" target='_black'><BsLinkedin/></a>
        <a href="https://github.com/irshadpp" target='_black'><FaGithub/></a>
        <a href="https://instagram.com/irx.had?igshid=OGQ5ZDc2ODk2ZA==" target='_black'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials