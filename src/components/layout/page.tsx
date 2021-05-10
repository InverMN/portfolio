import React from 'react'
import { page } from './page.module.css'

export const Page: React.FC = ({ children }) => (<div className={page}>{children}</div>)