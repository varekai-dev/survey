import { QuestionInfo } from './question/questionInfo'
import { QuestionSingleSelect } from './question/questionSingleSelect'

export interface Survey {
  questions: (QuestionInfo | QuestionSingleSelect)[]
}
