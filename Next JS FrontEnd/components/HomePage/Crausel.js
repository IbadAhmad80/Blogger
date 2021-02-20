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
    autoplaySpeed: 2000,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
  };

  const slidesData = [
    {
      id: 1,

      label: blogs[0].title,
    },
    {
      id: 2,

      label: blogs[1].title,
    },
    {
      id: 3,

      label: blogs[2].title,
    },
    {
      id: 4,

      label: blogs[3].title,
    },
    {
      id: 5,

      label: blogs[4].title,
    },
    {
      id: 6,

      label: blogs[5].title,
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
          {slidesData.map((slide, index) => (
            <div className={styles.slick_slide_1} key={slide.id}>
              <img
                className={styles.slick_slide_image}
                src={`https://picsum.photos/800/400?img=${slide.id}`}
              />
              <Link
                href={{
                  pathname: `/posts/${blogs[0].id}`,
                  query: { id: blogs[index].id },
                }}
              >
                <label className={styles.slick_slide_label}>
                  {slide.label}
                </label>
              </Link>
            </div>
          ))}
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
