import styles from './styles.module.css'

export const TechHighLight = () => {
    return (
        <div className={styles.techHighLight}>
            <h2>Technical Highlight</h2>
            <ul>
                <li>
                    <b>
                        Memory management:
                    </b>
                    <div>
                        Utilized std::unique_ptr for strict ownership of mesh data and std::shared_ptr for shared Material Instances to ensure zero memory leaks during scene transitions.
                    </div>
                </li>
                <li>
                    <b>
                        Build System:
                    </b>
                    <div>
                        Architected the project using CMake and modular linking of dependencies like JoltPhysics, GLFW, Boost, Assimp.
                    </div>
                </li>
                <li>
                    <b>
                        Graphics Debugging:
                    </b>
                    <div>
                        Integrated RenderDoc and Tracy Profiler into the development workflow to validate vertex buffer layouts and debug the PBR lighting equation’s specular reflections at the fragment level.
                    </div>
                </li>
            </ul>
        </div>
    )
}