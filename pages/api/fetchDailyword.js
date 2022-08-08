// pages/api/fetchDailyword.js
import axios from "axios";

export const fetchDailyword = async () => {
  

  const { data } = await axios.get(
    "https://101.79.11.3:32189/dailyWords"
  ).then((response) => {
    return response
  })
    .catch((error) => {
      console.log(error)
    });

  return data;
}
