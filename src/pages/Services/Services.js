import React from 'react'
import Feature from '../../components/Features/Feature';
import Subscribes from '../../components/Subscribes/Subscribes';
import Instanav from '../../components/Insta/Insta-nav';

function Services() {
  return (
    <>
      <section className="mt-5">
        
          <div>
            <Feature />
          </div>
          <div>
            <Subscribes/>
          </div>
         <div>
            <Instanav/>
         </div>
        
      </section>
    </>
  );
}

export default Services