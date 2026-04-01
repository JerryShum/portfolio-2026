import React from 'react';

const posts = [
   {
      id: 1,
      category: 'Web Engineering',
      title: 'Integrating React Router with R3F',
      excerpt:
         'How to layer a React Router UI over a persistent Three.js canvas to build immersive, fully-routed SPAs.',
      date: 'March 31, 2026',
      readTime: '5 min read',
      emoji: '🔀',
   },
   {
      id: 2,
      category: 'Three.js',
      title: 'Baked Lighting in Blender for the Web',
      excerpt:
         'How I compressed a full café scene into a performant GLTF model with beautiful baked textures.',
      date: 'March 20, 2026',
      readTime: '8 min read',
      emoji: '💡',
   },
];

function BlogPage() {
   return (
      <div className="w-full h-full flex flex-col bg-brand-brown-dark shadow-brand">
         {/* Dark red header stripe */}
         <div className="px-10 py-6 shrink-0 flex items-center gap-3 bg-brand-gradient">
            <h1 className="font-serif text-3xl font-bold text-brand-cream uppercase">
               Blog
            </h1>
         </div>

         {/* Posts */}
         <div className="flex-1 overflow-y-auto scrollbar-brand">
            {posts.map((post) => (
               <div
                  key={post.id}
                  className="px-10 py-6 cursor-pointer transition-colors duration-150 border-b border-brand-coffee bg-brand-brown-dark hover:bg-brand-brown-light"
               >
                  <div className="flex gap-4 items-start">
                     <div className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center text-xl bg-brand-brown-light border border-brand-brown-medium">
                        {post.emoji}
                     </div>
                     <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-brand-red">
                           {post.category}
                        </span>
                        <h2 className="font-serif text-base font-bold text-brand-cream mt-1 mb-1.5">
                           {post.title}
                        </h2>
                        <p className="text-sm text-brand-tan leading-relaxed mb-2">
                           {post.excerpt}
                        </p>
                        <div className="text-xs text-brand-accent-brown flex gap-1.5">
                           <span>{post.date}</span>
                           <span>·</span>
                           <span>{post.readTime}</span>
                        </div>
                     </div>
                  </div>
               </div>
            ))}

            {/* Coming soon */}
            <div className="px-10 py-5 flex justify-start">
               <span className="text-xs text-brand-red tracking-wide">
                  ☕ More posts brewing...
               </span>
            </div>
         </div>
      </div>
   );
}

export default BlogPage;
