import { client } from '../../client';

async function getPost(slug) {
const query = `*[_type == "post" && slug.current == $slug][0]`;
const params = { slug };
const post = await client.fetch(query, params);
return post;
}

export default async function Post({ params }) {
  
  const post = await getPost(params.slug);


  return (
    <div>
      <h1 className='text-[100px]'>{post.title}</h1>
      <h1 className='text-[100px]'>{post.body}</h1>
    </div>
  );
}

