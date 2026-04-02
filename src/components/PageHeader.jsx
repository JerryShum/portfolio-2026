import React from 'react';

function PageHeader({ name, tagline }) {
   return (
      <div className="px-10 py-6 shrink-0 bg-brand-gradient flex flex-col gap-2">
         <h1 className="font-serif text-3xl font-bold text-brand-cream uppercase">
            {name}
         </h1>
         <p className="text-md text-brand-cream/70 capitalize">
            {tagline}
         </p>
      </div>
   );
}

export default PageHeader;
