import React from 'react'

import { chapter } from './styles/chapter.module.css'


interface Props {
    pageNumber: number
    content: string
}

export const Chapter: React.FC<Props> = ({ pageNumber, content }) => (
    <div className={chapter}>
        <h3>Chapter {pageNumber}</h3>
        <p>{content}</p>
    </div>
)