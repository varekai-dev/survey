import { redirect } from 'next/navigation'

export default async function NotFoundPage() {
  const data = await import('../../data.json')
  const firstSlug = data.screens[0].slug
  redirect(`/survey/screens/${firstSlug}`)
}
