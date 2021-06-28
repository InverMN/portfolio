import React from 'react'

import { FunctionComponent } from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faRedditAlien, faGithub } from  '@fortawesome/free-brands-svg-icons'

import { Button } from '../common'

import { title } from './styles/common.module.css'
import { contact, buttons } from './styles/contact.module.css'


export const Contact: FunctionComponent = () => (
    <div className={contact}>
        <div className={title}>Contact</div>
        <div className={buttons}>
            <Button icon={faEnvelope} backgroundColor="#4285f4" linkUrl="mailto:jankowskipawelxd@gmail.com"/>
            <Button icon={faDiscord} backgroundColor="#4e66f1" linkUrl="https://discordapp.com/users/858770858734125077" />
            <Button icon={faRedditAlien} backgroundColor="#FF5700" linkUrl="https://www.reddit.com/user/InverMN" />
            <Button icon={faGithub} backgroundColor="#333" linkUrl="https://github.com/InverMN" />
        </div>
    </div>
)