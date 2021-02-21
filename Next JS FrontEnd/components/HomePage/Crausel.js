// App.js
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "../../styles/Home.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/Link";

function SectionCarousel({ blogs }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
  };

  const slidesData = [
    {
      id: 1,
      label: blogs[0].title,
      post_id: blogs[0]._id,
    },
    {
      id: 2,
      label: blogs[1].title,
      post_id: blogs[1]._id,
    },
    {
      id: 3,
      label: blogs[2].title,
      post_id: blogs[2]._id,
    },
    {
      id: 4,
      label: blogs[3].title,
      post_id: blogs[3]._id,
    },
    {
      id: 5,
      label: blogs[4].title,
      post_id: blogs[4]._id,
    },
    {
      id: 6,
      label: blogs[5].title,
      post_id: blogs[5]._id,
    },
  ];

  return (
    <div className={styles.App}>
      <div className={styles.slider_wrapper}>
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
        >
          {slidesData.map((slide) => {
            return (
              <div className={styles.slick_slide_1} key={slide.id}>
                <img
                  className={styles.slick_slide_image}
                  src={`https://picsum.photos/800/400?img=${slide.id}`}
                  onClick={() => console.log("slider data", slide)}
                />
                <Link
                  href={{
                    pathname: `/posts/${slide.post_id}`,
                    query: { id: slide.post_id },
                  }}
                  as={`/posts/${slide.post_id}`}
                >
                  <label
                    className={styles.slick_slide_label}
                    // onClick={() => alert(slide.label)}
                  >
                    {slide.label}
                  </label>
                </Link>
              </div>
            );
          })}
        </Slider>
        <div className={styles.thumbnail_slider_wrap}>
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {slidesData.map((slide) => (
              <div className={styles.slick_slide} key={slide.id}>
                <img
                  className={styles.slick_slide_image_1}
                  src={`https://picsum.photos/800/400?img=${slide.id}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SectionCarousel;
