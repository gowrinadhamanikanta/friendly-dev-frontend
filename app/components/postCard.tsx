import type { Post } from "../../types";
import { Link } from "react-router";
const PostCard = ({ post }: { post: Post }) => {
    return ( 
        <article
                key = {post.slug}
                className="bg-gray-800 p-6 rounded-lg shadow mb-4"
              >
                <h3 className="text-2xl fontsemibold text-blue-400">{post.title}</h3>
                <p className="text-sm text-gray-400 mb-2">
                  {new Date(post.date.toString()).toDateString()}
                </p>
                {post.image && (
                  <img src={post.image} alt={post.title}
                  className="w-full h-48 object-cover rounded mb-4"/>)}
                <p className="text-gray-200 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="text-blue-200 text-sm hover:underline">Read More →</Link>
              </article>
     );
}
 
export default PostCard;