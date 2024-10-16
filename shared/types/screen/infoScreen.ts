import { IBaseScreen } from './baseScreen'
import { ScreenType } from './screenType'

export interface IInfoScreen extends IBaseScreen {
  type: ScreenType.INFO
  variables: never
  answers: never
  additionalText: never
  title: string
  description: string
  nextQuestionSlug?: string
}
