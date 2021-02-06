import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#4caf50",
        secondary: "#9c27b0",
        accent: "#03a9f4",
        error: "#f44336",
        warning: "#ffeb3b",
        info: "#009688",
        success: "#ff9800",
      },
      light: {
        primary: "#4caf50",
        secondary: "#9c27b0",
        accent: "#03a9f4",
        error: "#f44336",
        warning: "#ffeb3b",
        info: "#009688",
        success: "#ff9800",
      },
    },
  },
});
