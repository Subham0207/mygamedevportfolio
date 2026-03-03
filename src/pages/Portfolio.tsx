import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { Section } from "../components/Section/Section"

interface Section{
    title: string,
    content: string
}

export const Portfolio = () =>{
    const summary = "Currently working on my game-engine as a side project build using open and C++. Below are some important milestones I have achived thus far."
    const sections: Section[] = [
        {
            title: "PBR pipeline using IBL",
            content: "Create irradiance, prefiter, and BRDF-LUT textures. Cook torrence BRDF for sepcular"
        },
        {
            title: "Point, Spot and Direction light. And Shadow maps for them",
            content: ""
        },
        {
            title: "Loading 3d model and animation",
            content: "I use assimp library to load model and animation files and then store it in a custom binary format using Boost serialization"
        },
        {
            title: "Material System",
            content: "Master material and material instances. You can upload textures and select shader files to create a reusable container called material"
        },
        {
            title: "AI pathfinding using navmesh",
            content: "I use a library to create navmesh. And then in a AI controller sample points on this navmesh based on where I want the AI controller character to go."
        },
        {
            title: "Physics system using JoltPhysics library",
            content: "You can select a mesh and choose b/w different primitive colliders."
        },
        {
            title: "Engine UI using Imgui",
            content: ""
        },
        {
            title: "Future improvements",
            content: "Multi-threading, Multiplayer, Combat system, Terrain system, Audio system."
        },
        {
            title: "Explored but could not implment yet",
            content: "Lua for scripting, Statemachine node graph UI."
        }
    ]
return (
    <>
        <Header></Header>
        <div>
            {summary}
        </div>
        <div>
        {
            sections.map((element, index) => (
                <Section 
                key={index} 
                name={element.title} 
                content={element.content} 
                />
            ))
        }
        </div>
        <Footer></Footer>
    </>
)
}