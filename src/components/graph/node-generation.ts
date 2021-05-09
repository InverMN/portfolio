import { Trait, Project, AppNode } from '../../lib'
import { Node, Edge } from 'vis-network/standalone'
import { processAppNodes } from './index'

export function generateAppData(traits: Trait[], projects: Project[]): GraphData {
    const { nodes, edges } = generateGraphData(traits)
    const appNodes = generateAppNodes(nodes, projects, edges)
    const processedNodes = processAppNodes(appNodes)
    return { nodes: processedNodes, edges }
}



interface GraphData {
    nodes: Node[]
    edges: Edge[]
}

function generateGraphData(traits: Trait[]): GraphData {
    const nodes = generateGraphNodes(traits)
    const edges = generateGraphEdges(traits)

    return { nodes, edges }
}

function generateGraphNodes(traits: Trait[]): Node[] {
    return traits.map(it => ({ id: it.name, label: it.name, title: "Click for more info", image: it.logo.file.url, shape: "image" }))
}

function generateGraphEdges(traits: Trait[]): Edge[] {
    return traits.map(it => ({ from: it.contentfulparent?.name, to: it.name, arrows: "none", physics: true, smooth: true, length: 200, width: 3, selectionWidth: 0 }))
}



function generateAppNodes(nodes: Node[], projects: Project[], edges: Edge[]): AppNode[] {
    const partialAppNodes = generatePartialAppNodes(nodes, projects)
    const partialAppNodesWithParents = appendNodesParents(partialAppNodes, edges)
    const appNodes = appendNodesChildren(partialAppNodesWithParents, edges)

    return appNodes
}

type BindinglessAppNode = Pick<AppNode, 'graphNode' | 'projects'>
type ChildlessAppNode = Pick<AppNode, 'graphNode' | 'projects' | 'parent'>

function generatePartialAppNodes(nodes: Node[], projects: Project[]): BindinglessAppNode[] {
    return nodes.map(node => ({
        graphNode: node,
        projects: findNodeProjects(node, projects),
    }))
}

function findNodeProjects(node: Node, allProjects: Project[]): Project[] {
    return allProjects.filter(project => project.technologies.findIndex(technology => technology.name === node.id) != -1)
}


function appendNodesParents(partialAppNodes: BindinglessAppNode[], edges: Edge[]): ChildlessAppNode[] {
    return partialAppNodes.map(partialAppNode  => {
        (partialAppNode as ChildlessAppNode).parent = findAppNodeParent(partialAppNode, edges, partialAppNodes)
        return partialAppNode as ChildlessAppNode
    })
}

function findAppNodeParent(node: BindinglessAppNode, edges: Edge[], appNodes: BindinglessAppNode[]): AppNode | undefined {
    let searchedNode: AppNode = undefined
    edges.forEach(edge => {
        if(edge.to === node.graphNode.id)
            if(edge.from !== undefined) 
                searchedNode = findAppNodeById(edge.from.toString(), appNodes)
    })
    return searchedNode
}


function appendNodesChildren(partialAppNodes: ChildlessAppNode[], edges: Edge[]): AppNode[] {
    return partialAppNodes.map(partialAppNode => {
        (partialAppNode as AppNode).children = findAppNodeChildren(partialAppNode, edges, partialAppNodes)
        return partialAppNode as AppNode
    })
}

function findAppNodeChildren(appNode: BindinglessAppNode, edges: Edge[], appNodes: BindinglessAppNode[]): AppNode[] {
    let searchedChildrenNodes: AppNode[] = []
    edges.forEach(edge => {
        if(edge.from === appNode.graphNode.id)
            if(edge.to !== undefined)
                searchedChildrenNodes.push(findAppNodeById(edge.to.toString(), appNodes))
    })
    return searchedChildrenNodes
}

function findAppNodeById(id: string, appNodes: BindinglessAppNode[]): AppNode | undefined {
    return appNodes.find(node => node.graphNode.id === id) as AppNode
}