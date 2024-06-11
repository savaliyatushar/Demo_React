import React from "react";
import SWatches from "../../components/Smart Watches/W-product-nav";
import Subscribes from "../../components/Subscribes/Subscribes";
import Instanav from "../../components/Insta/Insta-nav";

function WatchesPage() {
  return (
    <>
      <div className="mt-5">
        <SWatches />
      </div>
      <div>
        <Subscribes />
      </div>
      <div>
        <Instanav/>
      </div>
    </>
  );
}

export default WatchesPage;
