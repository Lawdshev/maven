import { DashboardData } from "./types";

export const FETCH_DASHBOARD_DATA = "FETCH_DASHBOARD_DATA";
export const SET_DASHBOARD_DATA = "SET_DASHBOARD_DATA";
export const DELETE_TABLE_ROW = "DELETE_TABLE_ROW";
export const GENERATE_NEW_DATA = "GENERATE_NEW_DATA";
export const SET_LOADING = "SET_LOADING";

export const fetchDashboardData = () => ({
  type: FETCH_DASHBOARD_DATA as typeof FETCH_DASHBOARD_DATA,
});

export const generateNewData = () => ({
  type: GENERATE_NEW_DATA,
});

export const setLoading = (isLoading: boolean) => ({
  type: SET_LOADING as typeof SET_LOADING,
  payload: isLoading,
});

export const setDashboardData = (data: DashboardData) => ({
  type: SET_DASHBOARD_DATA as typeof SET_DASHBOARD_DATA,
  payload: data,
});

export const deleteTableRow = (userName: string, commitMessage: string) => ({
  type: DELETE_TABLE_ROW as typeof DELETE_TABLE_ROW,
  payload: { userName, commitMessage },
});

export type DashboardActionTypes =
  | ReturnType<typeof fetchDashboardData>
  | ReturnType<typeof setDashboardData>
  | ReturnType<typeof deleteTableRow>
  | ReturnType<typeof setLoading>;
