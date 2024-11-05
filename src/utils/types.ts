import { DashboardData } from "../redux/types";

export interface LoginResponse extends Response { 
    data: {
        accessToken: string;
      refreshToken: string;
  }
}

export interface RegisterResponse extends Response { 
    data: {
        message: string;
    }
}
export interface DashboardResponse extends Response {
    data: DashboardData;
}

export interface ProfileResponse extends Response { 
    data: {
        username: string;
        email: string;
    }
}