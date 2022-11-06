module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundImage:{
        "iphonex": "url('./img/1000x_square.png')"
    },
    extend: {
      display: ["group-hover"],
      keyframes: {
        wiggle: {
          "0%": { transform: "scale(0.97)" },
          "50%": { transform: "scale(1)" }
        },
        launch: {
          "0%": { transform: "" },
          "50%": { transform: " translateY(30vh) translateX(55vw) scale(2)" },
          "100%": { transform: "translateX(50vw)  translateY(150vh)"},
        },launchBig: {
          "0%": { transform: "" },
          "50%": { transform: " translateY(40vh) translateX(53vw) scale(2)" },
          "100%": { transform: "translateX(53vw)  translateY(150vh)"},
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
        launch: "launch 2000ms ease-in-out",
        launchBig: "launchBig 2500ms ease-in-out"
      }},
  },
  plugins: [],
}