'use client';

import Image from 'next/image';
import {useRef,useState,type KeyboardEvent} from 'react';
import {AnimatePresence,motion,useScroll,useTransform,transform,cubicBezier} from 'framer-motion';
import {ArrowUpRight,Play,Heart,MessageCircle,Camera,Leaf,Sparkles,UtensilsCrossed} from 'lucide-react';
import {instagramWorlds,instagramChecked,defaultInstagramWorld,type InstagramPost,type InstagramWorld} from '@/data/instagram';
import {useMotionPreference} from '@/hooks/useMotionPreference';
import {ContactLink} from './ContactFlight';
import {Instagram} from './Instagram';
import {AnimatedHeading,Label,Reveal} from './UI';

const ease=cubicBezier(.22,1,.36,1);
const icons=[Camera,Leaf,Sparkles,UtensilsCrossed];

function BotanicalStage(){return <div className="world-botanical" aria-hidden="true"><svg viewBox="0 0 1200 850" fill="none" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="world-leaf-light" x1="100" y1="750" x2="1050" y2="70" gradientUnits="userSpaceOnUse"><stop stopColor="var(--world-accent)" stopOpacity=".3"/><stop offset="1" stopColor="var(--world-accent)" stopOpacity=".02"/></linearGradient></defs><path d="M-70 850C110 480 200 390 330 20M900 1000C780 640 1030 470 1310 60" stroke="var(--world-accent)" opacity=".18"/>{[0,1,2,3,4,5].map(i=><g key={i} transform={`translate(${80+i*28} ${720-i*105}) rotate(${-38+i*7})`}><path d="M0 0C-130-25-180-130-145-180C-30-155 25-80 0 0Z" fill="url(#world-leaf-light)" stroke="var(--world-accent)" strokeOpacity=".1"/><path d="M0 0L-145-180" stroke="var(--world-accent)" opacity=".12"/></g>)}{[0,1,2,3].map(i=><path key={i} d="M0 0C-120-15-170-90-145-145C-35-140 20-65 0 0Z" transform={`translate(${995+i*45} ${640-i*135}) rotate(${110+i*12})`} fill="url(#world-leaf-light)" stroke="var(--world-accent)" strokeOpacity=".08"/>)}<ellipse cx="650" cy="440" rx="340" ry="270" transform="rotate(-25 650 440)" stroke="var(--world-accent)" opacity=".13"/><ellipse cx="650" cy="440" rx="390" ry="305" transform="rotate(16 650 440)" stroke="var(--world-accent)" opacity=".07"/></svg></div>}

function PostCard({post,featured=false,index=0}:{post:InstagramPost;featured?:boolean;index?:number}){
 return <a href={post.url} target="_blank" rel="noopener noreferrer" className={`world-post ${featured?'world-post-featured':''}`} aria-label={`View ${post.title} on Instagram (opens in a new tab)`}>
  <div className="world-post-image"><Image src={post.image} alt={post.alt} fill quality={90} sizes={featured?'(max-width: 600px) 76vw, (max-width: 900px) 44vw, 34vw':'(max-width: 600px) 37vw, (max-width: 900px) 28vw, 24vw'}/><div className="world-post-shine"/><div className="world-post-top"><span>{featured?'THE FEATURED EDIT':`FRAME ${String(index+1).padStart(2,'0')}`}</span><Instagram size={15}/></div><span className="world-post-play">{post.kind==='reel'?<Play size={featured?22:15} fill="currentColor"/>:<Camera size={18}/>}</span><div className="world-post-caption"><span>{post.kind==='reel'?'WATCH THE ORIGINAL REEL':'EXPLORE THE ORIGINAL POST'}</span><h4>{post.title}</h4><ArrowUpRight size={19}/></div></div>
  <span className="world-post-credit">{post.credit}</span>
  {post.likes!==undefined&&<span className="world-post-engagement"><span><Heart size={13}/>{post.likes.toLocaleString('en-IN')} likes</span>{!!post.comments&&<span><MessageCircle size={13}/>{post.comments} comments</span>}</span>}
 </a>
}

function Reaction({world}:{world:InstagramWorld}){const post=world.posts.find(p=>p.id===world.reaction.postId)!;return <aside className="world-reaction"><div className="world-reaction-top"><span className="world-reaction-avatar">{world.reaction.handle.replace('@','').replace(/^_+/,'').slice(0,1).toUpperCase()}</span><div><strong>{world.reaction.handle}</strong><span>FROM THE PUBLIC COMMENTS</span></div><Heart size={15}/></div><blockquote>{world.reaction.quote}</blockquote><a href={post.url} target="_blank" rel="noopener noreferrer">On “{post.title}”<ArrowUpRight size={13}/><span className="sr-only"> (opens in a new tab)</span></a></aside>}

