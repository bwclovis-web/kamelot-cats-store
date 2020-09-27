import { useState } from 'react'
import Navigation from 'src/components/Navigation'

const PageLayout = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleModalClick = () => setModalOpen(!modalOpen)

  return (
    <>
      <Navigation handleClick={handleModalClick} />
      <main id="main">{children}</main>
    </>
  )
}

export default PageLayout
