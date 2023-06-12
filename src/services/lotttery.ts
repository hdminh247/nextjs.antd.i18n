import axios from "axios";
import qs from "qs";

export const getCurrentLotteryInfo = async () => {
  const config = {
    method: "post",
    url: `${process.env.NEXT_PUBLIC_API_SERVER_URL}/lottery/currentinfo`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  return await axios(config);
};

export const getCurrentLotteryRule = async () => {
  const config = {
    method: "post",
    url: `${process.env.NEXT_PUBLIC_API_SERVER_URL}/lottery/getpayout`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  return await axios(config);
};

export const getGameList = async () => {
  const config = {
    method: "post",
    url: `${process.env.NEXT_PUBLIC_API_SERVER_URL}/lottery/gameinfo`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  return await axios(config);
};

export const getGameDetail = async (data: any) => {
  const payload = qs.stringify(data);

  const config = {
    method: "post",
    url: `${process.env.NEXT_PUBLIC_API_SERVER_URL}/lottery/playerinfo`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: payload,
  };

  return await axios(config);
};
