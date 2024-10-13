import { redirect } from 'next/navigation'

export const redirectToFirstQuestion = async () => {
  const data = await import('../../data.json')
  const firstSlug = data.screens.find((screen) => screen.firstScreen)?.slug
  redirect(`/survey/screens/${firstSlug}`)
}
