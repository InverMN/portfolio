export interface Trait {
    name: string
    contentfulparent: Trait
    logo: { 
        file: {
            url: string
        }
    }
    desc: {
        desc: string
    }
}