export function InstagramWorlds(){
 const [selected,setSelected]=useState(()=>instagramWorlds.findIndex(w=>w.id===defaultInstagramWorld));const tabs=useRef<(HTMLButtonElement|null)[]>([]);const ref=useRef<HTMLElement>(null);const reduced=useMotionPreference();
 const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});
 const backdropY=useTransform(scrollYProgress,transform([0,1],[-20,25],{ease}));const featureY=useTransform(scrollYProgress,transform([0,1],[18,-18],{ease}));
 const world=instagramWorlds[selected];
 const change=(index:number)=>{setSelected(index)};
 const key=(event:KeyboardEvent<HTMLButtonElement>,index:number)=>{let next=index;if(event.key==='ArrowRight')next=(index+1)%instagramWorlds.length;else if(event.key==='ArrowLeft')next=(index+instagramWorlds.length-1)%instagramWorlds.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=instagramWorlds.length-1;else return;event.preventDefault();change(next);tabs.current[next]?.focus()};
 return <section ref={ref} id="worlds" className="instagram-worlds container section" aria-labelledby="worlds-title">
  <Reveal><Label number="02">THE LIVING PORTFOLIO</Label><div className="worlds-heading"><div id="worlds-title"><AnimatedHeading>Four channels.<br/>One <em>creative eye.</em></AnimatedHeading></div><p>A brand’s voice. A table’s atmosphere. A wedding’s heartbeat.<br/>Different stories, the same instinct for a frame that makes you feel something.</p></div></Reveal>
  <div className="world-tabs" role="tablist" aria-label="Explore our Instagram worlds">{instagramWorlds.map((channel,i)=>{const Icon=icons[i];return <button key={channel.id} id={`world-tab-${channel.id}`} ref={el=>{tabs.current[i]=el}} role="tab" aria-selected={i===selected} aria-controls="world-panel" tabIndex={i===selected?0:-1} onKeyDown={e=>key(e,i)} onClick={()=>change(i)} className={`world-tab mood-${channel.id} world-tab-${channel.id}`}><span className="world-tab-index">0{i+1}</span><Icon size={19}/><span><strong>{channel.name}</strong><small>{channel.handle}</small></span><ArrowUpRight className="world-tab-arrow" size={16}/></button>})}</div>
  <div className={`world-stage mood-${world.id}`}>
   <motion.div className="world-botanical-layer" style={reduced?undefined:{y:backdropY}}><BotanicalStage/></motion.div><span className="world-stage-coordinate" aria-hidden="true">SS / CREATIVE FIELD NOTES / 0{selected+1}</span>
   <AnimatePresence mode="wait" initial={false}><motion.div key={world.id} role="tabpanel" id="world-panel" aria-labelledby={`world-tab-${world.id}`} tabIndex={0} className="world-panel" initial={reduced?false:{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:reduced?0:.3,ease:[.22,1,.36,1]}}>
    <div className="world-story"><span className="world-eyebrow">{world.eyebrow}</span><h3>{world.title}<br/><em>{world.emphasis}</em></h3><p>{world.description}</p><div className="world-services">{world.services.map(service=><span key={service}>{service}</span>)}</div><ContactLink channel="instagram" href={world.url} className="world-profile" aria-label={`Explore ${world.handle} on Instagram`}><Image src={world.avatar} alt="" width={42} height={42} quality={90}/><span><strong>{world.handle}</strong><small>STEP INTO THIS WORLD</small></span><ArrowUpRight size={18}/></ContactLink><p className="world-profile-note">{world.note}</p><span className="world-handnote" aria-hidden="true">A little more feeling. ✧</span></div>
    <motion.div className="world-feature" style={reduced?undefined:{y:featureY}}><PostCard post={world.posts[0]} featured/><span className="world-feature-seal" aria-hidden="true">THE<br/><em>{(world.id==='food'||world.id==='crispy')?'good taste':world.id==='weddings'?'love story':'studio'}</em><br/>EDIT</span></motion.div>
    <div className="world-side"><span className="world-side-label">A FEW MORE FAVOURITE FRAMES <span>↓</span></span><div className="world-side-posts">{world.posts.slice(1).map((post,i)=><PostCard post={post} key={post.id} index={i+1}/>)}</div><Reaction world={world}/></div>
   </motion.div></AnimatePresence>
  </div>
  <div className="world-editorial-line"><span>THE FEELING BEHIND THE FRAME</span><em>{(world.id==='food'||world.id==='crispy')?'Some stories are best tasted first.':world.id==='weddings'?'A thousand feelings. A fraction of a second.':'Make them pause. Give them a reason to stay.'}</em><span aria-hidden="true">✧</span></div><div className="world-footnote"><span><span className="world-live-dot"/>REAL COVERS. ORIGINAL STORIES.</span><p>Selected public posts & comments · Checked {instagramChecked}.<br/>Credits stay with the original creators. Engagement is a snapshot.</p></div>
 </section>
}
