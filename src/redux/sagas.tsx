import {
  all,
  call,
  delay,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { DashboardData } from "./types";
import {
  setDashboardData,
  setLoading,
  FETCH_DASHBOARD_DATA,
  GENERATE_NEW_DATA,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  loginRequest,
  LOGIN_REQUEST,
  registerRequest,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  setProfileData,
  GET_PROFILE_REQUEST,
} from "./actions";
import api from "../service/api";
import urls from "../service/urls";
import { DashboardResponse, LoginResponse, ProfileResponse, RegisterResponse } from "../utils/types";

// Fetch dashboard data
function* fetchDashboardDataSaga() {
  try {
    yield delay(500);
    const response: DashboardResponse = yield call(
      api.get,
      urls.getDashboardData()
    );
    const data: DashboardData = yield response.data;
    yield put(setDashboardData(data));
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
  }
}

// Handle login with token storage and error handling
function* handleLogin(action: ReturnType<typeof loginRequest>) {
  try {
    yield put(setLoading(true));
    const response: LoginResponse = yield call(
      api.post,
      urls.login(),
      action.payload
    );

    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);

    yield put({
      type: LOGIN_SUCCESS,
      payload: {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      },
    });

    window.location.href = "/";
  } catch (error: any) {
    console.error("Login error:", error);
    yield put({
      type: LOGIN_FAILURE,
      payload: error.message || "Login failed",
    });
  } finally {
    yield put(setLoading(false));
  }
}

function* handleRegister(action: ReturnType<typeof registerRequest>) { 
   try {
     yield put(setLoading(true));
     const response: RegisterResponse = yield call(
       api.post,
       urls.register(),
       action.payload
     );

     console.log(response);

     window.location.href = "/login";
   } catch (error: any) {
     console.error("Register error:", error.response);
     yield put({
       type: REGISTER_FAILURE,
       payload: error?.response?.data?.error || "Registration failed",
     });
   } finally {
     yield put(setLoading(false));
   }
}

function* handleGetProfile() {
    try {
      yield put(setLoading(true));
      const response: ProfileResponse = yield call(
        api.get,
        urls.getProfile(),
      );
      yield put(setProfileData(response.data));  
    } catch (error: any) {
      console.error("Register error:", error.response);
    } finally {
      yield put(setLoading(false));
    }
} 

// Watcher sagas
export function* watchGenerateNewData() {
  yield takeEvery(GENERATE_NEW_DATA, fetchDashboardDataSaga);
}

export function* watchDashboardData() {
  yield takeLatest(FETCH_DASHBOARD_DATA, fetchDashboardDataSaga);
}

export function* watchGetProfile() {
  yield takeLatest(GET_PROFILE_REQUEST, handleGetProfile);
}

export function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}

export function* watchRegister() {
  yield takeLatest(REGISTER_REQUEST, handleRegister);
}

// Root saga
export function* rootSaga() {
  yield all([watchDashboardData(), watchGenerateNewData(), watchLogin(), watchRegister(), watchGetProfile()]);
}
