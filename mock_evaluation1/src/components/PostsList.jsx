import { usePosts } from "../context/PostsContext";
import PostCard from "./PostCard";

const PostsList = () => {
  const { posts } = usePosts();

  return (
    <div className="grid">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;