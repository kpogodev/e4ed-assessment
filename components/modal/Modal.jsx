import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

const Modal = ({ children, isOpen, onClose, boxStyle }) => {
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

  return createPortal(
    <div className={isOpen ? `${styles.container} ${styles.open}` : styles.container} onClick={onClickOut}>
      <div className={boxStyle}>{children}</div>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal
