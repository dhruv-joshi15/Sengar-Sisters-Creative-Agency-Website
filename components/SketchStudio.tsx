'use client';
import {motion,useTransform,useSpring,type MotionValue} from 'framer-motion';
export function SketchStudio({progress,reduced}:{progress:MotionValue<number>;reduced:boolean}){
 const smooth=useSpring(progress,{stiffness:80,damping:26});
 const leftX=useTransform(smooth,[0,1],[0,-6]);const leftRotate=useTransform(smooth,[0,1],[0,-1.5]);
 const rightRotate=useTransform(smooth,[0,1],[0,2]);const rightY=useTransform(smooth,[0,1],[0,3]);
 return <div className="sketch-studio natural-studio" role="img" aria-label="Realistic contour illustration of two women creatives, one looking through a camera and one naturally bending to adjust a tripod">
  <span className="sketch-topline">THE ART OF WORKING TOGETHER</span>
  <div className="natural-studio-space" aria-hidden="true"><div className="natural-studio-orbit"/>
   <motion.div className="natural-figure natural-photographer" style={reduced?undefined:{x:leftX,rotate:leftRotate}}/>
   <motion.div className="natural-figure natural-director" style={reduced?undefined:{rotate:rightRotate,y:rightY}}/>
  </div><div className="sketch-caption"><em>Two minds. One beautiful frame.</em><span>AN ARTISTIC STUDIO IMPRESSION ↘</span></div>
 </div>
}
