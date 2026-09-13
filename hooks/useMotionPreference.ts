'use client';
import {useSyncExternalStore} from 'react';
const subscribe=(onChange:()=>void)=>{const query=window.matchMedia('(prefers-reduced-motion: reduce)');query.addEventListener('change',onChange);return()=>query.removeEventListener('change',onChange)};
const snapshot=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const serverSnapshot=()=>false;
/** Identical server/hydration snapshot; applies the actual preference after hydration. */
export function useMotionPreference(){return useSyncExternalStore(subscribe,snapshot,serverSnapshot)}
