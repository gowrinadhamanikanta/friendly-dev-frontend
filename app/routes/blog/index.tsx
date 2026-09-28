import { useState } from "react";
import type { Route } from "./+types/index";
import type { Post,StrapiResponse,StrapiPost } from "../../../types";
import Pagination from "~/components/pagination";
import PostCard from "~/components/postCard";
import PostFilter from "~/components/PostFilter";

export async function loader ({request,
  
}:Route.LoaderArgs):
Promise<{ posts: Post[] }>{
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?populate=image&sort=date:desc`);

  if(!res.ok) throw new Error('Failed to fetch the data');
  const json:StrapiResponse<StrapiPost> = await res.json();

  const posts = json.data.map((item)=>({
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        excerpt: item.excerpt,
        slug: item.slug,
        date: item.date,
        body: item.body,
        image: item.image?.url ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`:'/images/no-image.png',
  }))
  
  return{posts};
}
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly-dev | Blog" },
    { name: "description", content: "Custom App" },
  ];
}
const BlogPage = ({loaderData}:Route.ComponentProps) => {
    const [searchQuery,setSearchQuery] = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    const postsPerPage = 2;
    const {posts} = loaderData;
    const filteredPosts = posts.filter((post) => {
      const query = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query)
      );
    });
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);
    return (  
        <div className="max-w-3xl mx-auto p-6 mt-10 bg-gray-900">
            <h2 className="text-3xl font-bold text-white mb-4">📝Blog</h2>  
            <PostFilter searchQuery = {searchQuery} onSearchChange={(query)=>{ 
              setSearchQuery(query);
              setCurrentPage(1);
            }}/> 
            <div className="space-y-8">
              {currentPosts.length ===0 ? (
                <p className="text-gray-400 text-center">No posts found</p>
              ):currentPosts.map((post) => (
              <PostCard
                key={post.id}
                post={{
                  ...post,
                  date: new Date(String(post.date)).toISOString(),
                }}
              />
            ))}
            </div>
            {totalPages > 1 && <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page)=>setCurrentPage(page)}
            />}
        </div>
    );
}
  
export default BlogPage;