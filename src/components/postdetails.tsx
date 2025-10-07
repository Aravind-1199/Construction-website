import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts, Post } from '../data/post';

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p: Post) => p.id === Number(id));

  if (!post) return <div className="text-center mt-20 text-gray-700 font-semibold">Post not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-8 flex flex-col gap-8">

      {/* Add top margin to move title a bit down */}
      <h1 className="text-4xl font-extrabold text-gray-900 mt-8">{post.title || "Untitled Post"}</h1>

      {/* Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-80 object-cover rounded-lg shadow-md"
      />

      {/* Combined paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed">
        {post.content} This {post.category} post, authored by {post.author}, was published on {post.date} and takes approximately {post.readTime} to read. It provides comprehensive insights related to {post.title}.
      </p>

      {/* Back button */}
      <div>
        <Link
          to="/blog"
          className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 inline-block"
        >
          &larr; Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
