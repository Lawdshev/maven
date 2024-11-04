import { DashboardActionTypes, FETCH_DASHBOARD_DATA, SET_DASHBOARD_DATA, DELETE_TABLE_ROW, SET_LOADING } from "./actions";
import { DashboardState } from "./types";


const initialState: DashboardState = {
  data: null,
  loading: false,
  error: null,
};

export const dashboardReducer = (
  state = initialState,
  action: DashboardActionTypes
): DashboardState => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case FETCH_DASHBOARD_DATA:
      return { ...state, loading: true };
    case SET_DASHBOARD_DATA:
      return { ...state, loading: false, data: action.payload };
    case DELETE_TABLE_ROW:
      return {
        ...state,
        data: state.data
          ? {
              ...state.data,
              developmentActivity: {
                ...state.data.developmentActivity,
                tableData: state.data.developmentActivity.tableData.filter(
                  (row: { user: any; commitMessage: any; }) =>
                    row.user !== action.payload.userName ||
                    row.commitMessage !== action.payload.commitMessage
                ),
              },
            }
          : null,
      };
    default:
      return state;
  }
};
