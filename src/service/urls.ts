const urls = {
    getDashboardData: () => "/dashboard",
    login: () => "/auth/login",
    register: () => "/auth/register",
    refreshAccessToken: () => "http://localhost:5000/auth/refresh",
    getProfile: () => "/dashboard/profile",
}

export default urls