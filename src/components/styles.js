import { makeStyles } from "@material-ui/core";

const colors = {
  white: "#fff",
  lightShadow: "0 5px 15px rgba(0, 0, 0, 0.1);",

  priamry1: "hsl(205, 86%, 17%)",
  primary2: "hsl(205, 77%, 27%)",
  primary5: "hsl(205, 78%, 60%)",
  priamry8: "hsl(205, 86%, 81%)",

  gray3: "hsl(209, 34%, 30%)",
  transition: "all 0.3s linear",
};

const useStyles = makeStyles((theme) => {
  return {
    //utility

    height: {
      height: "100%",
      padding: "2rem",
    },

    width: {
      width: "100%",
    },

    nav: {
      background: colors.white,
      boxShadow: colors.lightShadow,
    },

    navHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem",
    },

    navToggle: {
      fontSize: "1.5rem",
      color: colors.primary5,
      background: "transparent",
      borderColor: "transparent",
      transition: colors.transition,
      cursor: "pointer",

      "&:hover": {
        color: colors.priamry1,
        transform: "rotate(90deg)",
      },
    },

    logo: {
      height: 40,
    },

    links: {
      "& a": {
        color: colors.gray3,
        fontSize: "1rem",
        textTransform: "capitalize",
        letterSpacing: colors.spacing,
        display: "block",
        padding: " 0.5rem 1rem",
        transition: colors.transition,

        "&:hover": {
          background: colors.priamry8,
          color: colors.primary5,
          paddingLeft: "1.5rem",
        },
      },
    },

    linksContainer: {
      height: 0,
      overflow: "hidden",
      transition: colors.transition,
    },

    showContainer: {
      height: "10rem",
    },

    [`@media (min-width: 800px)`]: {
      navCenter: {
        maxWidth: 1170,
        margin: " 0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: " 1rem",
      },

      navHeader: {
        padding: 0,
      },

      navToggle: {
        display: "none",
      },

      linksContainer: {
        height: "auto !important",
      },

      links: {
        display: "flex",

        "& > a": {
          padding: 0,
          margin: " 0 0.5rem",

          "&:hover": {
            padding: 0,
            background: "transparent",
          },
        },
      },
    },

    navHeading: {
      color: colors.primary2,
    },

    //vectors

    leftVector: {
      position: "absolute",
      left: 0,
      top: 0,
      maxHeight: "200vh",

      "& img": {
        width: "100%",
        height: "100%",
        display: "block",
      },
    },

    rightVector: {
      position: "absolute",
      right: 0,
      top: 80,

      "& img": {
        width: "100%",
        height: "100%",
        display: "block",
      },
    },

    //hero

    heroSection: {
      minHeight: "50vh",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",

      "& h2": {
        marginBottom: "2rem",
        color: "black",
      },

      "& h4": {
        color: colors.gray3,
      },
    },

    btnGroup: {
      display: "flex",
      gap: "2rem",
      marginTop: "2rem",

      "& button": {
        padding: "0.5rem 1rem",
      },
    },

    lowBtn: {
      border: "2px solid #3f51b5",
      colors: "#3f51b5 !important",
    },

    //blogs

    blogRouter: {
      display: "flex",
      gap: "2rem",
      textTransform: "uppercase",
      fontWeight: 800,

      "& span": {
        cursor: "pointer",
        color: colors.gray3,
      },
    },

    blogImage: {
      width: "100%",
      height: "100%",
      display: "block",
      borderRadius: "2rem",
    },

    blogContainer: {
      margin: "2rem 0rem",
      maxHeight: "200vh",
      overflowY: "scroll",
      overflowX: "hidden",

      "&::-webkit-scrollbar": {
        width: "0.4em",
      },
      "&::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.1)",
      },
    },

    blogText: {
      marginTop: "1rem",
      color: "black",
      display: "block",

      "& >div:first-child": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "1.5rem 0 3rem",

        "& h3": {
          display: "block",
          color: "black",
        },

        "& div": {
          fontSize: "1.5rem",

          "& svg": {
            marginRight: "1rem",
            cursor: "pointer",
          },
        },
      },

      "& h4:first-child": {
        color: colors.gray3,
      },

      "& p": {
        color: colors.gray3,
      },

      "& h4:last-child": {
        color: colors.gray3,
        marginTop: "2rem",
      },

      "& h3": {
        color: "black",

        "&:hover": {
          color: colors.primary5,
        },
      },
    },

    active: {
      backgroundColor: colors.primary8,
      color: `${colors.primary5} !important`,
      fontWeight: 800,
    },

    dialogHeading: {
      color: "black",
      marign: "1rem 0",
      paddingBottom: "1rem",
      fontWeight: 500,
    },

    dialogFieldWrapper: {
      margin: "1rem 0rem",
    },

    footer: {
      background: "#000051",
      padding: "3rem",
      justifyContent: "center",
    },

    footerSection: {
      width: "80%",
      margin: "auto",
    },

    footerText: {
      color: "white",

      "& h4": {
        fontSize: "2rem",
      },

      "& p": {
        color: "white",
        margin: "1rem 0rem",
        fontWeight: 100,
      },

      "& a": {
        color: "white",
        margin: "1rem 0rem",
        fontWeight: 100,
      },
    },

    footerTextDark: {
      color: "white",

      "& h4": {
        fontSize: "2rem",
      },

      "& p": {
        color: "white",
        margin: "1rem 0rem",
      },

      "& a": {
        color: "white",
        margin: "1rem 0rem",
      },
    },

    socialMediaIcon: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: "white",
      padding: "0.5rem",
      borderRadius: "50%",
      transition: "0.3s",

      "& svg": {
        fontSize: "1.5rem",
      },

      "&:hover": {
        transform: "translate(0, -5%)",
      },
    },
  };
});

export default useStyles;
