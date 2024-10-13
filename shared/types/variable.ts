export type IVariable = Record<
  string,
  {
    questionSlug: string
    answers: Array<{
      answer: string
      insert: string
    }>
  }
>
