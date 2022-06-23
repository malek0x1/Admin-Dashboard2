import { createSlice } from "@reduxjs/toolkit";


const LoginSlice = createSlice({
    name: "Login",
    initialState: {
        db: { dbuser: "malek", dbpassword: "dbpassword" },
        isLoggedin: false,
        error: false,
    },
    reducers: {
        check: (state, action) => {
            if (action.payload.user == state.db.dbuser && action.payload.pwd == state.db.dbpassword) {
                state.isLoggedin = true;
                state.error = false;

            } else {
                state.error = true;

            }
        }
    }
})


export const { check } = LoginSlice.actions;
export default LoginSlice.reducer;