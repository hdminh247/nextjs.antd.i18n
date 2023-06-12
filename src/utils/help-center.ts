// Show chat as full screen
export const maximizeChat = () => {
  // @ts-ignore
  if (window["Tawk_API"] && window["Tawk_API"]?.maximize) {
    // @ts-ignore
    window["Tawk_API"] && window["Tawk_API"].maximize();
  }
};

// Toggle to show/hide chat window
export const toggleChat = () => {
  // @ts-ignore
  if (window["Tawk_API"] && window["Tawk_API"]?.toggle) {
    // @ts-ignore
    window["Tawk_API"] && window["Tawk_API"].toggle();
  }
};

// Show chat widget at right bottom corner
export const showWidget = () => {
  // @ts-ignore
  if (window["Tawk_API"] && window["Tawk_API"].showWidget) {
    // @ts-ignore
    window["Tawk_API"] && window["Tawk_API"].showWidget();
  }
};

// Show chat widget at right bottom corner
export const hideWidget = () => {
  // @ts-ignore
  if (window["Tawk_API"] && window["Tawk_API"].hideWidget) {
    // @ts-ignore
    window["Tawk_API"] && window["Tawk_API"].hideWidget();
  }
};
