import { redirectToFirstQuestion } from '@/shared/utils'

export default async function NotFoundPage() {
  await redirectToFirstQuestion()
}
