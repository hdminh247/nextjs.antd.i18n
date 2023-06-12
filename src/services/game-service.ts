import axios from "axios";
import qs from "qs";

export const getGameListByCategory = async (data: any) => {
  const payload = qs.stringify(data);

  const config = {
    method: "post",
    url: `${process.env.NEXT_PUBLIC_API_SERVER_URL}/gamelist`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: payload,
  };

  return await axios(config);
};
