import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#9c27b0",
        secondary: "#ff9800",
        accent: "#607d8b",
        error: "#f44336",
        warning: "#ffc107",
        info: "#00bcd4",
        success: "#8bc34a",
      },
      light: {
        primary: "#9c27b0",
        secondary: "#ff9800",
        accent: "#607d8b",
        error: "#f44336",
        warning: "#ffc107",
        info: "#00bcd4",
        success: "#8bc34a",
      },
    },
  },
});
