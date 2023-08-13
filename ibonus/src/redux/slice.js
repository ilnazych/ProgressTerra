import ky from "ky";
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {FETCH_DATA} from "../helpers/fetchData";


export const fetchBonusData = createAsyncThunk(
    'bonuses/fetchBonusData',
    async function (_, {rejectWithValue}) {
        try {
            const {accessToken} = await ky.post(FETCH_DATA.TOKEN_LINK, {json: FETCH_DATA.USER_DATA, headers: FETCH_DATA.HEADER}).json();
            const bonusInfoLink = `http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${accessToken}`
            const bonusInfo = await ky.get(bonusInfoLink, {headers: FETCH_DATA.HEADER}).json();
            return bonusInfo;
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

const bonuses = createSlice({
    name: "bonuses",
    initialState: {
        modalState: false,
        bonusInfo: undefined,
        status: null,
        error: null,
    },
    reducers: {
        openModal(state) {
            state.modalState = true
        },
        closeModal(state) {
            state.modalState = false
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBonusData.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchBonusData.fulfilled, (state, action) => {
                state.status = "resolved";
                state.bonusInfo = action.payload;
            })
            .addCase(fetchBonusData.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
    }
})

export default bonuses.reducer

export const {openModal, closeModal} = bonuses.actions;