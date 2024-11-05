import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Header from "../components/header";
import MobileNavigation from "../components/mobileNavigation";
import Navigation from "../components/navigation";
import { RootState } from "../redux/store";
import Dashboard from "./dashboard";
import { fetchDashboardData, profileRequest } from "../redux/actions";
import { useEffect } from "react";

function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDashboardData());
    dispatch(profileRequest());
  },[])
  const loading = useSelector((state: RootState) => state.loading);
  return (
    <div className="App">
      <Header />
      <Navigation />
      <MobileNavigation />
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <AiOutlineLoading3Quarters className="w-10 h-10 text-blue-500 animate-spin" />
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default Index;
