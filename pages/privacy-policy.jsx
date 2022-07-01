import Maintenance from 'components/utilities/Maintenance'
import React from 'react'
import Meta from 'components/utilities/Meta'
import { useRouter } from 'next/router'

const PrivacyPolicy = () => {
  const router = useRouter()
  const pageTitle = router.query.page.replace(/-/g, ' ').replace('and', '&')
  return (
    <div>
      <Meta title={`- ${pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)}`} />
      <Maintenance />
    </div>
  )
}

export default PrivacyPolicy
