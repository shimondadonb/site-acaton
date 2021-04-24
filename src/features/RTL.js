import React from "react";
import {create} from 'jss';
import rtl from 'jss-rtl';
import {StylesProvider, jssPreset} from '@material-ui/core/styles';
import {createMuiTheme} from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { heIL } from '@material-ui/core/locale';

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]});

const theme = createMuiTheme({
    palette: {
        primary: { main: '#1976d2' },
        direction: 'rtl',
    },
}, heIL);

export default function RTL(props) {
    return (
        <ThemeProvider theme={theme}>
            <StylesProvider  jss={jss}>
                {props.children}
            </StylesProvider>
        </ThemeProvider>
    );
}
