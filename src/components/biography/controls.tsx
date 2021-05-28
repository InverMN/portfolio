import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

import { controls, button, disabled } from './styles/controls.module.css'

interface Props {
    previousChapter: () => void
    nextChapter: () => void
    allowPrevious: boolean
    allowNext: boolean
}

export const Controls: React.FC<Props> = ({ previousChapter, nextChapter, allowPrevious, allowNext }) => (
    <div className={controls}>
        <FontAwesomeIcon className={`${button} ${!allowPrevious && disabled}`} icon={faArrowLeft} onClick={allowPrevious && previousChapter}/>
        <FontAwesomeIcon className={`${button} ${!allowNext && disabled}`} icon={faArrowRight} onClick={allowNext && nextChapter}/>
    </div>
)