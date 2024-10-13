import { Layout, SurveyList } from '@/shared/components'
import { IData } from '@/shared/types'

export default async function Home() {
  const data = await import('../data.json')

  return (
    <Layout>
      <div className="mx-auto max-w-[330px]">
        <h1 className="mb-5 text-center">Surveys</h1>
        <SurveyList surveys={data.surveys as unknown as IData['surveys']} />
      </div>
    </Layout>
  )
}
