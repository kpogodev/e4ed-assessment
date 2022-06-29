import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import styles from './Modal.module.css'

const Modal = ({ children, isOpen, onClose, boxStyle }) => {
  const simpleFadeInOut = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: 'linear',
      },
    },
    exit: {
      opacity: 0,
    },
  }

  const onEscDown = useCallback(
    (e) => {
      if (isOpen && e.key === 'Escape') return onClose()
    },
    [onClose, isOpen]
  )

  // Close on outside click
  const onClickOut = (e) => {
    if (e.target.closest(`.${boxStyle}`)) return
    onClose()
  }

  useEffect(() => {
    document.addEventListener('keydown', onEscDown)
    return () => {
      document.removeEventListener('keydown', onEscDown)
    }
  }, [onEscDown])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : null
    return () => {
      document.body.style.overflow = null
    }
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <motion.div variants={simpleFadeInOut} initial='hidden' animate='visible' exit='exit' className={styles.container} onClick={onClickOut}>
      <div className={boxStyle}>{children}</div>
    </motion.div>,
    document.getElementById('portal')
  )
}

export default Modal
