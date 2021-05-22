import { Trait, Project, AppNode } from '../../lib'
import { Node, Edge } from 'vis-network/standalone'
import { processAppNodes } from './index'

export function generateAppData(traits: Trait[], projects: Project[]): [AppNode[], GraphData] {
    const { nodes, edges } = generateGraphData(traits)
    const appNodes = generateAppNodes(nodes, projects, edges)
    const processedNodes = processAppNodes(appNodes)
    return [appNodes, { nodes: processedNodes, edges }]
}



interface GraphData {
    nodes: Node[]
    edges: Edge[]
}

function generateGraphData(traits: Trait[]): GraphData {
    const nodes = generateGraphNodes(traits)
    const edges = generateGraphEdges(traits)

    handleNotChromium(nodes)

    return { nodes, edges }
}

function generateGraphNodes(traits: Trait[]): Node[] {
    return traits.map(it => {
        let node: Node = { id: it.name, label: it.name, image: it.logo.file.url, shape: "image" }
        injectMetadataToNode(node, it)
        return node
    })
}

function injectMetadataToNode(node: Node, trait: Trait) {
    // @ts-ignore
    node.metadata = {
        name: trait.name,
        logoUrl: trait.logo.file.url,
        description: trait?.desc?.desc ?? "No description",
    }
}

function generateGraphEdges(traits: Trait[]): Edge[] {
    return traits.map(it => ({ from: it.contentfulparent?.name, to: it.name, arrows: "none", physics: true, smooth: true, length: 200, width: 3, selectionWidth: 0 }))
}

function handleNotChromium(nodes: Node[]) {
    // @ts-ignore
    if(!globalThis.chrome)
        changeNodesImageFormatToPng(nodes)
}

function changeNodesImageFormatToPng(nodes: Node[]) {
    return nodes.forEach(it => it.image += "?fm=png&w=512&h=512")
}



function generateAppNodes(nodes: Node[], projects: Project[], edges: Edge[]): AppNode[] {
    const partialAppNodes = generatePartialAppNodes(nodes, projects)
    const partialAppNodesWithParents = appendNodesParents(partialAppNodes, edges)
    const appNodes = appendNodesChildren(partialAppNodesWithParents, edges)

    injectMetadataToAppNodes(appNodes)

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

function injectMetadataToAppNodes(appNodes: AppNode[]) {
    // @ts-ignore
    appNodes.forEach(it => it.metadata = it.graphNode.metadata)
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