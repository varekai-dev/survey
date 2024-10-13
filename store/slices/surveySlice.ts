import { IVariable } from '@/shared/types'

import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface IStateAnswer {
  slug: string
  question: string
  answer: string
  variables?: IVariable
}

export interface ISurveyState {
  surveyState: IStateAnswer[]
}

const initialState: ISurveyState = {
  surveyState: [],
}

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<IStateAnswer>) => {
      const currentState = state.surveyState || []

      const answerExist = currentState.find((answer) => answer.slug === action.payload.slug)

      if (answerExist) {
        const newState = currentState.map((answer) => {
          if (answer.slug === action.payload.slug) {
            return action.payload
          }
          return answer
        })

        state.surveyState = newState

        return
      } else {
        state.surveyState = [...currentState, action.payload]
      }
    },
    cleanSurveyState: (state) => {
      state.surveyState = []
    },
  },
})

export const { addAnswer, cleanSurveyState } = surveySlice.actions
export const surveyReducer = surveySlice.reducer
