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
      <div
         className="w-full h-full flex flex-col"
         style={{ background: '#261A10', boxShadow: '4px 0 32px rgba(0,0,0,0.5)' }}
      >
         {/* Dark red header stripe */}
         <div
            className="px-10 py-6 shrink-0 flex items-center gap-3"
            style={{ background: 'linear-gradient(135deg, #932B30 0%, #B53028 100%)' }}
         >
            <span className="text-2xl">📰</span>
            <h1
               style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#F5ECD7',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
               }}
            >
               Blog
            </h1>
         </div>

         {/* Posts */}
         <div
            className="flex-1 overflow-y-auto"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#4D3822 transparent' }}
         >
            {posts.map((post) => (
               <div
                  key={post.id}
                  className="px-10 py-6 cursor-pointer transition-colors duration-150"
                  style={{ borderBottom: '1px solid #3F2D19', background: '#261A10' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#352415')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#261A10')}
               >
                  <div className="flex gap-4 items-start">
                     <div
                        className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center text-xl"
                        style={{ background: '#352415', border: '1px solid #4D3822' }}
                     >
                        {post.emoji}
                     </div>
                     <div>
                        <span
                           style={{
                              fontSize: '0.65rem',
                              fontWeight: 700,
                              letterSpacing: '0.18em',
                              textTransform: 'uppercase',
                              color: '#B53028',
                           }}
                        >
                           {post.category}
                        </span>
                        <h2
                           style={{
                              fontFamily: 'var(--font-serif)',
                              fontSize: '1.05rem',
                              fontWeight: 700,
                              color: '#F5ECD7',
                              margin: '0.2rem 0 0.4rem',
                           }}
                        >
                           {post.title}
                        </h2>
                        <p
                           style={{
                              fontSize: '0.85rem',
                              color: '#B8956A',
                              lineHeight: 1.65,
                              marginBottom: '0.55rem',
                           }}
                        >
                           {post.excerpt}
                        </p>
                        <div
                           style={{
                              fontSize: '0.72rem',
                              color: '#6B4030',
                              display: 'flex',
                              gap: '0.4rem',
                           }}
                        >
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
               <span style={{ fontSize: '0.75rem', color: '#B53028', letterSpacing: '0.08em' }}>
                  ☕ More posts brewing...
               </span>
            </div>
         </div>
      </div>
   );
}

export default BlogPage;
