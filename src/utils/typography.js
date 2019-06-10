import Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"
import gray from "gray-percentage"

const typography = new Typography({
  ...fairyGatesTheme,
  baseFontSize: '18px', // print 14px, screen 18px
  overrideThemeStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    li: {
      marginBottom: 0
    },
    h2: {
      ...adjustFontSizeTo("16px"), // print 12px, screen 16px
      textTransform: "uppercase",
      color: gray(41, "cool"),
      borderBottom: "2px solid #e6e6e6",
      marginTop: `${rhythm(2)} !important`
    },
    h3: {
      marginTop: `${rhythm(1)} !important`
    }
  })
})

export default typography