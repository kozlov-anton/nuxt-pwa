import type { Config } from "tailwindcss";
import { setCurrentContext } from "vue-router/experimental";

export default {
  content: ["./app/**/*.{vue,ts}"],
  theme: {
    extend: {
      fontFamily: {
        ua: ["eUkraine", "sans-serif"],
      },
      colors: {
        /*brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#0ea5e9",
          900: "#0c4a6e",
        },*/
        // or flat:
        primary: "#191919",
        secondary: "rgb(226, 223, 204)",
        sand: "#efdbb2",
        orange: "#fb890e",
        bronse: "#6b4b19",
        olive: "#6d8764",
      },
    },
    borderRadius: {
      chip: "8px",
      btn: "12px",
      card: "16px",
    },
  },
} satisfies Config;
