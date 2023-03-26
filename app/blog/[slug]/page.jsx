import { urlFor, client } from '../../client';
import Image from 'next/image';
import Link from 'next/link';
import {PortableText} from '@portabletext/react'


async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  const params = { slug };
  const post = await client.fetch(query, params);
return post;
}



export default async function Post({params}) {
  
  const post = await getPost(params.slug);


  return (
    <div className='flex flex-col justify-center items-center mb-20'>
      <div  className='flex flex-col justify-center items-center
            rounded-xl w-[90%] sm:w-[60%] transition-all box--shadow mt-20   bg-white'>
                
                        <div className='flex justify-center m-5'>
                        <Image src={urlFor(post.coverImage).url()} width='500' height='500' alt='work-name' 
                            className='box--shadow rounded-xl  object-contain'/>
                        </div>
                        <div className='flex flex-col mb-10 justify-center items-center'>
                            <h3 className='m-3 font-bold text-xl uppercase w-[80%] text-center'>{post.title}</h3>
                            <div className='w-[80%] text-justify text-[#767676] '>  
                            <PortableText value={post.content} /> 
                            </div>
                                               
                        </div>
                        <Link href={'/'}>
                        <button 
                        className='rounded p-2 mb-10   transition-all text-white bg-[#32a2a8]'>
                        Go back</button>
                        </Link>                        
                                                                 
       </div>
      
    </div>
  );
}

