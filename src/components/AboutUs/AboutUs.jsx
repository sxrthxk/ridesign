import React from "react";
import styled from "styled-components";
import { StyledContainer, StyledHR, StyledTitle } from "../UI";
import LogoVid from "../../assets/videos/logo-anim.mp4";
import OurJourney from "./OurJourney";
import { useEffect } from "react";
import Aos from "aos";
import Counter from "../Counter";
import Testimonial from "./Testimonial";
import { TestimonialsModel } from "../../assets/models/TestimonialsModel";
// import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
// import "@brainhubeu/react-carousel/lib/style.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        // centerPadding: '60px',
        className: 'center',
        // slidesToScroll: 1,
        // arrows: true,
        centerMode: true,      
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              centerMode: false,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 968,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 920,
            settings: {
              centerMode: false,

              slidesToShow: 1,
            },
          }
        ],
      };

  return (
    <>
      <StyledContainer>
        <StyledBrandDescription>
          <StyledBrandText data-aos="fade-right">
            <strong>
              Ridesignmedia, a social media agency based in Dewas, Madhya
              Pradesh.{" "}
            </strong>
            Our agency helps clients by providing different services with 100%
            customer satisfaction. We have worked with more than 300+ million
            base on Instagram as well as on social media platforms. Our agency
            have helped more than hundred of brands to sustain their digital
            buisness. By bringing them quality leads which later on converted as
            their permanent clients respectively. Although we have been working
            with international brands for their branding and acquiring online
            sales with our super powerful strategies. The services we provide
            are logo creation, Instagram growth, Instagram account management,
            YouTube channel management and growth , branding and many more as we
            have professionals in our staff for several niches. The agency have
            been working for more than six years in the market that’s what the
            reason we are famous all over the globe.
          </StyledBrandText>
          <StyledBrandLogo>
            <StyledVideo
              width="320"
              height="240"
              autoPlay={true}
              muted
              loop={true}
              controls={false}
            >
              <source src={LogoVid} type="video/mp4" />
              <h1 style={{ color: "white" }}>
                Your Browser does not support videos
              </h1>
            </StyledVideo>
          </StyledBrandLogo>
        </StyledBrandDescription>

        <OurJourney />

        <StyledOurTeamWrapper data-aos="fade-left">
          <StyledTitle>
            <span>Our </span>Team
          </StyledTitle>
          Team Ridesignmedia is a team of young enthusiasts. Our team work
          really work very hard 24×7 to acheive goals. We have the best team of
          professionals in different niches with extremely high skills. Also our
          team work for the brand's of different countries which shows
          adaptibily and responsibility towards their work.
        </StyledOurTeamWrapper>

        <StyledClients data-aos="fade-right">
          <StyledTitle>
            <span>Our </span>Clients
          </StyledTitle>
          Working with our clients is an amazing experience of all time for us.
          Team Ridesignmedia has worked for more than 300 million base on social
          media and also helped thousands of brands to sustain their branding on
          social media platform across the globe. Our relation with clients are
          always best and satisfying with our work type. We always had friendly
          nature with our clients that makes more than a relation of a client
          and media agency.
        </StyledClients>
        {/* <StyledWrapper> */}

        <StyledWrapper>
          <Slider {...settings} style={{textAlign: 'center'}}>
          {TestimonialsModel.map((testimonial) => (
            <Testimonial testimonial={testimonial} />
          ))}
          </Slider>
        </StyledWrapper>
        {/* <Carousel
          plugins={[
            "arrows",
            "centered",
            "infinite",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            1024: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2
                  }
                }
              ]
            },
            798: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1
                  }
                }
              ]
            }
          }}
        >
          {TestimonialsModel.map((testimonial) => (
            <Testimonial testimonial={testimonial} />
          ))}
        </Carousel> */}
        {/* </StyledWrapper> */}
        <Counter />
      </StyledContainer>
      <StyledHR />
    </>
  );
};

const StyledWrapper = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap-reverse; */
  /* justify-content: space-around; */
  width: 90%;

  .slick-slide.slick-center {
        transform: scale(1.1);
        transition: 0.2s all ease-in-out;
    }
`;

const StyledClients = styled.h2`
  font-family: "montserrat", sans-serif;
  font-weight: lighter;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 3rem;
  padding-top: 1rem;
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
    font-size: 1rem;
  }
`;

const StyledVideo = styled.video`
  width: 20rem;
  height: 20rem;
`;

const StyledBrandDescription = styled.div`
  display: flex;
  grid-template-columns: 2fr 1fr;
  margin: 20px;
  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

const StyledBrandText = styled.p`
  font-family: "montserrat", sans-serif;
  font-weight: lighter;
  color: white;
  word-wrap: normal;
  font-size: 1.5rem;
  letter-spacing: 1px;
  display: inline;
  align-items: center;
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const StyledBrandLogo = styled.div``;

const StyledOurTeamWrapper = styled.h2`
  font-family: "montserrat", sans-serif;
  font-weight: lighter;
  flex-direction: column;
  align-items: center;
  h1 {
    /* margin: 20px; */
  }
  padding: 3rem;
  color: white;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
    font-size: 1rem;
  }
`;

export default AboutUs;
