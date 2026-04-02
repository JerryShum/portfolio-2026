import React from 'react';

function ProfileImage({ src, alt = "Profile Image" }) {
   return (
      <div className="w-full flex justify-center my-6">
         <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-brand-brown-medium shadow-2xl bg-brand-brown-light">
            <img
               src={src}
               alt={alt}
               className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Subtle shadow overlay to give it depth */}
            <div className="absolute inset-0 ring-1 ring-inset ring-brand-cream/10 rounded-2xl pointer-events-none" />
         </div>
      </div>
   );
}

export default ProfileImage;

