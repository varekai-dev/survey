import { QuestionAnswer } from '../questionAnswer'
import { Variable } from '../variable'
import { BaseScreen } from './baseScreen'
import { ScreenType } from './screenType'

export interface SingleSelectScreen extends BaseScreen {
  type: ScreenType.SINGLE_SELECT
  additionalText?: string
  answers: QuestionAnswer[]
  variables?: Variable
  description: never
}
