import tracyBefore11 from '../../assets/ReducedFrameTime/TracyBefore1.1.png'
import tracyAfter11 from '../../assets/ReducedFrameTime/TracyAfter1.1.png'
import styles from './styles.module.css'
import Captions from "yet-another-react-lightbox/plugins/captions";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { useState } from 'react';

export const CaseStudy2 = () => {
    const [open, setOpen] = useState(false);
    const result = "CPU animation logic dropped from ~10ms to <1ms. Total frame time stabilized at 5–6ms, ensuring a locked 60 FPS with zero VSync-induced stutter.";
    const beforeImageDescription = "I have selected the frame where the frame time spiked to 33ms. You can see the BoneMatrixOnCPU zone takes 10ms";
    const AfterImageDescription = "You can see we have effectively the frame time of BoneMatrixOnCPU zone is about 300us";
    return (
        <div className={styles.caseStudy2Div}>
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
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center" , backgroundColor: "grey", margin: "1rem"}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{margin: "1rem"}}>
                        <p>Before</p>
                        <img src={tracyBefore11} alt="Tracy performance before 1.1" style={{height: "250px", cursor: "zoom-in"}} onClick={() => setOpen(true)} />
                    </div>
                    <div style={{margin: "1rem"}}>
                        <p>After</p>
                        <img src={tracyAfter11} alt="Tracy performance after 1.1" style={{height: "250px", cursor: "zoom-in"}} onClick={() => setOpen(true)} />
                    </div>
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                plugins={[Captions]}
                slides={[
                    {
                        src: tracyBefore11,
                        title: "Before",
                        description: beforeImageDescription,
                    },
                    {
                        src: tracyAfter11,
                        title: "After",
                        description: AfterImageDescription,
                    },
                ]}
            />
        </div>
    )
}