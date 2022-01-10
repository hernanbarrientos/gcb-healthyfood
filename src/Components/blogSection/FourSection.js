import React from "react";
import CardsBlog from "../cardsblog/CardsBlog";
import user01 from "../../images/user01.jpg";
import user02 from "../../images/user02.jpg";
import user03 from "../../images/user03.jpg";
import user04 from "../../images/user04.jpg";
import imgblog01 from "../../images/blog_image_1.svg";
import imgblog02 from "../../images/bloco_image_2.svg";
import imgblog03 from "../../images/bloco_image_3.svg";
import imgblog04 from "../../images/bloco_image_4.svg";
import { ContainerBlog, CardContainers } from "./styles";

function FourSection() {
  return (
    <ContainerBlog key="blog">
      <h1>Read Our Blog</h1>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts
      </p>
      <CardContainers>
        <CardsBlog
          blogImage={imgblog01}
          title="Quick-start guide to nuts and seeds"
          userName="Ana Shirley"
          userImage={user01}
        />

        <CardsBlog
          blogImage={imgblog02}
          title="Nutrition: Tips for Improving Your Health"
          userName="Emmily Braga"
          userImage={user02}
        />

        <CardsBlog
          blogImage={imgblog03}
          title="The top 10 benefits of eating healthy"
          userName="Jackson Favel"
          userImage={user04}
        />

        <CardsBlog
          blogImage={imgblog04}
          title="what are the best foods to eat nd have a healthy"
          userName="Hanna Bergman"
          userImage={user03}
        />
      </CardContainers>
    </ContainerBlog>
  );
}
export default FourSection;
