import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    leagues : [],
    status : 'idle',
    error : null
}

export const leagueSlice = createSlice()