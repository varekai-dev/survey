import { redirectToFirstQuestion } from '@/shared/utils'

export default async function Home() {
  await redirectToFirstQuestion()
}
