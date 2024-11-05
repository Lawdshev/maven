export interface TableRow {
  user: string;
  commitMessage: string;
  date: string;
}

export interface LineChart { 
  date: string;
  value: number;
}

export interface DevelopmentActivity {
  chartData: Array<LineChart>;
  tableData: TableRow[];
}

export interface ChartSections { 
  feedbacks: Array<Feedback>;
  profits: Array<{ date: string; profit: number }>;
  revenue: Array<{ name: string; value: number }>;
  sales: Array<{ name: string; value: number }>;
}

export interface Metrics {
  label: string;
  value: number;
  change: number;
}

export interface DashboardData {
  metrics:Array<Metrics>;
  developmentActivity: DevelopmentActivity;
  chartSections: ChartSections;
}

export interface DashboardState {
  data: DashboardData | null;
  loading: boolean;
  profile: ProfileData | null;
  error: string | null;
  auth: {
    accessToken: string | null;
    refreshToken: string | null;
  }
}

export interface Feedback {
  id: number;
  user: string;
  comment: string;
  rating: number;
  time: string;
}

export interface ProfileData { 
  username: string;
  email: string;
}