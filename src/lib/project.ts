export interface Project {
    name: string
    description: { description: string } 
    creationDate: string
    public: boolean
    repository?: string
    previewUrl?: string
    technologies: { name: string }[]
}