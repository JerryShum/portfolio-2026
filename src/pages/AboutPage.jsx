import React from 'react';

const skills = [
   { label: 'React / Next.js', icon: '⚛️' },
   { label: 'Three.js / R3F', icon: '🎨' },
   { label: 'TypeScript', icon: '🔷' },
   { label: 'Node.js', icon: '🟢' },
   { label: 'GSAP', icon: '✨' },
   { label: 'Blender', icon: '🟠' },
];

// Warm dark brown palette
// bg:       #261A10
// surface:  #261208
// elevated: #321810
// border:   #4D3822
// text:     #F5ECD7
// muted:    #B8956A
// accent:   #B53028
// tag bg:   #352415

function AboutPage() {
   return (
      <div className="w-full h-full flex flex-col bg-[#261A10] shadow-[4px_0_32px_rgba(0,0,0,0.5)]">
         {/* Dark red header stripe */}
         <div className="px-10 py-6 shrink-0 flex items-center gap-3 bg-[linear-gradient(135deg,#932B30_0%,#B53028_100%)]">
            <h1 className="font-serif text-3xl font-bold text-[#F5ECD7] uppercase">
               About Me
            </h1>
         </div>

         {/* Content */}
         <div className="flex-1 overflow-y-auto px-10 py-8 space-y-7 [scrollbar-width:thin] [scrollbar-color:#4D3822_transparent]">
            {/* Bio */}
            <div className="flex gap-5 items-start">
               <div className="shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-3xl bg-[#352415] border border-[rgba(181,48,40,0.2)]">
                  🧑‍💻
               </div>
               <div>
                  <h2 className="font-serif text-[1.4rem] font-bold text-[#F5ECD7] mb-[0.4rem]">
                     Hey, I'm Jerry!
                  </h2>
                  <p className="text-[0.9rem] leading-[1.7] text-[#B8956A]">
                     A developer who loves building interactive 3D web
                     experiences — blending creative environments with solid
                     engineering.
                  </p>
               </div>
            </div>

            <div className="border-t border-[#3F2D19]" />

            {/* Skills */}
            <div>
               <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#B53028] mb-[0.9rem]">
                  Specialties
               </p>
               <div className="grid grid-cols-3 gap-[0.6rem]">
                  {skills.map(({ label, icon }) => (
                     <div
                        key={label}
                        className="flex items-center gap-[0.45rem] px-3 py-2 rounded-lg bg-[#352415] border border-[#4D3822] text-[0.78rem] text-[#E8D5B0] font-medium"
                     >
                        <span className="text-[0.9rem]">{icon}</span>
                        {label}
                     </div>
                  ))}
               </div>
            </div>

            <div className="border-t border-[#3F2D19]" />

            <p className="text-[0.8rem] text-[#6B4030] text-center italic">
               "Building digital experiences, one commit at a time." ☕
            </p>
         </div>
      </div>
   );
}

export default AboutPage;
