import { BaseQuestion } from './baseQuestion'
import { QuestionType } from './questionType'

export interface QuestionInfo extends BaseQuestion {
  type: QuestionType.INFO
  variables: never
  answers: never
  additionalText: never
  description: string
}
