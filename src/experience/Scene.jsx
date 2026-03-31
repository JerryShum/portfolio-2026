import { Suspense } from 'react';
import Model from './models/Portfolio_REAL';

function Scene() {
   return (
      <>
         <Suspense>
            <Model />
         </Suspense>
      </>
   );
}

export default Scene;
