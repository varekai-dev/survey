import { BaseScreen } from './baseScreen'
import { ScreenType } from './screenType'

export interface InfoScreen extends BaseScreen {
  type: ScreenType.INFO
  variables: never
  answers: never
  additionalText: never
  description: string
}
