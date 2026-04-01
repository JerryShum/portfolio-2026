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
// bg:       #1C1008
// surface:  #261208
// elevated: #321810
// border:   #4A2010
// text:     #F5ECD7
// muted:    #B8956A
// accent:   #C8102E
// tag bg:   #2E160A

function AboutPage() {
   return (
      <div
         className="w-full h-full flex flex-col"
         style={{ background: '#1C1008', boxShadow: '4px 0 32px rgba(0,0,0,0.5)' }}
      >
         {/* Dark red header stripe */}
         <div
            className="px-10 py-6 shrink-0 flex items-center gap-3"
            style={{ background: 'linear-gradient(135deg, #9B0D23 0%, #C8102E 100%)' }}
         >
            <span className="text-2xl">☕</span>
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
               About Me
            </h1>
         </div>

         {/* Content */}
         <div
            className="flex-1 overflow-y-auto px-10 py-8 space-y-7"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#4A2010 transparent' }}
         >
            {/* Bio */}
            <div className="flex gap-5 items-start">
               <div
                  className="shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-3xl"
                  style={{ background: '#2E160A', border: '1px solid rgba(200,16,46,0.2)' }}
               >
                  🧑‍💻
               </div>
               <div>
                  <h2
                     style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        color: '#F5ECD7',
                        marginBottom: '0.4rem',
                     }}
                  >
                     Hey, I'm Jerry!
                  </h2>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#B8956A' }}>
                     A developer who loves building interactive 3D web experiences — blending
                     creative environments with solid engineering.
                  </p>
               </div>
            </div>

            <div style={{ borderTop: '1px solid #3A1A0A' }} />

            {/* Skills */}
            <div>
               <p
                  style={{
                     fontSize: '0.7rem',
                     fontWeight: 700,
                     letterSpacing: '0.2em',
                     textTransform: 'uppercase',
                     color: '#C8102E',
                     marginBottom: '0.9rem',
                  }}
               >
                  Specialties
               </p>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.6rem' }}>
                  {skills.map(({ label, icon }) => (
                     <div
                        key={label}
                        style={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: '0.45rem',
                           padding: '0.5rem 0.75rem',
                           borderRadius: '0.5rem',
                           background: '#2E160A',
                           border: '1px solid #4A2010',
                           fontSize: '0.78rem',
                           color: '#E8D5B0',
                           fontWeight: 500,
                        }}
                     >
                        <span style={{ fontSize: '0.9rem' }}>{icon}</span>
                        {label}
                     </div>
                  ))}
               </div>
            </div>

            <div style={{ borderTop: '1px solid #3A1A0A' }} />

            <p
               style={{
                  fontSize: '0.8rem',
                  color: '#6B4030',
                  textAlign: 'center',
                  fontStyle: 'italic',
               }}
            >
               "Building digital experiences, one commit at a time." ☕
            </p>
         </div>
      </div>
   );
}

export default AboutPage;
