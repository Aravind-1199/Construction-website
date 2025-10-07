import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts, Post } from '../data/post'; // Make sure Otherpost exports `posts` and `Post` type

const OtherDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find the post based on id
  const post: Post | undefined = posts.find(p => p.id === Number(id));

  if (!post) return <div className="text-center mt-20">Post not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Back Button */}
      <Link to="/blog" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        &larr; Back to Blog
      </Link>

      {/* Title and Image */}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-80 object-cover rounded mb-6"
      />

      {/* Post Details */}
      <div className="flex flex-col space-y-2 text-gray-600">
        <span><strong>Category:</strong> {post.category}</span>
        <span><strong>Author:</strong> {post.author}</span>
        <span><strong>Date:</strong> {post.date}</span>
        <span><strong>Read Time:</strong> {post.readTime}</span>
      </div>
    </div>
  );
};

export default OtherDetails;
