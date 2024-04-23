import Lottie from "lottie-react";
import animation from '../../assets/animation/loading-animation.json'

export default function LoadingAnimation(){
    return(
        <div className="d-flex justify-content-center my-5">
            <span style={{width : 200}}>
                <Lottie animationData= {animation}/>
            </span>
        </div>
    )
}