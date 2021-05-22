export interface Project {
    name: string
    description: { description: string } 
    creationDate: string
    openSource: boolean
    repositoryUrl?: string
    previewUrl?: string
    technologies: { name: string }[]
}