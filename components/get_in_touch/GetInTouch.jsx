import CTA from 'components/common/CTA'
import styles from './GetInTouch.module.css'

const GetInTouch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2 className={styles.header}>How To Find Us</h2>
        <div className={styles.contact_wrap}>
          <h2 className={styles.contact_header}>Get In Touch</h2>
          <p className={styles.contact_address}>Brittain Waazy, Stevenage Hertfordshire, SP12 8UT</p>
          <p className={styles.contact_phone}>01438 312356</p>
          <CTA text='Email Us' href='/contact-us' variant='secondary' />
        </div>
      </div>
      <iframe
        className={styles.map}
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8279.926850834947!2d-0.1691143430029275!3d51.90408864553483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd65fdddfa406ac53!2zNTHCsDU0JzExLjQiTiAwwrAwOSc0Ni44Ilc!5e0!3m2!1sen!2suk!4v1656636431928!5m2!1sen!2suk'
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  )
}

export default GetInTouch
