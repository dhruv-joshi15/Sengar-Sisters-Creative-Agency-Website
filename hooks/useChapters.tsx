'use client';
import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
import {useMotionValue,type MotionValue} from 'framer-motion';
import {chapters} from '@/data/siteData';
type ChapterId=(typeof chapters)[number]['id'];
type Journey={active:ChapterId;positions:number[];progress:MotionValue<number>};
const ChapterContext=createContext<Journey|null>(null);
export function ChapterProvider({children}:{children:ReactNode}){
 const [active,setActive]=useState<ChapterId>('home');
 const [positions,setPositions]=useState<number[]>(chapters.map(()=>0));
 const progress=useMotionValue(0);
 useEffect(()=>{
  let frame=0,dirty=true,max=1,alive=true;let lastActive:ChapterId='home';let offsets:number[]=[];
  const update=()=>{frame=0;if(dirty){dirty=false;max=Math.max(1,document.documentElement.scrollHeight-innerHeight);offsets=chapters.map(c=>{const el=document.getElementById(c.id);return el?el.getBoundingClientRect().top+scrollY:0});const next=offsets.map(top=>Math.min(1,Math.max(0,top/max)));setPositions(previous=>next.every((n,i)=>Math.abs(n-previous[i])<.0001)?previous:next)}
   progress.set(Math.min(1,Math.max(0,scrollY/max)));
   const line=scrollY+innerHeight*.35;let current:ChapterId='home';offsets.forEach((top,i)=>{if(top<=line)current=chapters[i].id});if(scrollY>=max-2)current='contact';if(current!==lastActive){lastActive=current;setActive(current)}
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
  const geometry=()=>{if(!alive)return;dirty=true;schedule()};
  window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',geometry,{passive:true});document.addEventListener('load',geometry,true);
  const resize=new ResizeObserver(geometry);resize.observe(document.body);const main=document.querySelector('main');if(main)resize.observe(main);
  document.fonts.ready.then(geometry);geometry();
  return()=>{alive=false;cancelAnimationFrame(frame);resize.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',geometry);document.removeEventListener('load',geometry,true)};
 },[progress]);
 return <ChapterContext.Provider value={{active,positions,progress}}>{children}</ChapterContext.Provider>
}
export function useChapters(){const context=useContext(ChapterContext);if(!context)throw new Error('Chapter navigation needs ChapterProvider');return context}
