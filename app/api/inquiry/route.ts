import {contact} from '@/data/siteData';

type Inquiry={name:string;brand:string;email:string;phone:string;service:string;message:string;website?:string};
const clean=(value:unknown,max:number)=>typeof value==='string'?value.trim().slice(0,max):'';
export async function POST(request:Request){
 const key=process.env.RESEND_API_KEY,from=process.env.RESEND_FROM_EMAIL;
 if(!key||!from)return Response.json({sent:false,reason:'unconfigured'},{status:503});
 let data:Inquiry;
 try{const incoming=await request.json() as Record<string,unknown>;data={name:clean(incoming.name,120),brand:clean(incoming.brand,120),email:clean(incoming.email,200),phone:clean(incoming.phone,40),service:clean(incoming.service,120),message:clean(incoming.message,2000),website:clean(incoming.website,100)};}catch{return Response.json({sent:false,reason:'invalid'},{status:400})}
 if(data.website)return Response.json({sent:true});
 if(!data.name||!data.message||!/^\S+@\S+\.\S+$/.test(data.email))return Response.json({sent:false,reason:'invalid'},{status:400});
 const text=['A new Sengar Sisters creative inquiry','',`Name: ${data.name}`,`Brand: ${data.brand||'Not provided'}`,`Reply email: ${data.email}`,`Phone: ${data.phone||'Not provided'}`,`Interested in: ${data.service||'Not specified'}`,'','Their idea:',data.message].join('\n');
 try{const result=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:[contact.email],reply_to:data.email,subject:`Creative inquiry · ${data.brand||data.name}`,text}),cache:'no-store'});if(!result.ok)return Response.json({sent:false,reason:'provider-error'},{status:502});return Response.json({sent:true});}catch{return Response.json({sent:false,reason:'provider-error'},{status:502})}
}
