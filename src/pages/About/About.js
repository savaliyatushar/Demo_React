import React from "react";
import Aboutus from "../../components/About/Aboutus";
// import Feature from "../../components/Features/Feature";
// import Review from "../../components/Reviews/Review";
// import Aboutus from "../../components/About/Aboutus";
// import Subscribes from "../../components/Subscribes/Subscribes";
// import Instanav from "../../components/Insta/Insta-nav";
function AboutUs() {
  return (
    <>
      <section>
        <Aboutus
          id={"AboutPage"}
          heading={"about us"}
          link={"Home"}
          text={"/about us"}
        />
      </section>
    </>
  );
}

export default AboutUs;
