import React from 'react'

import type { IInfoScreen } from '../types'
import { Layout } from './Layout'

interface Props {
  className?: string
  data: IInfoScreen
}

export const InfoScreen: React.FC<Props> = ({ className, data }) => {
  return (
    <Layout showBack={!data.firstScreen} darkMode>
      <div className={className}></div>
    </Layout>
  )
}
