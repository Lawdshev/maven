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
  FETCH_DASHBOARD_DATA,
  GENERATE_NEW_DATA,
  setLoading,
} from "./actions";
import { getRandomName } from "../utils/helpers";

function* fetchDashboardDataSaga() {
  try {
    yield put(setLoading(true));
    yield delay(500);
    const response: Response = yield call(fetch, "/dashboardData.json");
    const data: DashboardData = yield response.json();
    yield put(setDashboardData(data));
    yield put(setLoading(false));
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
  }
}

function* handleGenerateNewData() {
  yield put(setLoading(true));
  yield delay(500);
  const newData = {
    metrics: [
      {
        label: "New Tickets",
        value: Math.floor(Math.random() * 100),
        change: Math.floor(Math.random() * 21 - 10),
        up: Math.random() > 0.5,
      },
      {
        label: "Closed Today",
        value: Math.floor(Math.random() * 50),
        change: Math.floor(Math.random() * 21 - 10),
        up: Math.random() > 0.5,
      },
      {
        label: "New Replies",
        value: Math.floor(Math.random() * 20),
        change: Math.floor(Math.random() * 21 - 10),
        up: Math.random() > 0.5,
      },
      {
        label: "Followers",
        value: Math.floor(Math.random() * 500),
        change: Math.floor(Math.random() * 21 - 10),
        up: Math.random() > 0.5,
      },
      {
        label: "Daily Earnings",
        value: Math.floor(Math.random() * 2000),
        change: Math.floor(Math.random() * 21 - 10),
        up: Math.random() > 0.5,
      },
      {
        label: "Products",
        value: Math.floor(Math.random() * 100),
        change: Math.floor(Math.random() * 21 - 10),
        up: Math.random() > 0.5,
      },
    ],
    developmentActivity: {
      chartData: Array.from({ length: 5 }, (_, i) => ({
        date: `2024-11-0${i + 1}`,
        value: Math.floor(Math.random() * 100),
      })),
      tableData: Array.from({ length: 7 }, (_, i) => ({
        user: getRandomName(), // Use the random name generator here
        commitMessage: `Commit message ${i}`,
        date: `2024-11-0${i + 1}`,
        actions: ["delete"],
      })),
    },
    chartSections: {
      feedbacks: Array.from({ length: 4 }, (_, i) => ({
        id: i + 1,
        user: getRandomName(), // Use the random name generator here
        comment: `Feedback comment ${i + 1}`,
        rating: Math.floor(Math.random() * 5) + 1,
        time: `${Math.floor(Math.random() * 24)} hours ago`,
      })),
      profits: [
        { date: "Mon", profit: Math.floor(Math.random() * 3000) },
        { date: "Tue", profit: Math.floor(Math.random() * 3000) },
        { date: "Wed", profit: Math.floor(Math.random() * 3000) },
        { date: "Thu", profit: Math.floor(Math.random() * 3000) },
        { date: "Fri", profit: Math.floor(Math.random() * 3000) },
        { date: "Sat", profit: Math.floor(Math.random() * 3000) },
        { date: "Sun", profit: Math.floor(Math.random() * 3000) },
      ],
      revenue: [
        { name: "Profit", value: Math.floor(Math.random() * 100) },
        { name: "Cost", value: Math.floor(Math.random() * 100) },
      ],
      sales: [
        { name: "North America", value: Math.floor(Math.random() * 50) },
        { name: "Europe", value: Math.floor(Math.random() * 50) },
        { name: "Asia", value: Math.floor(Math.random() * 50) },
        { name: "South America", value: Math.floor(Math.random() * 50) },
      ],
    },
  };

  yield put(setDashboardData(newData));
  yield put(setLoading(false));
}

// Watcher saga
export function* watchGenerateNewData() {
  yield takeEvery(GENERATE_NEW_DATA, handleGenerateNewData);
}

export function* watchDashboardData() {
  yield takeLatest(FETCH_DASHBOARD_DATA, fetchDashboardDataSaga);
}

export function* rootSaga() {
  yield all([watchDashboardData(), watchGenerateNewData()]);
}
