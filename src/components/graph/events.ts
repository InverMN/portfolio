import React from 'react'
import { AppNode } from "../../lib"

export const events = (appNodes: AppNode[], selectAppNode: React.Dispatch<React.SetStateAction<AppNode | undefined>>) => ({
    click: event => {
        if(event.nodes[0]) {
            const selectedNode = appNodes.find(it => it.graphNode.id == event.nodes[0])
            selectAppNode(selectedNode)
        }
    },
    // hoverNode: () => {
    //     document.body.style.cursor = 'pointer'
    // },
    // blurNode: () => {
    //     document.body.style.cursor = 'default'
    // },
})