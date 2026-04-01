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
      <div className="w-full h-full flex flex-col bg-[#261A10] shadow-[4px_0_32px_rgba(0,0,0,0.5)]">
         {/* Dark red header stripe */}
         <div className="px-10 py-6 shrink-0 flex items-center gap-3 bg-[linear-gradient(135deg,#932B30_0%,#B53028_100%)]">
            <span className="text-2xl">📰</span>
            <h1 className="font-serif text-[1.25rem] font-bold text-[#F5ECD7] tracking-[0.08em] uppercase">
               Blog
            </h1>
         </div>

         {/* Posts */}
         <div className="flex-1 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#4D3822_transparent]">
            {posts.map((post) => (
               <div
                  key={post.id}
                  className="px-10 py-6 cursor-pointer transition-colors duration-150 border-b border-[#3F2D19] bg-[#261A10] hover:bg-[#352415]"
               >
                  <div className="flex gap-4 items-start">
                     <div className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center text-xl bg-[#352415] border border-[#4D3822]">
                        {post.emoji}
                     </div>
                     <div>
                        <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#B53028]">
                           {post.category}
                        </span>
                        <h2 className="font-serif text-[1.05rem] font-bold text-[#F5ECD7] mt-[0.2rem] mb-[0.4rem]">
                           {post.title}
                        </h2>
                        <p className="text-[0.85rem] text-[#B8956A] leading-[1.65] mb-[0.55rem]">
                           {post.excerpt}
                        </p>
                        <div className="text-[0.72rem] text-[#6B4030] flex gap-[0.4rem]">
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
               <span className="text-[0.75rem] text-[#B53028] tracking-[0.08em]">
                  ☕ More posts brewing...
               </span>
            </div>
         </div>
      </div>
   );
}

export default BlogPage;
