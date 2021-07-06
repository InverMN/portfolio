import React from 'react'

import { avatar, content } from './styles/avatar.module.css'


export const Avatar: React.FC = () => (
    <div className={avatar}>
        <div className={content}>
            <img src="https://images.ctfassets.net/s0tmjwvqkpm2/3HYoqcEDeOl4QL1bMEStYq/9b13ed6eeb255ad7ca6a9c2a8e284366/avatar.png" />
        </div>
    </div>
)