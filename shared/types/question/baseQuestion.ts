import { QuestionType } from './questionType'

export interface BaseQuestion {
  id: number
  slug: string
  type: QuestionType
  question: string
  dependsOnAnswer?: {
    id: number
    answers: Array<{
      value: string
      nextQuestionId?: number
    }>
  }
}
