'use client'

import React from 'react'

import { Button } from '@/shared/ui'

export default function Home() {
  const [activeButton, setActiveButton] = React.useState<string | null>(null)

  const answers = ['Single', 'In a relationship']
  return (
    <div className="mx-auto max-w-[330px]">
      <h1 className="mb-[30px]">So we can get to know you better, tell us about your relationship status.</h1>
      <div className="flex flex-col items-center gap-3">
        {answers.map((answer) => (
          <Button key={answer} onClick={() => setActiveButton(answer)} active={activeButton === answer}>
            {answer}
          </Button>
        ))}
      </div>
    </div>
  )
}
