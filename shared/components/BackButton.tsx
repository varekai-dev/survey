'use client'

import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Props {
  className?: string
}

export const BackButton: React.FC<Props> = ({ className }) => {
  const router = useRouter()

  const handleClickBack = () => {
    router.back()
  }
  return (
    <button className={className} onClick={handleClickBack}>
      <Image src="assets/icons/chevron-left.svg" alt="back" width={24} height={24} />
    </button>
  )
}
