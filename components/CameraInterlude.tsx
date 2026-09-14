'use client';
import Image from 'next/image';
import {useEffect,useRef,useState} from 'react';
import {motion,useScroll,useTransform,useMotionValueEvent,transform,cubicBezier,type MotionValue} from 'framer-motion';
import {ArrowUpRight,MoveDown} from 'lucide-react';
import {useMotionPreference} from '@/hooks/useMotionPreference';
import {cameraStory} from '@/data/siteData';
import {instagramWorlds} from '@/data/instagram';
const ease=cubicBezier(.42,0,.58,1);
function useMapped(p:MotionValue<number>,range:number[],values:number[]){return useTransform(p,transform(range,values,{ease}))}
const stills=[instagramWorlds[1].posts[0],instagramWorlds[2].posts[0],instagramWorlds[0].posts[0]];
export function CameraInterlude(){
 const ref=useRef<HTMLElement>(null);const reduced=useMotionPreference();const [phase,setPhase]=useState(0);const last=useRef(0);
 useEffect(()=>{const node=ref.current;if(!node)return;const root=document.documentElement;const observer=new IntersectionObserver(([entry])=>root.classList.toggle('camera-focus',entry.isIntersecting));observer.observe(node);return()=>{observer.disconnect();root.classList.remove('camera-focus')}},[]);
 const {scrollYProgress:p}=useScroll({target:ref,offset:['start start','end end']});
 useMotionValueEvent(p,'change',v=>{const next=v<.34?0:v<.7?1:2;if(next!==last.current){last.current=next;setPhase(next)}});
 const cameraScale=useMapped(p,[0,.38,.67,1],[.88,1.02,1.05,.8]);const cameraX=useMapped(p,[0,.4,.75,1],[45,0,0,90]);const cameraRotate=useMapped(p,[0,.4,.72,1],[-7,0,3,7]);const cameraOpacity=useMapped(p,[0,.63,.76,1],[1,1,.12,0]);
 const shutter=useMapped(p,[0,.36,.46,.56,.63,1],[0,0,1,1,0,0]);const sheetOpacity=useMapped(p,[.62,.76],[0,1]);const sheetY=useMapped(p,[.62,.8],[55,0]);const introOpacity=useMapped(p,[.58,.71],[1,0]);const storyOpacity=useMapped(p,[.69,.83],[0,1]);const sweepX=useMapped(p,[0,.58],[-60,95]);
 return <section id="camera" ref={ref} className={`camera-interlude ${reduced?'camera-static':''}`} aria-labelledby="camera-title" data-phase={reduced?2:phase}>
  <div className="camera-sticky"><div className="camera-topline"><span>THE ART OF LOOKING CLOSER</span><span>SS / BEHIND THE FRAME</span></div><div className="camera-aura"/>
   <motion.div className="camera-intro" style={reduced?undefined:{opacity:introOpacity}}><span className="camera-kicker">THE FEELING BEFORE THE FRAME</span><h2 id="camera-title">A considered eye.<br/><em>An unforgettable frame.</em></h2><p>{cameraStory.intro}</p></motion.div>
   <div className="camera-object-space"><motion.div className="camera-object" style={reduced?undefined:{x:cameraX,rotate:cameraRotate,scale:cameraScale,opacity:cameraOpacity}}><div className="camera-photograph"><Image src="/images/camera-editorial.png" alt="Photorealistic black Canon camera with textured grip and violet reflections in the lens" fill sizes="(max-width: 600px) 95vw, 55vw"/><motion.div className="camera-light-sweep" style={reduced?undefined:{x:sweepX}} aria-hidden="true"/></div></motion.div></div>
   <motion.div className="camera-shutter" style={{scaleY:reduced?0:shutter}} aria-hidden="true"><span>MAKE IT FEEL LIKE SOMETHING.</span></motion.div>
   <motion.div className="camera-developed-sheet" style={reduced?undefined:{opacity:sheetOpacity,y:sheetY}} aria-hidden={!reduced&&phase!==2}><span className="camera-sheet-label">THREE WORLDS / ONE CONSIDERED EYE</span><div>{stills.map((post,i)=><div className={`camera-developed-frame frame-${i}`} key={post.id}><Image src={post.image} alt={post.alt} fill sizes="(max-width: 600px) 28vw, 15vw"/><span>0{i+1} / {['GOOD TASTE','REAL FEELING','A CLEAR VOICE'][i]}</span></div>)}</div><em>Composed with instinct. Made with care.</em></motion.div>
   <motion.div className="camera-story" style={reduced?undefined:{opacity:storyOpacity}} aria-hidden={!reduced&&phase!==2}><span className="camera-kicker">DEVELOPED WITH CARE</span><h3>{cameraStory.title}<em>{cameraStory.emphasis}</em></h3><p>{cameraStory.description}</p><a href="#worlds" tabIndex={reduced||phase===2?0:-1}>{cameraStory.cta}<ArrowUpRight size={17}/></a></motion.div>
   <div className="camera-bottomline"><ol aria-label="Photography sequence">{cameraStory.steps.map((step,i)=><li key={step} aria-current={(reduced?2:phase)===i?'step':undefined}><span>0{i+1}</span>{step}</li>)}</ol><span className="camera-scroll-hint"><MoveDown size={13}/>{reduced?'THE STUDIO CONTACT SHEET':'SCROLL TO DEVELOP'}</span></div><motion.div className="camera-progress" style={{scaleX:reduced?1:p}} aria-hidden="true"/>
  </div>
 </section>
}
