import React from 'react';

const posts = [
   {
      id: 1,
      category: 'Web Engineering',
      title: 'Integrating React Router with R3F',
      excerpt: 'How to layer a React Router UI over a persistent Three.js canvas to build immersive, fully-routed SPAs.',
      date: 'March 31, 2026',
      readTime: '5 min read',
      emoji: '🔀',
   },
   {
      id: 2,
      category: 'Three.js',
      title: 'Baked Lighting in Blender for the Web',
      excerpt: 'How I compressed a full café scene into a performant GLTF model with beautiful baked textures.',
      date: 'March 20, 2026',
      readTime: '8 min read',
      emoji: '💡',
   },
];

function BlogPage() {
   return (
      <div className="w-full h-full flex flex-col" style={{ background: '#FFFFFF', boxShadow: '4px 0 24px rgba(0,0,0,0.12)' }}>
         {/* Red header stripe */}
         <div className="px-10 py-6 shrink-0 flex items-center gap-3" style={{ background: '#C8102E' }}>
            <span className="text-2xl">📰</span>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
               Blog
            </h1>
         </div>

         {/* Posts */}
         <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#E8D8C8 transparent' }}>
            {posts.map((post, idx) => (
               <div
                  key={post.id}
                  className="px-10 py-6 cursor-pointer transition-colors duration-150"
                  style={{ borderBottom: '1px solid #F0E8E0' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#FFF8F3'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
               >
                  <div className="flex gap-4 items-start">
                     <div className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center text-xl" style={{ background: '#FAF3E8' }}>
                        {post.emoji}
                     </div>
                     <div>
                        <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8102E' }}>
                           {post.category}
                        </span>
                        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', fontWeight: 700, color: '#1A0A00', margin: '0.2rem 0 0.4rem' }}>
                           {post.title}
                        </h2>
                        <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.65, marginBottom: '0.55rem' }}>
                           {post.excerpt}
                        </p>
                        <div style={{ fontSize: '0.72rem', color: '#AAA', display: 'flex', gap: '0.4rem' }}>
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
               <span style={{ fontSize: '0.75rem', color: '#C8102E', letterSpacing: '0.08em' }}>☕ More posts brewing...</span>
            </div>
         </div>
      </div>
   );
}

export default BlogPage;
