import { React, useRef } from "react";
import CardsBlog from "../cardsblog/CardsBlog";
import user01 from "../../images/user01.jpg";
import user02 from "../../images/user02.jpg";
import user03 from "../../images/user03.jpg";
import user04 from "../../images/user04.jpg";
import imgblog01 from "../../images/blog_image_1.svg";
import imgblog02 from "../../images/bloco_image_2.svg";
import imgblog03 from "../../images/bloco_image_3.svg";
import imgblog04 from "../../images/bloco_image_4.svg";
import arrow from "../../images/arrow.png";
import arrowLeft from "../../images/arrowLeft.png"
import {
  ContainerBlog,
  CardContainers,
  TextDescription,
  ArrowRight,
  ButtonRight,
  ButtonLeft
} from "./styles";

function FourSection() {
  const carousel = useRef(null);

  const handleLeftClick = () => {
    
    carousel.current.scrollLeft += 250;
  };

  const handleRightClick = () => {
    
    carousel.current.scrollLeft -= 250;
  };

  return (
    <ContainerBlog name="blog">
      <h1>Read Our Blog</h1>
      <TextDescription>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts
      </TextDescription>

      <CardContainers ref={carousel}>
        <ButtonRight onClick={handleLeftClick}>
          <ArrowRight src={arrow} alt="scroll Rigth" />
        </ButtonRight>
        <ButtonLeft onClick={handleRightClick}>
          <ArrowRight src={arrowLeft} alt="scroll Left" />
        </ButtonLeft>
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
