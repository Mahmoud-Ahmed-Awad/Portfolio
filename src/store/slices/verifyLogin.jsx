import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import GlobalConstants from "../../GlobalConstants";

export const verifyLogin = createSlice({
  name: "userVerify",
  initialState: async () => {
    try {
      const res = await axios.get(
        `${GlobalConstants.API_HOST}/user/get-new-tokens`,
        {
          withCredentials: true,
        }
      );
      return res.data.valid;
    } catch {
      return false;
    }
  },
  reducers: {
    setTrue: (state) => (state = true),
  },
});

export const { setTrue } = verifyLogin.actions;
export default verifyLogin.reducer;
