import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'
import styles from './HeroContent.module.css'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const HeroContent = ({ topic }) => {
  return (
    <div className={styles.container}>
      <Swiper
        className={styles.slideshow}
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
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
      <div className={styles.overlay} />
      <p className={styles.topic}>{topic}</p>
    </div>
  )
}

export default HeroContent
