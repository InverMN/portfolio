import React from 'react'
import PageScroller from 'react-page-scroller'

export default () => (
    <PageScroller containerHeight="200px">
        <div style={{ background: 'red', height: "100%", display: "flex", overflow: "scroll" }}><h1>One asdadsad asd sa dsa das das d sada sd sadsa dsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa sadaaaaaaaaaaaaaas ddddddddddddddddddddddddddddda</h1></div>
        <div style={{ background: 'blue', display: "flex", height: "120vh"  }}><h1>Two</h1></div>
        <div style={{ background: 'green', height: "100%", display: "flex"  }}><h1>Three</h1></div>
    </PageScroller>
)