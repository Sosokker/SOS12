import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import {styled} from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import cards from './Card';
import {createContext, useState} from "react";

export const ThemeContext = createContext(null);

// switch theme button ---------------------------------------------------------------
const MaterialUISwitch = styled(Switch)(({theme}) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : 'white',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#7892B5',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));
// switch theme button ----------------------------------------------------------------

function Copyright() {
    return (
        <Typography variant="body2" color="#5585A4" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function App() {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className="App" id={theme}>
        <ThemeContext.Provider value={{theme, toggleTheme}}>

                <ThemeProvider theme={defaultTheme}>
                    <CssBaseline/>

                    <AppBar position="relative">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" noWrap>
                                SOS12 Problems Collection
                            </Typography>

                            <Typography variant="h6" color="inherit" noWrap className='anotherNav'>
                                <a href="https://www.youtube.com" target="_self">Another Nav </a>
                            </Typography>
                            <FormControlLabel
                                control={<MaterialUISwitch sx={{m: 1}} defaultChecked/>}
                                label=""
                                onChange={toggleTheme}
                                checked={theme === 'dark'}
                            />

                        </Toolbar>
                    </AppBar>

                    <main>
                        {/* Hero unit */}
                        <Box sx={{pt: 8, pb: 6,}}>
                            <Container maxWidth="sm">
                                <Typography
                                    component="h1"
                                    variant="h2"
                                    align="center"
                                    gutterBottom
                                >
                                    SOS12
                                </Typography>
                                <Typography component="h5" variant="h5" align="center" paragraph>
                                    Welcome to the 12th SOS camp, a preparation camp for SKE21 students.
                                    We hope that students will definitely gain knowledge
                                    and enjoyment.
                                </Typography>
                                <Stack
                                    sx={{pt: 4}}
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                >
                                    <Button
                                        className="headButton"
                                        variant="contained"
                                        href="https://www.cpe.ku.ac.th/?lang=th">
                                        CPE website
                                    </Button>
                                    <Button
                                        className="headButton"
                                        variant="contained"
                                        href="https://www.cpe.ku.ac.th/?lang=th">
                                        Secondary action
                                    </Button>
                                </Stack>
                            </Container>
                        </Box>
                        <Container
                            sx={{py: 8}} maxWidth="fit-content">
                            {/* End hero unit */}
                            <Grid container spacing={4}>

                                {/*# TODO:Edit the Jode here */}
                                {cards.map((card) => (
                                    <Grid item xs={12} sm={6} md={4}>
                                        {/*<img src={require("./images/syntax.jpeg")} alt="jode"/>*/}
                                        <Card
                                            sx={{
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            <CardMedia
                                                component="div"
                                                sx={{
                                                    // 16:9
                                                    pt: '56.25%',
                                                    height: 0,
                                                    // objectFit: 'cover',
                                                }}
                                                image={require(`${card.img}`)}
                                            />

                                            <CardContent sx={{flexGrow: 1}}>
                                                <Typography gutterBottom variant="h5" component="h2"
                                                            color="#7DD6F6">
                                                    {card.title}
                                                </Typography>
                                                <Typography color="aliceblue">
                                                    {card.describe}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small"><a
                                                    href={card.link}>View</a></Button>
                                            </CardActions>
                                            <Checkbox />
                                        </Card>
                                    </Grid>
                                ))}

                            </Grid>
                        </Container>
                    </main>
                    {/* Footer */}
                    <Box sx={{p: 6}} component="footer">
                        <Typography variant="h6" align="center" gutterBottom>
                            Footer
                        </Typography>
                        <Typography variant="subtitle1" align="center" component="p">
                            Something here to give the footer a purpose!
                        </Typography>
                        <Copyright/>
                    </Box>
                    {/* End footer */}
                </ThemeProvider>

        </ThemeContext.Provider>
    </div>
    );
}