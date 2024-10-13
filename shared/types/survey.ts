import { IInfoScreen, ISingleSelectScreen } from './screen'

export interface ISurvey {
  screens: (IInfoScreen | ISingleSelectScreen)[]
  title: string
  slug: string
}
