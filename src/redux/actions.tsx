import { DashboardData, ProfileData } from "./types";

// Action Types
export const FETCH_DASHBOARD_DATA = "FETCH_DASHBOARD_DATA";
export const SET_DASHBOARD_DATA = "SET_DASHBOARD_DATA";
export const DELETE_TABLE_ROW = "DELETE_TABLE_ROW";
export const GENERATE_NEW_DATA = "GENERATE_NEW_DATA";
export const SET_LOADING = "SET_LOADING";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const GET_PROFILE_REQUEST = "GET_PROFILE_REQUEST";
export const SET_PROFILE_DATA = "SET_PROFILE_DATA";

//Register Actions
export const registerRequest = (credentials: {
  email: string;
  password: string;
  username: string;
}) => ({
  type: REGISTER_REQUEST as typeof REGISTER_REQUEST,
  payload: credentials,
});

export const registerSuccess = (data: {
  accessToken: string;
  refreshToken: string;
}) => ({
  type: REGISTER_SUCCESS as typeof REGISTER_SUCCESS,
  payload: data,
});

export const registerFailure = (error: string) => ({
  type: REGISTER_FAILURE as typeof REGISTER_FAILURE,
  payload: error,
})


// Login Actions
export const loginRequest = (credentials: {
  email: string;
  password: string;
}) => ({
  type: LOGIN_REQUEST as typeof LOGIN_REQUEST,
  payload: credentials,
});

export const loginSuccess = (data: {
  accessToken: string;
  refreshToken: string;
}) => ({
  type: LOGIN_SUCCESS as typeof LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE as typeof LOGIN_FAILURE,
  payload: error,
});

//profile
export const profileRequest = () => ({
  type: GET_PROFILE_REQUEST as typeof GET_PROFILE_REQUEST,
})


// Dashboard Actions
export const fetchDashboardData = () => ({
  type: FETCH_DASHBOARD_DATA as typeof FETCH_DASHBOARD_DATA,
});

export const setDashboardData = (data: DashboardData) => ({
  type: SET_DASHBOARD_DATA as typeof SET_DASHBOARD_DATA,
  payload: data,
});

export const setProfileData = (data: ProfileData) => ({
  type: SET_PROFILE_DATA as typeof SET_PROFILE_DATA,
  payload: data,
})

export const deleteTableRow = (userName: string, commitMessage: string) => ({
  type: DELETE_TABLE_ROW as typeof DELETE_TABLE_ROW,
  payload: { userName, commitMessage },
});

export const generateNewData = () => ({
  type: GENERATE_NEW_DATA as typeof GENERATE_NEW_DATA,
});

export const setLoading = (isLoading: boolean) => ({
  type: SET_LOADING as typeof SET_LOADING,
  payload: isLoading,
});

// Action Types
export type DashboardActionTypes =
  | ReturnType<typeof fetchDashboardData>
  | ReturnType<typeof setDashboardData>
  | ReturnType<typeof setProfileData>
  | ReturnType<typeof deleteTableRow>
  | ReturnType<typeof setLoading>
  | ReturnType<typeof loginRequest>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>
  | ReturnType<typeof registerRequest>
  | ReturnType<typeof registerSuccess>
  | ReturnType<typeof registerFailure>
  | ReturnType<typeof generateNewData>
  | ReturnType<typeof profileRequest>;
