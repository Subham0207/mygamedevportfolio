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
            title: "The Rendering Pipeline (PBR & IBL)",
            content: "Engineered a physically-based rendering (PBR) pipeline from scratch using C++ and OpenGL. Implemented Image-Based Lighting (IBL) by pre-calculating environment maps (Irradiance/Prefilter) and a BRDF-LUT. Utilized the Cook-Torrance specular BRDF to ensure energy conservation and visual fidelity across varying material roughness."
        },
        {
            title: "Point, Spot and Direction light. And Shadow maps for them",
            content: ""
        },
        {
            title: "Asset Pipeline (Assimp & Boost)",
            content: "Developed a custom asset conditioning pipeline. Integrated Assimp for initial mesh/animation ingestion, then serialized data into a proprietary binary format using Boost.Serialization. This reduced runtime load times by [X]% by eliminating redundant parsing and aligning data for direct GPU upload."
        },
        {
            title: "Architecture (Material System)",
            content: "Designed a data-driven Material System supporting Master Materials and Instances. Implemented a shader abstraction layer that allows for rapid iteration, enabling the decoupling of shader logic from texture assignments to minimize state changes and draw calls."
        },
        {
            title: "AI pathfinding using navmesh",
            content: "I use a library to create navmesh. And then in a AI controller sample points on this navmesh based on where I want the AI controller character to go."
        },
        {
            title: "Physics system using JoltPhysics library",
            content: "Integrated JoltPhysics to handle complex mesh-to-primitive collision detection and response."
        },
        {
            title: "Engine UI using Imgui",
            content: ""
        },
        {
            title: "Roadmap",
            content: "Multi-threading, Multiplayer, Combat system, Terrain system, Audio system."
        },
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