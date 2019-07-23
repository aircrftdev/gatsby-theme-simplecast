const theme = {
  useCustomProperties: true,
  initialColorMode: "dark",
  //breakpoints: ["540px", "768px", "992px", "1200px", "1920px"],
  breakpoints: ["992px", "1200px", "1920px"],
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 128, 256, 512],
  sizes: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 128, 256, 512],
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 32, 40, 48, 64],
  colors: {
    modes: {
      dark: {
        text: "rgba(255, 255, 255, 0.9)",
        background: "#1A2232",
        "background-lighten-10": "#232B3B",
        "background-lighten-20": "#2C3648",
        primary: "#A085FF",
        "primary-lighten-10": "#9D82FF",
        "primary-lighten-50": "#B6A6FF",
        "primary-lighten-70": "#D2C8FF",
        secondary: "#85FFD0",
      },
    },
  },
  radii: [5, "50%"],
  fontWeights: {
    body: 300,
    heading: 500,
  },
  lineHeights: {
    body: 1.675,
    heading: 1.125,
  },
  letterSpacings: {
    heading: "1.5",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
  },
  styles: {
    color: "primary",
    Header: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: ["100%", 400],
      minHeight: 300,
      maxHeight: 400,
      justifyContent: "flex-end",
      color: "text",
      "h1, h5": { m: 0 },
      h5: { mt: 1, fontSize: 1, opacity: 0.6 },
      ".content": {
        width: "100%",
        position: "absolute",
        pb: 8,
        px: 8,
        zIndex: 1,
        display: "flex",
        alignItems: "flex-start",
        button: {
          width: "100%",
          maxWidth: 7,
          height: 7,
          background: "transparent",
          border: "1px solid",
          borderColor: "text",
          color: "text",
          fontSize: "10px",
          borderRadius: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          mr: 3,
          mt: 2,
          svg: {
            mt: "1px",
            ml: "3px",
          },
        },
      },
    },
    root: {
      backgroundColor: "background",
      lineHeight: "body",
      fontFamily: "body",
      fontSize: [2, 3],
      color: "text",
      bg: "background",
      a: {
        color: "primary-lighten-50",
      },
      "a:hover": {
        color: "primary-lighten-70",
      },
      article: {
        p: [5, 8],
        pb: [2, 14],
        borderLeft: "2px solid",
        borderRight: "2px solid",
        borderColor: "background-lighten-10",
      },
      nav: {
        backgroundColor: "background",
        position: ["absolute", "static"],
        zIndex: 2,
        width: "100%",
        maxWidth: [375, 300],
        px: 5,
        pt: 40,
        a: {
          textDecoration: "none",
          color: "text",
          fontSize: 3,
          fontWeight: "heading",
        },
        li: {
          py: 0,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          ".summary": {
            fontSize: 2,
            lineHeight: 1.4,
            fontWeight: 300,
            opacity: 0.7,
            mt: 3,
          },
          ".active": {
            borderLeft: "3px solid",
            borderColor: "primary",
            backgroundColor: "background-lighten-10",
          },
          a: {
            px: 5,
            py: 4,
            borderLeft: "3px solid",
            borderColor: "background",
            fontSize: 4,
            width: "100%",
          },
          ":hover": {
            a: { borderColor: "background-lighten-10" },
            ".active": {
              borderColor: "primary",
            },
            button: {
              opacity: 1,
              ":hover": {
                opacity: 1,
              },
            },
          },
          h4: {
            mb: 0,
          },
          button: {
            position: "absolute",
            opacity: 0,
            ml: -3,
            backgroundColor: "background",
            border: "1px solid",
            borderColor: "text",
            color: "text",
            display: "flex",
            width: "100%",
            maxWidth: "24px",
            height: "24px",
            flexGrow: "1",
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
            svg: { mt: "1px", ml: "1px" },
            cursor: "pointer",
          },
        },
      },
      hr: {
        backgroundColor: "background-lighten-10",
        height: "2px",
      },
    },
    Container: {
      maxWidth: 1200,
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
  },
}

export default theme
