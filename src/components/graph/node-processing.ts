import { Node } from "vis-network/standalone";
import { AppNode } from "../../lib";

export function processAppNodes(nodes: AppNode[]): Node[] {
    return nodes.map(it => {
        it.graphNode.size = 50
        it.graphNode.size *= step(it, 1)
        return it.graphNode
    })
}

function step(appNode: AppNode, input: number): number {
    if(appNode.parent) 
        return step(appNode.parent, input * 0.75)
    else 
        return input
}