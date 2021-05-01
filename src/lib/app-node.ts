import { Node } from 'vis-network/standalone'
import { Project } from './index'

export interface AppNode {
    graphNode: Node
    children: AppNode[]
    parent?: AppNode
    projects: Project[]
}