import Links from "../constants/links";

import { success } from "./notification";

const Util = {
  handleResponseError: (error: any) => {
    if (Util.isStatus(error, 401)) {
      if (typeof window !== "undefined") {
        window.location.href = Links.user.LOGOUT;
      }
    } else return Promise.reject(error);
  },

  isStatus: (error: any, status: number) => error && error.response && error.response.status === status,

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    success("Copied to the clipboard");
  },

  scrollTo(el: any) {
    if (el) {
      const elLeft = el.offsetLeft + el.offsetWidth;
      const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth;

      const space = el.parentNode.offsetWidth - (el.offsetWidth + 8); // Space to make sure target item always placed at top

      // check if element not in view
      if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
        el.parentNode.scrollLeft = elLeft - elParentLeft + space;
      } else if (elLeft <= el.parentNode.offsetLeft + el.parentNode.scrollLeft) {
        el.parentNode.scrollLeft = el.offsetLeft - el.parentNode.offsetLeft + space;
      }
    }
  },

  replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(find, "g"), replace);
  },
};

export default Util;
