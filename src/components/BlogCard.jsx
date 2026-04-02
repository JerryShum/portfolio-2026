import React from 'react';

/**
 * BlogCard
 *
 * @param {Object} post - Blog post data
 * @param {number} post.id - Unique ID
 * @param {string} post.category - Post category
 * @param {string} post.title - Post title
 * @param {string} post.excerpt - Short summary
 * @param {string} post.date - Published date
 * @param {string} post.readTime - Estimated read time
 * @param {string} [post.emoji] - Optional emoji
 */
function BlogCard({ post }) {
   return (
      <div
         className="
            group px-8 py-7 border-b border-brand-coffee bg-brand-brown-dark
            hover:bg-brand-brown-light transition-all duration-300 cursor-pointer
         "
      >
         <div className="flex gap-6 items-start">
            {/* ── Status / Icon ── */}
            <div className="
               relative shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl
               bg-brand-brown-light border border-brand-brown-medium
               group-hover:border-brand-red/50 group-hover:bg-brand-brown-elevated transition-all duration-300
            ">
               {post.emoji}
               {/* Decorative glow on hover */}
               <div className="absolute inset-0 rounded-xl bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* ── Content ── */}
            <div className="flex-1 min-w-0">
               <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-brand-red px-2 py-0.5 rounded-md bg-brand-red/10 border border-brand-red/20 shadow-sm">
                     {post.category}
                  </span>
               </div>

               <h2 className="
                  font-serif text-lg font-bold text-brand-cream leading-tight mb-2
                  group-hover:text-brand-red/90 transition-colors duration-300
               ">
                  {post.title}
               </h2>

               <p className="text-sm text-brand-tan leading-relaxed mb-4 line-clamp-2 bg-brand-brown-dark group-hover:bg-transparent transition-colors duration-300">
                  {post.excerpt}
               </p>

               {/* Meta info */}
               <div className="flex items-center gap-2.5 text-xs font-mono text-brand-accent-brown">
                  <span className="group-hover:text-brand-tan transition-colors duration-300">{post.date}</span>
                  <span className="opacity-30">·</span>
                  <span className="group-hover:text-brand-tan transition-colors duration-300">{post.readTime}</span>

                  {/* Read more indicator that appears on hover */}
                  <span className="ml-auto flex items-center gap-1 text-brand-red opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold">
                     Read Post
                     <svg
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                     >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                     </svg>
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default BlogCard;
