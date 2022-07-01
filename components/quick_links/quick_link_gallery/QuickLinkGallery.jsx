import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper'
import styles from './QuickLinkGallery.module.css'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const QuickLinkGallery = ({ data }) => {
  const swiperConfig = {
    modules: [Autoplay, Pagination, Navigation, EffectFade],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: {
      clickable: true,
      el: `.${styles.pagination}`,
      type: 'bullets',
      bulletClass: `${styles.bullet}`,
      bulletActiveClass: `${styles.bullet_active}`,
      renderBullet: function (_, className) {
        return `<div class="${className}"><div></div></div>`
      },
    },
    navigation: {
      nextEl: `.${styles.slideshow_next}`,
      prevEl: `.${styles.slideshow_prev}`,
    },
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    effect: 'fade',
    fadeEffect: { crossFade: true },
    loop: true,
  }

  return (
    <Link href={data.slug}>
      <a className={styles.container}>
        <div className={styles.inner}>
          <Swiper className={styles.slideshow} {...swiperConfig}>
            {data.slideshow.map((slide) => (
              <SwiperSlide key={slide.hash} className='swiper-no-swiping'>
                <Image src={slide.src} layout='fill' objectFit='cover' alt={slide.alt} priority />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.overlay} />
          <div className={styles.content}>
            <p className={styles.text}>Gallery</p>
            <div className={styles.pagination}></div>
          </div>
        </div>
        <div className={styles.slideshow_navigation}>
          <button className={styles.slideshow_prev}>
            <svg>
              <use href='#svg-arrow' />
            </svg>
          </button>
          <button className={styles.slideshow_next}>
            <svg>
              <use href='#svg-arrow' />
            </svg>
          </button>
        </div>
      </a>
    </Link>
  )
}

export default QuickLinkGallery
