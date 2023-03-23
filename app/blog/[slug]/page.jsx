import { urlFor, client } from '../../client';
import Image from 'next/image';

async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  const params = { slug };
  const post = await client.fetch(query, params);
return post;
}

export default async function Post({ params }) {
  
  const post = await getPost(params.slug);


  return (
    <div className='flex flex-col'>
      <h1 className='text-[100px]'>{post.title}</h1>
      <h1 className='text-[100px]'>{post.body}</h1>
      <Image src={urlFor(post.coverImage).url()} width='300' height='300' />
    </div>
  );
}

