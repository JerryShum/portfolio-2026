import { Suspense } from 'react';
import Model from './models/Real_portfolio';

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
