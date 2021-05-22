import { Node } from 'vis-network/standalone'
import { Project } from './index'

interface Metadata {
    name: string
    description: string
    logoUrl: string 
}

export interface AppNode {
    graphNode: Node
    children: AppNode[]
    parent?: AppNode
    projects: Project[]
    metadata: Metadata
}