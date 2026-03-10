import { CaseStudy } from "../components/CaseStudy/CaseStudy"
import { CaseStudy2 } from "../components/CaseStudy/CaseStudy2"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { Section } from "../components/Section/Section"
import { TechHighLight } from "../components/TechHighlight/TechHighLight"

interface Section{
    title: string,
    content: string
}

export const Portfolio = () =>{
    const summary = <p>Currently working on my Custom C++ 3D Game Engine & SDK built using openGL and C++. Below are some important milestones I have achived thus far. See here for my <a href="https://github.com/Subham0207/game-engine"><i>Game Engine Repo</i></a></p>
    const importantLinks = <div>
        <b>Links: </b>
        <ul>
            <li>
                <div>
                <a href="https://github.com/Subham0207/game-engine/releases/tag/v0.1.0-alpha">download Engine Releases from here. </a>
                This contains the executable of the game used in the below demo. And a release build of the engine itself paired with a game project.
                </div>
            </li>
        </ul>
    </div>
    const sections: Section[] = [
        {
            title: "The Rendering Pipeline (PBR & IBL)",
            content: "Engineered a physically-based rendering (PBR) pipeline from scratch using C++ and OpenGL. Implemented Image-Based Lighting (IBL) by pre-calculating environment maps (Irradiance/Prefilter) and a BRDF-LUT. Utilized the Cook-Torrance specular BRDF to ensure energy conservation and visual fidelity across varying material roughness. Integrated Point, Spot and Direction light with PCF Shadow maps for them"
        },
        {
            title: "Asset Pipeline (Assimp & Boost)",
            content: "Developed a custom asset conditioning pipeline. Integrated Assimp for initial mesh/animation ingestion, then serialized data into a proprietary binary format using Boost.Serialization. This reduced runtime load times by eliminating redundant parsing and aligning data for direct GPU upload."
        },
        {
            title: "Architecture (Material System)",
            content: "Designed a data-driven Material System supporting Master Materials and Instances. Implemented a shader abstraction layer that allows for rapid iteration, enabling the decoupling of shader logic from texture assignments to minimize state changes and draw calls."
        },
        {
            title: "AI pathfinding using navmesh",
            content: "I used Detour and Recast library for generating NavMesh and pathfinding. And then in a AI controller sample points on this navmesh based on where I want the AI controller character to go."
        },
        {
            title: "Physics system using JoltPhysics library",
            content: "Integrated JoltPhysics to handle complex mesh-to-primitive collision detection and response."
        },
        {
            title: "Project Manager",
            content: "Developed a C++ Project Manager that automates boilerplate generation and dependency linking, enabling a modular workflow where the Engine exists as a standalone shared library."
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
            {importantLinks}
        </div>
        <h2>Engine Tech demo</h2>
        <div className={""}>
            <iframe 
            width="800" 
            height="450"
            src="https://www.youtube.com/embed/2BAG6L_SdKo"
            title="Glitter Engine Demo"
            allowFullScreen
            >
            </iframe>
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
        <CaseStudy/>
        <CaseStudy2></CaseStudy2>
        <TechHighLight/>
        <Footer></Footer>
    </>
)
}