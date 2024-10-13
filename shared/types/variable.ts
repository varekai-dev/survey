export type Variable = Record<
  string,
  {
    questionId: number
    answers: Array<{
      answer: string
      insert: string
    }>
  }
>
