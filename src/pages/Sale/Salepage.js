import React from 'react'
import Sale from '../../components/Sales/Sale';
import Subscribes from '../../components/Subscribes/Subscribes';
import Instanav from '../../components/Insta/Insta-nav';

const Salepage=()=> {
  return (
    <>
      <div className='mt-5'>
        <div className="">
          <Sale />
        </div>
        <div className='mt-5'>
            <Subscribes/>
        </div>
        <div>
            <Instanav/>
        </div>
      </div>
    </>
  );
};

export default Salepage;