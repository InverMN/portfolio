import React from 'react'
import { Field } from './index'
import { faAddressCard, faMask, faTerminal, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import { personalinfo } from './personal-info.module.css'

export const PersonalInfo: React.FC = ({ children }) => (
    <div className={personalinfo}>
        <Field icon={faAddressCard} iconColor="cyan">Paweł Jankowski</Field>
        <Field icon={faMask} iconColor="royalblue">Inver</Field>
        <Field icon={faTerminal} iconColor="#03AC00">Software Developer</Field>
        <Field icon={faHeart} iconColor="#F50000">17 Years Old</Field>
        <Field icon={faMapMarkerAlt} iconColor="#FF8C00">Europe, Poland</Field>
    </div>
)