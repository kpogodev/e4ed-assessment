import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper'
import styles from './HeroHome.module.css'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const HeroHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Swiper
          className={styles.slideshow}
          modules={[Autoplay, Pagination, EffectFade]}
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: `.${styles.pagination}`,
            type: 'bullets',
            bulletClass: `${styles.bullet}`,
            bulletActiveClass: `${styles.bullet_active}`,
            renderBullet: function (_, className) {
              return `<div class="${className}"><div></div></div>`
            },
          }}
          noSwiping
          noSwipingClass='swiper-no-swiping'
          effect='fade'
          fadeEffect={{ crossFade: true }}
          loop
        >
          <SwiperSlide className='swiper-no-swiping'>
            <Image src='/slideshow-1.jpg' layout='fill' objectFit='cover' alt='' priority />
          </SwiperSlide>
          <SwiperSlide className='swiper-no-swiping'>
            <Image src='/slideshow-2.jpg' layout='fill' objectFit='cover' alt='' />
          </SwiperSlide>
          <SwiperSlide className='swiper-no-swiping'>
            <Image src='/slideshow-3.jpg' layout='fill' objectFit='cover' alt='' />
          </SwiperSlide>
        </Swiper>
        <div className={styles.overlay}>
          <svg>
            <use href='#svg-logo' />
          </svg>
        </div>
        <div className={styles.content}>
          <p className={styles.leading}>Learning For Life</p>
          <div className={styles.pagination}></div>
        </div>
      </div>
      <a href='#welcome' className={styles.scroll_down}>
        <svg>
          <use href='#svg-arrow' />
        </svg>
      </a>
    </div>
  )
}

export default HeroHome
