export const CaseStudy = () => {
    return (
        <div>
            <h2>Case Study: High-Performance Asset Serialization</h2>
            <div>
                <b>Objective: </b>
                Replace slow, runtime-intensive model parsing with a proprietary binary format for instant engine ingestion.
            </div>
            <div>
                <b>The solution: </b>
                <ul>
                    <li>
                        <b>Initial Loading:</b>
                        <div>
                            Read FBX file using Assimp and parse the scene object to read vertex data recursively.
                            Separate out embedded textures if found any. Create one master material and material instances for each mesh found in the model.
                        </div>
                    </li>
                    <li>
                        <b>The Serializer: </b>
                        <div>
                            The loaded Model object is serialized into binary format using Boost.Serialization. The materials are serialized into a JSON format.
                            The assumption here is that mesh data for model file will not change so its fine to serialize in binary but material can change so using JSON here so it can be version controlled.
                        </div>
                    </li>
                    <li>
                        <b>The Loader: </b>
                        <div>
                            A streamlined loader that maps the binary data and material data directly into GPU-ready buffers, bypassing the need for Assimp in the shipping build.
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}