import {
  DashboardActionTypes,
  FETCH_DASHBOARD_DATA,
  SET_DASHBOARD_DATA,
  DELETE_TABLE_ROW,
  SET_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  GENERATE_NEW_DATA,
  REGISTER_FAILURE,
  SET_PROFILE_DATA,
} from "./actions";
import { DashboardState } from "./types";

const initialState: DashboardState = {
  data: null,
  loading: false,
  error: null,
  profile: null,
  auth: {
    accessToken: null,
    refreshToken: null,
  },
};

export const dashboardReducer = (
  state = initialState,
  action: DashboardActionTypes
): DashboardState => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: {
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        },
        error: null, 
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload, 
      };
    
    case REGISTER_FAILURE: 
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false, 
        error: null,
      };

    case FETCH_DASHBOARD_DATA:
      return { ...state, loading: true };
    
    case GENERATE_NEW_DATA:
      return { ...state, loading: true };

    case SET_DASHBOARD_DATA:
      return { ...state, loading: false, data: action.payload };
    
    case SET_PROFILE_DATA:
      return { ...state, loading: false, profile: action.payload };

    case DELETE_TABLE_ROW:
      return {
        ...state,
        data: state.data
          ? {
              ...state.data,
              developmentActivity: {
                ...state.data.developmentActivity,
                tableData: state.data.developmentActivity.tableData.filter(
                  (row) =>
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
