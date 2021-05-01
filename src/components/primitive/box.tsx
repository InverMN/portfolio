import React from 'react'
import * as Style from './box.module.css'

interface Props {
    shape: "sharp" | "rounded" | "circle"
}

export const Box: React.FC<Props> = ({ children, shape }) => (
    <div className={`${Style.box} ${Style[shape]}`}>
        {children}
    </div>
)