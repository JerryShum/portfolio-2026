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
      <div className="w-full h-full flex flex-col bg-brand-brown-dark shadow-brand">
         {/* Dark red header stripe */}
         <div className="px-10 py-6 shrink-0 flex items-center gap-3 bg-brand-gradient">
            <h1 className="font-serif text-3xl font-bold text-brand-cream uppercase">
               About Me
            </h1>
         </div>

         {/* Content */}
         <div className="flex-1 overflow-y-auto px-10 py-8 space-y-7 scrollbar-brand">
            {/* Bio */}
            <div className="flex gap-5 items-start">
               <div className="shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-3xl bg-brand-brown-light border border-brand-red/20">
                  🧑‍💻
               </div>
               <div>
                  <h2 className="font-serif text-2xl font-bold text-brand-cream mb-1.5">
                     Hey, I'm Jerry!
                  </h2>
                  <p className="text-sm leading-relaxed text-brand-tan">
                     A developer who loves building interactive 3D web
                     experiences — blending creative environments with solid
                     engineering.
                  </p>
               </div>
            </div>

            <div className="border-t border-brand-coffee" />

            {/* Skills */}
            <div>
               <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-red mb-3.5">
                  Specialties
               </p>
               <div className="grid grid-cols-3 gap-2.5">
                  {skills.map(({ label, icon }) => (
                     <div
                        key={label}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-brown-light border border-brand-brown-medium text-xs text-brand-tan-light font-medium"
                     >
                        <span className="text-sm">{icon}</span>
                        {label}
                     </div>
                  ))}
               </div>
            </div>

            <div className="border-t border-brand-coffee" />

            <p className="text-sm text-brand-accent-brown text-center italic">
               "Building digital experiences, one commit at a time." ☕
            </p>
         </div>
      </div>
   );
}

export default AboutPage;
