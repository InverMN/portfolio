import React from 'react'
import { overlay, internal, browse, hidden } from './overlay.module.css'

interface Props {
    visibility: boolean
    hide: () => void
}

export const Overlay: React.FC<Props> = ({ visibility, hide }) => {
    return (
        <div className={`${overlay} ${visibility ? '' : hidden}`}>
            <div className={internal}>
                <h1>Skill Tree</h1>
                <p>You can look at my skill tree. You can move each direction, or zoom in and out. By clicking target orb u will get more info about it. Otherways u can swip down to go to next page</p>
                <div className={browse} onClick={hide}>Browse</div>
            </div>
        </div>
    )
}