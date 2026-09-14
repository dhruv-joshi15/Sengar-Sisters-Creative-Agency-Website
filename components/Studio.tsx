'use client';
import {PressEffects} from './PressEffects';
import {ContactFlightProvider} from './ContactFlight';
import {ChapterProvider} from '@/hooks/useChapters';
import {KineticStage} from './KineticStage';
import {MotionConfig} from 'framer-motion';
import {Atmosphere} from './Atmosphere';
import {CameraInterlude} from './CameraInterlude';
import {CreativeMoment} from './CreativeMoment';
import {Navbar} from './Navbar';
import {Hero} from './Hero';
import {About,Services,Results,Showreel,Process,Testimonials} from './Sections';
import {Portfolio} from './Portfolio';
import {InstagramWorlds} from './InstagramWorlds';
import {Contact} from './Contact';
export function Studio(){return <MotionConfig reducedMotion="user"><ContactFlightProvider><PressEffects/><ChapterProvider><Atmosphere/><Navbar/><main id="main"><Hero/><InstagramWorlds/><KineticStage/><About/><CreativeMoment/><Services/><CameraInterlude/><div id="work"><Portfolio/></div><Results/><Showreel/><Process/><Testimonials/><Contact/></main></ChapterProvider></ContactFlightProvider></MotionConfig>}
