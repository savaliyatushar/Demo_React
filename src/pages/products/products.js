import React from 'react'
import Products from '../../components/mobile-products/M-products-nav'
import Subscribes from '../../components/Subscribes/Subscribes';

function products() {
  return (
    <>
      <div className='mt-5'>
        <Products />
      </div>
      <div>
        <Subscribes/>
      </div>
    </>
  );
}

export default products