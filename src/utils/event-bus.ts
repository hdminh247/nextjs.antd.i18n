const EventBus = {
  Event: {
    LOGIN_DIALOG: "LOGIN_DIALOG",
    TOGGLE_SIDEBAR: "OPEN_SIDEBAR",
    BUY_CRYPTO_DIALOG: "BUY_CRYPTO_DIALOG",
    ON_MENTION: "ON_MENTION", // Use in chat functionality,
    ON_MENTION_DOWN: "ON_MENTION_DOWN", // Move down cursor in mention list,
    ON_MENTION_UP: "ON_MENTION_UP", // Move up cursor in mention list
    ON_ESC: "ON_ESC", // Press ESC to close the list
  },

  on(event: any, callback: any) {
    // eslint-disable-next-line no-undef
    document.addEventListener(event, (e) => callback(e.detail));
  },
  dispatch(event: any, data = {}) {
    // eslint-disable-next-line no-undef
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(event: any, callback?: any) {
    // eslint-disable-next-line no-undef
    document.removeEventListener(event, callback);
  },
};

export default EventBus;
