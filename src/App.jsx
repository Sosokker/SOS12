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
import {createTheme, ThemeProvider} from '@mui/material/styles';

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const defaultTheme = createTheme();

export default function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <AppBar position="relative"
                    sx={{
                        bgcolor: '#161E29',
                    }}
            >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Album layout
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: '#0A0E1A',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="#7DD6F6"
                            gutterBottom
                        >
                            SOS12
                        </Typography>
                        <Typography variant="h5" align="center" color="aliceblue" paragraph>
                            Something short and leading about the collection below—its contents,
                            the creator, etc. Make it short and sweet, but not too short so folks
                            don&apos;t simply skip over it entirely.
                        </Typography>
                        <Stack
                            sx={{pt: 4}}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained"
                                    sx={{
                                        bgcolor: '#5585A4',
                                        ":hover": {
                                            bgcolor: '#69ACCD',
                                        }
                                    }}
                            >Main call to action</Button>
                            <Button variant="outlined"
                                    sx={{
                                        color: '#69ACCD',
                                        borderColor: '#69ACCD',
                                        ":hover": {
                                            borderColor: 'aliceblue',
                                        }
                                    }}
                            >Secondary action</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container
                    sx={{
                        py: 8,
                        bgcolor: '#0A0E1A',
                    }} maxWidth="fit-content">
                    {/* End hero unit */}
                    <Grid container spacing={4}>

                        {/*# TODO:Edit the Jode here */}
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        bgcolor: '#2B3E52'
                                    }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random?wallpapers"
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="h2"
                                                    color="#7DD6F6">
                                            Jode1
                                        </Typography>
                                        <Typography color="aliceblue">
                                            This is a media card. You can use this section to
                                            describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" sx={{color: "#69ACCD"}}>View</Button>
                                        <Button size="small">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{bgcolor: '#161E29', p: 6}} component="footer">
                <Typography variant="h6" align="center" gutterBottom
                            sx={{color: "aliceblue"}}>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="aliceblue"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright/>
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}