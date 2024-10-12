import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface ISurveyState {
  surveyState: Record<string, any>
}

const initialState: ISurveyState = {
  surveyState: {},
}

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<any>) => {
      state.surveyState = action.payload
    },
  },
})

export const { setAuthState } = surveySlice.actions
export const surveyReducer = surveySlice.reducer
