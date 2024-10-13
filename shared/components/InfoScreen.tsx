import React from 'react'

import type { IInfoScreen } from '../types'

interface Props {
  className?: string
  data: IInfoScreen
}

export const InfoScreen: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>
}
