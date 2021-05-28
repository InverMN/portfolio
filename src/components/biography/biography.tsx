import React from 'react'

import { useState, useEffect } from 'react'

import { Chapter, Controls } from '.'
import { biographyWrapper, paper } from './styles/biography.module.css'


interface Props {
    chapters: string[]
}

export const Biography: React.FC<Props> = ({ chapters }) => {
    const [currentPage, setCurrentPage] = useState(0)

    const nextChapter = () => setCurrentPage(currentPage + 1)
    const previousChapter = () => setCurrentPage(currentPage - 1)

    const [isAtBeginning, setIsAtBeginning] = useState(currentPage === 0)
    const [isAtEnd, setIsAtEnd] = useState(currentPage === chapters.length - 1)

    useEffect(() => {
        setIsAtBeginning(currentPage === 0)
        setIsAtEnd(currentPage === chapters.length - 1)
    }, [currentPage])

    return (
        <div className={biographyWrapper}>
            <div className={paper}>
                <Chapter 
                    pageNumber={currentPage + 1}
                    content={chapters[currentPage]} 
                />
                <Controls
                    previousChapter={previousChapter}
                    nextChapter={nextChapter}
                    allowPrevious={!isAtBeginning}
                    allowNext={!isAtEnd}
                />
            </div>
        </div>
    )
}