import { useState, useCallback, useRef, useEffect } from 'react'
import CTA from 'components/common/CTA'
import Modal from 'components/modal/Modal'
import styles from './Welcome.module.css'

const Welcome = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const videoRef = useRef(null)

  const toggleModal = useCallback(() => {
    setModalIsOpen((prev) => !prev)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      const playVideo = async () => await videoRef.current.play().catch((err) => console.error(err))
      const pauseVideo = () => videoRef.current.pause()

      if (modalIsOpen) {
        playVideo()
      } else {
        pauseVideo()
      }
    }
  }, [modalIsOpen])

  return (
    <div id='welcome' className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.content_wrap}>
          <div className={styles.content}>
            <h2>Welcome from the head</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa nibh, elementum eu rhoncus vel, tempus quis elit. Ut metus lorem, pretium
              sollicitudin purus eget, laoreet placerat augue. In sit amet vestibulum arcu, ultrices luctus est. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra.
            </p>
            <div className={styles.cta_wrap}>
              <CTA href='/about-us' text='Find out more' />
              <button className={styles.open} onClick={toggleModal}>
                <div className={styles.open_icon}>
                  <svg>
                    <use href='#svg-arrow' />
                  </svg>
                </div>
                <span>Play Video</span>
              </button>
            </div>
          </div>
        </div>
        <Modal isOpen={modalIsOpen} onClose={toggleModal} boxStyle={styles.video_wrap}>
          <button className={styles.close} onClick={toggleModal}>
            <svg>
              <use href='#svg-close' />
            </svg>
          </button>
          <video
            ref={videoRef}
            className={styles.video}
            src='/welcome-video.mp4'
            preload='true'
            playsInline
            controls
            muted
            loop
            poster='/video-placeholder.png'
          >
            <source type='video/mp4' />
            <p>Your browser does not support this video.</p>
          </video>
        </Modal>
      </div>
    </div>
  )
}

export default Welcome
