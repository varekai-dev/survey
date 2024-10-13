/* eslint-disable tailwindcss/classnames-order */

import React from 'react'

import type { IInfoScreen } from '../../types'
import { cn } from '../../utils'
import { Layout } from '../Layout'
import { NextButton } from './elements'

interface Props {
  className?: string
  data: IInfoScreen
}

export const InfoScreen: React.FC<Props> = ({ className, data }) => {
  return (
    <Layout showBack={!data.firstScreen} darkMode>
      <div className={cn('mx-auto max-w-[330px]', className)}>
        <h1 className="mb-5 text-center text-ghost-white">{data.title}</h1>
        <p className="mb-10 text-center font-light leading-6 text-ghost-white">{data.description}</p>
        <NextButton data={data} />
      </div>
    </Layout>
  )
}
