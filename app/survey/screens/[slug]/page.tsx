import { redirect } from 'next/navigation'

import { InfoScreen, SingleSelectScreen } from '@/shared/components'
import { IInfoScreen, ISingleSelectScreen, ISurvey, ScreenType } from '@/shared/types'

import data from '../../../../data.json'

export async function generateStaticParams() {
  const slug = (data as ISurvey).screens.map((screen) => ({ slug: screen.slug }))
  return slug
}

export default async function ScreenPage({ params }: { params: { slug: string } }) {
  const data = await import('../../../../data.json')
  const screenData = data.screens.find((screen) => screen.slug === params.slug)

  if (!screenData) {
    return redirect('/')
  }

  const Component = {
    [ScreenType.INFO]: <InfoScreen data={screenData as unknown as IInfoScreen} />,
    [ScreenType.SINGLE_SELECT]: <SingleSelectScreen data={screenData as unknown as ISingleSelectScreen} />,
  }[screenData.type]

  return Component
}
