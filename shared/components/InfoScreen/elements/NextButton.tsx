/* eslint-disable tailwindcss/classnames-order */
'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/shared/ui'
import { IInfoScreen } from '@/shared/types'

import { useGetNextSlug } from '../hooks'

interface Props {
  className?: string
  data: IInfoScreen
}

export const NextButton: React.FC<Props> = ({ data }) => {
  const router = useRouter()

  const slug = useGetNextSlug(data.dependsOnAnswer) || data.nextQuestionSlug

  const handleClick = () => {
    if (slug) {
      router.push(slug)
    }
  }
  return (
    <Button className="text-[18px] text-purple" onClick={handleClick}>
      Next
    </Button>
  )
}
