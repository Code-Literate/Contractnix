import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Aza {
	id?: string;
	accBank: string;
	title: string;
	type?: string;
	accName: string;
	accNo: string;
	thumbnail?: string | undefined;
	copies?: number;
	ownerId?: string;
}

const initialState = {
	isLoggedIn: false,
	data: null,
} as any;

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		AUTH_USER(state, action) {
			state.isLoggedIn = true;
			state.data = action.payload;
		},
		UPLOAD_AVATAR(state, action) {
			state.data = { ...state.data, photo: action.payload };
		},
		UPDATE_USER(state, action) {
			state.data = { ...state.data, ...action.payload };
		},
		UPDATE_USER_ACCOUNTS(state, action) {
			state.data = {
				...state.data,
				accounts: [...state?.data?.accounts, action.payload],
			};
		},
		UPDATE_SINGLE_ACCOUNT(state, action) {
			// Extract the updated account from the action's payload
			const updatedAccount = action.payload;

			// Find the index of the account to be updated in the current state
			const accountIndex = state.data.accounts.findIndex(
				(account: Aza) => account.id === updatedAccount.id
			);

			if (accountIndex !== -1) {
				// If the account with the provided ID exists in the state, update it
				state.data.accounts[accountIndex] = updatedAccount;
			}

			// Return a new state object to ensure immutability
			state.data = {
				...state.data,
				accounts: [...state.data.accounts],
			};
		},
		REMOVE_ACCOUNT(state, action) {
			// Extract the ID of the account you want to remove
			const accountIdToRemove = action.payload.id;

			// Create a new array with accounts excluding the one with the specified ID
			const updatedAccounts = state.data?.accounts.filter(
				(acc: Aza) => acc.id !== accountIdToRemove
			);

			// Return a new state object with the updated accounts array
			state.data = {
				...state.data,
				accounts: updatedAccounts,
			};
		},
		LOGOUT(state, action) {
			state.isLoggedIn = false;
			state.data = null;
		},
	},
});

export const {
	AUTH_USER,
	LOGOUT,
	UPLOAD_AVATAR,
	UPDATE_USER,
	UPDATE_USER_ACCOUNTS,
	UPDATE_SINGLE_ACCOUNT,
	REMOVE_ACCOUNT,
} = userSlice.actions;
export default userSlice.reducer;
