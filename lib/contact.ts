import {contact} from '@/data/siteData';
export type ContactChannel='email'|'instagram'|'whatsapp'|'phone';
export const inquirySubject='Let’s create together — pricing & details';
export const inquiryMessage='Hi Sengar Sisters,\r\n\r\nWe really like your work! I’m [your name] from [brand name], and we’d love to know more about your pricing, services, and availability.\r\n\r\nWe’re interested in [social media / content / branding / photography / video]. Could you share your packages and how we can get started?\r\n\r\nThank you!\r\n[your name]';
export function contactHref(channel:ContactChannel,override?:string){if(override)return override;switch(channel){case 'email':return `mailto:${contact.email}?subject=${encodeURIComponent(inquirySubject)}&body=${encodeURIComponent(inquiryMessage)}`;case 'whatsapp':return `${contact.whatsapp}${contact.whatsapp.includes('?')?'&':'?'}text=${encodeURIComponent(inquiryMessage)}`;case 'instagram':return contact.instagram;case 'phone':return `tel:${contact.phone}`}}
export const contactLabels:Record<ContactChannel,string>={email:'your email draft',instagram:'Instagram',whatsapp:'your WhatsApp draft',phone:'your phone app'};
