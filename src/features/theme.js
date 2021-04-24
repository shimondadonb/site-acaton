import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
    direction: "rtl",
    // typography: {
    //     fontFamily: [
    //         "Samim",
    //         "-apple-system",
    //         "BlinkMacSystemFont",
    //         '"Segoe UI"',
    //         "Roboto",
    //         '"Helvetica Neue"',
    //         "Arial",
    //         "sans-serif",
    //         '"Apple Color Emoji"',
    //         '"Segoe UI Emoji"',
    //         '"Segoe UI Symbol"'
    //     ].join(",")
    // },
    palette: {
        type: "light"
    },
    overrides: {
        MuiInputBase: {
            root: {
                // height: 40
            }
        }
    }
});
