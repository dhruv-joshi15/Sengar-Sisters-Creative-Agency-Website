import type { Metadata } from 'next';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import './globals.css';
export const metadata: Metadata = {metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),title:'Sengar Sisters — Creative Studio',description:'A creative studio for social media, content, branding, photography and visual storytelling.',openGraph:{title:'Sengar Sisters — Creative Studio',description:'Two sisters. One creative language.',type:'website',images:[{url:'/images/og.svg',width:1200,height:630,alt:'Sengar Sisters Creative Studio'}]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-theme="dark" data-theme-preference="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:`try{const p=localStorage.getItem('sengar-theme');const t=p==='light'||p==='system'?p:'dark';document.documentElement.dataset.themePreference=t;document.documentElement.dataset.theme=t==='system'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):t}catch(e){document.documentElement.dataset.theme='dark'}`}} /></head><body>{children}</body></html>}
