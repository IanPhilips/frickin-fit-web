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
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        launch: {
          "0%": { transform: "" },
          "50%": { transform: " translateY(30vh) translateX(55vw) scale(2)" },
          "100%": { transform: "translateX(50vw)  translateY(200vh)"},
        },launchBig: {
          "0%": { transform: "" },
          "50%": { transform: " translateY(40vh) translateX(53vw) scale(2)" },
          "100%": { transform: "translateX(53vw)  translateY(200vh)"},
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