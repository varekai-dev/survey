import { redirect } from 'next/navigation'

import { InfoScreen, SingleSelectScreen } from '@/shared/components'
import { IData, IInfoScreen, ISingleSelectScreen, ScreenType } from '@/shared/types'

export async function generateStaticParams() {
  const data: { surveys: Record<string, { screens: { slug: string }[] }> } = await import('../../../../../data.json')
  const params: Record<'slug' | 'survey', string>[] = []

  Object.keys(data.surveys).forEach((survey) => {
    data.surveys[survey].screens.forEach((screen: { slug: string }) => {
      params.push({
        survey: survey,
        slug: screen.slug,
      })
    })
  })

  return params
}

export default async function ScreenPage({ params }: { params: { slug: string; survey: string } }) {
  const data = await import('../../../../../data.json')

  const screenData = (data as unknown as IData).surveys[params.survey].screens.find(
    (screen) => screen.slug === params.slug,
  )

  if (!screenData) {
    return redirect('/')
  }

  const Component = {
    [ScreenType.INFO]: <InfoScreen data={screenData as unknown as IInfoScreen} />,
    [ScreenType.SINGLE_SELECT]: <SingleSelectScreen data={screenData as unknown as ISingleSelectScreen} />,
  }[screenData.type]

  return Component
}
