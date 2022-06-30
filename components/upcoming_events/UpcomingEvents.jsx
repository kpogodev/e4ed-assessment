import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import Link from 'next/link'
import moment from 'moment'
import CTA from 'components/common/CTA'
import styles from './UpcomingEvents.module.css'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const UpcomingEvents = () => {
  const eventMockup = {
    id: 1,
    title: 'Event Name Goes Here',
    date: new Date(),
    start_time: new Date('2022-06-29T12:00:10.977Z'),
    end_time: new Date('2022-06-29T15:00:10.977Z'),
    url: '/news-events/events/1',
  }

  const swiperConfig = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 18,
    watchSlidesProgress: true,
    navigation: {
      nextEl: `.${styles.swiper_next}`,
      prevEl: `.${styles.swiper_prev}`,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      920: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  }
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header_wrap}>
          <h2>Upcoming Events</h2>
          <div className={styles.cta_wrap}>
            <CTA text='Term Dates' href='/parents/term-dates' variant='accent' />
            <CTA text='View All Events' href='/news-events/events' variant='accent' />
          </div>
        </div>
        <div className={styles.swiper_wrap}>
          <button className={styles.swiper_prev}>
            <svg>
              <use href='#svg-arrow' />
            </svg>
          </button>
          <button className={styles.swiper_next}>
            <svg>
              <use href='#svg-arrow' />
            </svg>
          </button>
          <Swiper className={styles.swiper} {...swiperConfig}>
            <SwiperSlide className={styles.swiper_item}>
              <Link href={eventMockup.url}>
                <a className={styles.card}>
                  <p className={styles.card_date}>
                    {moment(eventMockup.date).format('DD')}
                    <span>{moment(eventMockup.date).format('MMM')}</span>
                  </p>
                  <p className={styles.card_title}>{eventMockup.title}</p>
                  <p className={styles.card_time}>
                    <svg>
                      <use href='#svg-clock' />
                    </svg>
                    <span>
                      {moment(eventMockup.start_time).format('h:mmA')} - {moment(eventMockup.end_time).format('h:mmA')}
                    </span>
                  </p>
                  <svg className={styles.card_watermark}>
                    <use href='#svg-logo' />
                  </svg>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_item}>
              <Link href={eventMockup.url}>
                <a className={styles.card}>
                  <p className={styles.card_date}>
                    {moment(eventMockup.date).format('DD')}
                    <span>{moment(eventMockup.date).format('MMM')}</span>
                  </p>
                  <p className={styles.card_title}>{eventMockup.title}</p>
                  <p className={styles.card_time}>
                    <svg>
                      <use href='#svg-clock' />
                    </svg>
                    <span>
                      {moment(eventMockup.start_time).format('h:mmA')} - {moment(eventMockup.end_time).format('h:mmA')}
                    </span>
                  </p>
                  <svg className={styles.card_watermark}>
                    <use href='#svg-logo' />
                  </svg>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_item}>
              <Link href={eventMockup.url}>
                <a className={styles.card}>
                  <p className={styles.card_date}>
                    {moment(eventMockup.date).format('DD')}
                    <span>{moment(eventMockup.date).format('MMM')}</span>
                  </p>
                  <p className={styles.card_title}>{eventMockup.title}</p>
                  <p className={styles.card_time}>
                    <svg>
                      <use href='#svg-clock' />
                    </svg>
                    <span>
                      {moment(eventMockup.start_time).format('h:mmA')} - {moment(eventMockup.end_time).format('h:mmA')}
                    </span>
                  </p>
                  <svg className={styles.card_watermark}>
                    <use href='#svg-logo' />
                  </svg>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_item}>
              <Link href={eventMockup.url}>
                <a className={styles.card}>
                  <p className={styles.card_date}>
                    {moment(eventMockup.date).format('DD')}
                    <span>{moment(eventMockup.date).format('MMM')}</span>
                  </p>
                  <p className={styles.card_title}>{eventMockup.title}</p>
                  <p className={styles.card_time}>
                    <svg>
                      <use href='#svg-clock' />
                    </svg>
                    <span>
                      {moment(eventMockup.start_time).format('h:mmA')} - {moment(eventMockup.end_time).format('h:mmA')}
                    </span>
                  </p>
                  <svg className={styles.card_watermark}>
                    <use href='#svg-logo' />
                  </svg>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_item}>
              <Link href={eventMockup.url}>
                <a className={styles.card}>
                  <p className={styles.card_date}>
                    {moment(eventMockup.date).format('DD')}
                    <span>{moment(eventMockup.date).format('MMM')}</span>
                  </p>
                  <p className={styles.card_title}>{eventMockup.title}</p>
                  <p className={styles.card_time}>
                    <svg>
                      <use href='#svg-clock' />
                    </svg>
                    <span>
                      {moment(eventMockup.start_time).format('h:mmA')} - {moment(eventMockup.end_time).format('h:mmA')}
                    </span>
                  </p>
                  <svg className={styles.card_watermark}>
                    <use href='#svg-logo' />
                  </svg>
                </a>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents
