import { IQuestionAnswer } from '../questionAnswer'
import { IVariable } from '../variable'
import { IBaseScreen } from './baseScreen'
import { ScreenType } from './screenType'

export interface ISingleSelectScreen extends IBaseScreen {
  type: ScreenType.SINGLE_SELECT
  additionalText?: string
  answers: IQuestionAnswer[]
  variables?: IVariable
  description: never
  nextQuestionSlug?: string
  question: string
}
