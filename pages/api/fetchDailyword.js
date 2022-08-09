// pages/api/fetchDailyword.js
import axios from "axios";

export const fetchDailyword = async () => {
  

  const { data } = await axios.get(
    "https://175.45.193.46:32188/dailyWords"
  ).then((response) => {
    return response
  })
    .catch((error) => {
      console.log(error)
    });

  return data;
}
