import { useState } from 'react'

import Navigation from 'src/components/Navigation'
import Modal from 'src/components/Modal'

const PageLayout = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleModalClick = () => setModalOpen(!modalOpen)

  return (
    <>
      <Navigation handleClick={handleModalClick} />
      <main id="main">{children}</main>
      {modalOpen && (
        <Modal closeModal={handleModalClick}>
          <p> O HAI MARK</p>
        </Modal>
      )}
    </>
  )
}

export default PageLayout
