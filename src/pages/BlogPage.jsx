import React from 'react';
import PageHeader from '../components/PageHeader';
import BlogCard from '../components/BlogCard';

const NAME = 'Blog';
const TAGLINE = 'Documenting my software engineering journey';

// Temp for now --> later will make API call
const posts = [];

function BlogPage() {
   return (
      <div className="w-full h-full flex flex-col bg-brand-brown-dark shadow-brand">
         {/* ── Header ── */}
         <PageHeader name={NAME} tagline={TAGLINE} />

         {/* Posts */}
         <div className="flex-1 overflow-y-auto scrollbar-brand">
            <div className="flex flex-col">
               {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
               ))}
            </div>

            {/* Coming soon */}
            <div className="px-10 py-10 flex flex-col items-center justify-center ">
               <p className="text-sm font-mono font-bold tracking-widest uppercase text-brand-red">
                  Posts brewing...
               </p>
               <p className="text-sm text-brand-tan mt-1">
                  Check back soon for new articles.
               </p>
            </div>
         </div>
      </div>
   );
}

export default BlogPage;
