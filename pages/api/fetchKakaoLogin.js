// pages/api/fetchKakaoLogin.js
import axios from "axios";

export const fetchKakaoLogin = async (code) => {

  const { data } = await axios.get(
    "https://101.79.11.3:9999:32189/kakaoAuth/", {
      params: {
        code: code
      }
    }
  ).then((response) => {
    return response
  })
    .catch((error) => {
      console.log(error)
    });

  return data;
}
