import { IVariable } from '@/shared/types'

import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface IAnswer {
  slug: string
  question: string
  answer: string
  additionalText?: string
  variables?: IVariable
}

export interface ISurvey {
  answers: IAnswer[]
  surveySlug: string
}

export interface ISurveyState {
  surveyState?: Record<string, ISurvey>
}

type IAddAnswerPayload = IAnswer & { surveySlug: string }

const initialState: ISurveyState = {
  surveyState: undefined,
}

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<IAddAnswerPayload>) => {
      const { surveySlug, ...answer } = action.payload

      const currentSurvey = state.surveyState?.[surveySlug]
      if (currentSurvey) {
        const answerExist = currentSurvey.answers.find((a) => a.slug === answer.slug)
        if (answerExist) {
          currentSurvey.answers = currentSurvey.answers.map((a) => (a.slug === answer.slug ? answer : a))
        } else {
          currentSurvey.answers.push(answer)
        }
      } else {
        state.surveyState = {
          ...state.surveyState,
          [surveySlug]: {
            answers: [answer],
            surveySlug,
          },
        }
      }
    },
    removeLastAnswer: (state, action: PayloadAction<string>) => {
      const surveySlug = action.payload
      const currentSurvey = state.surveyState?.[surveySlug]
      if (currentSurvey) {
        currentSurvey.answers.pop()
      }
    },
    cleanSurveyState: (state) => {
      state.surveyState = undefined
    },
  },
})

export const { addAnswer, cleanSurveyState, removeLastAnswer } = surveySlice.actions
export const surveyReducer = surveySlice.reducer
