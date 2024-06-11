import React from 'react'
// import Postimg from '../../components/Latest Posts/Post';
import Singlepost from '../../components/single post/Singlepost';
import Instanav from '../../components/Insta/Insta-nav';
import Post from '../../components/Latest Posts/Post-nav';
import Subscribes from '../../components/Subscribes/Subscribes';
function Single() {
  return (
    <>
      <Singlepost
        date={"Feb 22, 2023 /- technology"}
        heading={"TECHNOLOGY HACK YOU WON’T GET"}
        leptopimg={
          "https://c0.wallpaperflare.com/preview/447/258/382/arm-break-coffee-coffee-cup.jpg"
        }
        peraimg1={
          "https://demo.templatesjungle.com/ministore/images/post-image1.jpg"
        }
        peraimg2={
          "https://demo.templatesjungle.com/ministore/images/post-image.jpg"
        }
        comment={"  3 COMMENTS"}
        comment1={
          "https://demo.templatesjungle.com/ministore/images/commentor-item1.jpg"
        }
        comment2={
          "https://demo.templatesjungle.com/ministore/images/commentor-item2.jpg"
        }
        comment3={
          "https://demo.templatesjungle.com/ministore/images/commentor-item3.jpg"
        }
        leave={"LEAVE A COMMENT"}
      />
      <div>
        <Post />
      </div>
      <div>
        <Subscribes />
      </div>
      <div>
        <Instanav />
      </div>
    </>
  );
}

export default Single