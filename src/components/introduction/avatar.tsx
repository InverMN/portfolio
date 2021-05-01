import React from 'react'
import { avatar, content } from './avatar.module.css'

export const Avatar: React.FC = () => (
    <div className={avatar}>
        <div className={content}>
            <img src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" />
        </div>
    </div>
)