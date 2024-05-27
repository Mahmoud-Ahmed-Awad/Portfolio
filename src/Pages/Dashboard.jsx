import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  const navigate = useNavigate();
  const verifyLogin = useSelector((state) => state.verifyLogin);
  useEffect(() => {
    return async () => {
      if (!(await verifyLogin)) {
        navigate("/");
      }
    };
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-60px)] bg-gradient-to-tr from-slate-950 to-slate-700">
      <section className="p-5 text-white">
        <h1 className="text-3xl text-center font-bold shadow-lg">Skils</h1>
      </section>
    </div>
  );
}

export default Dashboard;
