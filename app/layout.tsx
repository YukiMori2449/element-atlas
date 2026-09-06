import type { Metadata } from 'next';
import './globals.css';
const title='ELEMENT ATLAS — 触れて学ぶ元素の周期表';
const description='118の元素を、写真とやさしい説明で。電子配置・密度・融点・沸点を調べられるインタラクティブな周期表。';
export const metadata: Metadata = {metadataBase:new URL('https://element-atlas.workspace-749882.chatgpt.site'),title,description,openGraph:{type:'website',locale:'ja_JP',title,description,images:[{url:'/og.png',width:1200,height:630,alt:'ELEMENT ATLAS — 118 elements. A world to discover.'}]},twitter:{card:'summary_large_image',title,description,images:['/og.png']},icons:{icon:'/favicon.png'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body>{children}</body></html>}
