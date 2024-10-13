import { Variable } from '../variable'
import { BaseQuestion } from './baseQuestion'
import { QuestionAnswer } from './questionAnswer'
import { QuestionType } from './questionType'

export interface QuestionSingleSelect extends BaseQuestion {
  type: QuestionType.SINGLE_SELECT
  additionalText?: string
  answers: QuestionAnswer[]
  variables?: Variable
  description: never
}
