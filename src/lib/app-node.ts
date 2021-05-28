import { Node } from 'vis-network/standalone'

import { Project } from '.'


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