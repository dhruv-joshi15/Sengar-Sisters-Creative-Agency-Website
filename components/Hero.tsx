'use client';
import Image from 'next/image';
import {useRef,useState} from 'react';
import {AnimatePresence,motion,useScroll,useTransform,transform,cubicBezier} from 'framer-motion';
import {ArrowDown,ArrowUpRight,MoveUpRight} from 'lucide-react';
import {instagramWorlds} from '@/data/instagram';
import {heroStory} from '@/data/siteData';
import {useMotionPreference} from '@/hooks/useMotionPreference';
import {ContactLink} from './ContactFlight';
import {ArrowLink} from './UI';
const ease=[.22,1,.36,1] as const;
export function Hero(){
 const ref=useRef<HTMLElement>(null);const reduced=useMotionPreference();const [selected,setSelected]=useState(1);const world=instagramWorlds[selected];
 const {scrollYProgress:p}=useScroll({target:ref,offset:['start start','end start']});const y=useTransform(p,transform([0,1],[0,75],{ease:cubicBezier(.22,1,.36,1)}));const wordY=useTransform(p,transform([0,1],[0,-35]));
 return <section id="home" ref={ref} className={`hero hero-editorial mood-${world.id}`}>
  <motion.div className="hero-ghost-brand" style={reduced?undefined:{y:wordY}} aria-hidden="true"><span>SENGAR</span><span>SISTERS</span></motion.div><div className="hero-editorial-glow" aria-hidden="true"/><div className="hero-editorial-grid" aria-hidden="true"/>
  <div className="hero-editorial-inner container">
   <motion.div className="hero-copy" initial={reduced?false:{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:reduced?0:.9,ease}}>
    <div className="eyebrow"><span className="little-dot"/>{heroStory.eyebrow}</div>
    <h1 aria-label="We make feeling visible."><span className="headline-mask"><motion.span initial={reduced?false:{y:'105%'}} animate={{y:0}} transition={{duration:reduced?0:1,ease}}>We make</motion.span></span><span className="headline-mask editorial-feeling"><motion.em initial={reduced?false:{y:'110%'}} animate={{y:0}} transition={{duration:reduced?0:1.1,delay:reduced?0:.12,ease}}>feeling<span aria-hidden="true">✧</span></motion.em></span><span className="headline-mask editorial-visible"><motion.span initial={reduced?false:{y:'105%'}} animate={{y:0}} transition={{duration:reduced?0:1,delay:reduced?0:.24,ease}}>visible.</motion.span></span></h1>
    <p>{heroStory.description}</p><div className="hero-buttons"><ArrowLink href="#worlds" solid>Enter our worlds</ArrowLink><ContactLink channel="whatsapp" className="button">Let’s create together<ArrowUpRight size={18}/></ContactLink></div>
    <div className="hero-editorial-signature"><span>ADITI & APOORVA</span><em>Different eyes. Shared imagination.</em></div>
   </motion.div>
   <motion.div className="hero-composition hero-editorial-composition" style={reduced?undefined:{y}}>
    <div className="hero-composition-orbit" aria-hidden="true"/><div className="hero-scene-caption"><span>THE SENGAR SISTERS POINT OF VIEW</span><span>01 / FIRST IMPRESSIONS</span></div>
    <AnimatePresence mode="wait" initial={false}><motion.div key={world.id} className="hero-real-frames" initial={reduced?false:{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:reduced?0:.35,ease}}>
     <a className="hero-primary-frame" href="#worlds" aria-label={`Explore ${world.name}`}><Image src={world.posts[0].image} alt={world.posts[0].alt} fill sizes="(max-width: 600px) 64vw, (max-width: 900px) 45vw, 36vw" priority/><span className="hero-frame-eyebrow">REAL STORIES / REAL CREATIVE ENERGY</span><div><span>{world.id==='food'?'A little good taste.':world.id==='weddings'?'A little forever.':'A little different.'}</span><MoveUpRight size={24}/></div></a>
     <a className="hero-detail-frame" href="#worlds" aria-label={`Discover ${world.posts[2].title}`}><Image src={world.posts[2].image} alt={world.posts[2].alt} fill sizes="(max-width: 600px) 29vw, 15vw"/><span>THE LITTLE DETAILS</span></a>
     <a className="hero-secondary-frame" href="#worlds" aria-label={`Discover ${world.posts[1].title}`}><Image src={world.posts[1].image} alt={world.posts[1].alt} fill sizes="(max-width: 600px) 28vw, 14vw"/><span>{world.id==='food'?'the atmosphere.':world.id==='weddings'?'the in-between.':'the story.'}</span></a>
    </motion.div></AnimatePresence>
    <div className="hero-editorial-seal" aria-hidden="true"><span>TWO SISTERS</span><strong>one<br/><em>instinct.</em></strong><span>ENDLESS POSSIBILITIES</span></div>
    <div className="hero-lens-controls" role="group" aria-label="Choose a first impression">{instagramWorlds.map((channel,i)=><button key={channel.id} aria-pressed={selected===i} onClick={()=>setSelected(i)}><span>0{i+1}</span>{channel.id==='studio'?'Brands':channel.id==='food'?'Food':'Weddings'}<i/></button>)}</div>
   </motion.div>
  </div>
  <div className="hero-bottom container"><a href="#worlds"><ArrowDown size={15}/> THE NEXT CHAPTER / OUR LIVING PORTFOLIO</a><span>STRATEGY · STORIES · SOUL</span></div>
 </section>
}
