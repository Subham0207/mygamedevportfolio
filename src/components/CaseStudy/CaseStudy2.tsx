import tracyBefore10 from '../../assets/ReducedFrameTime/TracyBefore1.0.png'
import tracyBefore11 from '../../assets/ReducedFrameTime/TracyBefore1.1.png'
import tracyAfter10 from '../../assets/ReducedFrameTime/TracyAfter1.0.png'
import tracyAfter11 from '../../assets/ReducedFrameTime/TracyAfter1.1.png'

export const CaseStudy2 = () => {

    const result = "CPU animation logic dropped from ~10ms to <1ms. Total frame time stabilized at 5–6ms, ensuring a locked 60 FPS with zero VSync-induced stutter.";
    return (
        <div>
            <h2>Case Study: Resolving Frame Spikes in the Animation Pipeline</h2>
            <div>
                By instrumenting the engine with Tracy, I identified a massive CPU stall during the animation update phase.
            <div>
                <b>The Root Cause:</b> Vertex transformation (skinning) was being calculated on the CPU for every frame.
            </div>
            <div>
                <b>The VSync Trap:</b>  Because the total frame work (Animation + Rendering) occasionally hit ~16.1ms, the engine missed the VSync deadline. This forced the GPU to wait for the next refresh cycle, effectively doubling the perceived frame time to 33.3ms.                               
            </div>
            </div>
            <div>
                The fix was to remove the CPU side skinning logic.
            </div>
            <div>
                <b>The Result: </b>
                {result}
            </div>
            <div>
                <i>
                    "This taught me the critical importance of Data Locality and the 'Cost of Synchronization.' Even a 0.5ms overrun can cost you 16.6ms of actual latency if your engine isn't carefully tuned for the display's refresh rate."
                </i>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{margin: "1rem"}}>
                        <p>Before</p>
                        <img src={tracyBefore10} alt="Tracy performance before 1.0" height={"300"} />
                    </div>
                    <div style={{margin: "1rem"}}>
                        <p>After</p>
                        <img src={tracyAfter10} alt="Tracy performance after 1.0" height={"300"}/>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{margin: "1rem"}}>
                        <p>Before</p>
                        <img src={tracyBefore11} alt="Tracy performance before 1.1" height={"300"}/>
                    </div>
                    <div style={{margin: "1rem"}}>
                        <p>After</p>
                        <img src={tracyAfter11} alt="Tracy performance after 1.1" height={"300"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}