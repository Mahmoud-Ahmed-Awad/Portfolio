import { useEffect, useState } from "react";
import axios from "axios";
import GlobalConstants from "../GlobalConstants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTrue } from "../store/slices/verifyLogin";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const verifyLogin = useSelector((state) => state.verifyLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    return async () => {
      if (await verifyLogin) {
        navigate("/dashboard");
      }
    };
  }, []);
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${GlobalConstants.API_HOST}/user/login`,
        { email, password },
        { withCredentials: true }
      );
      if (res.data.valid === true) {
        dispatch(setTrue());
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  }
  return (
    <div className="bg-gradient-to-tr from-slate-950 to-slate-700 min-h-[calc(100vh-60px)] w-full flex justify-center items-center flex-col">
      <form className="p-5 border-2 border-solid border-slate-200 border-opacity-50 rounded-2xl max-w-96 w-full">
        <div className="relative w-full min-w-[200px] h-12">
          <input
            className="peer w-full h-10 bg-transparent text-stone-100 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-stone-100 placeholder-shown:border-t-stone-100 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-stone-100 focus:border-slate-600"
            placeholder=" "
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="invisible peer-invalid:visible text-red-600 text-xs pl-2">
            Enter Valid Email
          </p>
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-stone-100 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-stone-100 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-stone-100 peer-focus:text-stone-100 before:border-stone-100 peer-focus:before:!border-slate-600 after:border-stone-100 peer-focus:after:!border-slate-600">
            Email
          </label>
        </div>
        <div className="relative w-full min-w-[200px] h-10 mt-4">
          <input
            className="peer w-full h-full bg-transparent text-stone-100 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-stone-100 placeholder-shown:border-t-stone-100 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-stone-100 focus:border-slate-600"
            placeholder=" "
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-stone-100 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-stone-100 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-stone-100 peer-focus:text-stone-100 before:border-stone-100 peer-focus:before:!border-slate-600 after:border-stone-100 peer-focus:after:!border-slate-600">
            Password
          </label>
        </div>
        <button
          className=" text-white mt-3 text-center w-full bg-cyan-400 rounded-[7px] h-10 duration-300 hover:bg-cyan-600 hover:text-stone-300"
          onClick={handleLogin}
          type="submit"
        >
          Login
        </button>
      </form>
      <p className="text-red-600 mt-3">{error}</p>
    </div>
  );
}

export default Login;
