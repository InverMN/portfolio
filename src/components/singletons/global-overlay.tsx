import React from 'react'
import { globaloverlay, hidden } from './global-overlay.module.css'

export const GlobalOverlay: React.FC = () => (<div className={`${globaloverlay} ${hidden}`}/>)