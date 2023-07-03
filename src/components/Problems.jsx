import * as React from 'react';
import {createContext, useState} from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import cards from '../constants/Card';
import myimage from '../../public/images/syntax.jpeg'
import {SectionWrapper} from "../hoc";
import Preproblems from "./Preproblems";

export const ThemeContext = createContext(null);

const defaultTheme = createTheme();

const Problems = () => {

    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <div className="Problems">
            <Preproblems/>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <ThemeProvider theme={defaultTheme}>
                    <CssBaseline/>
                    <main>
                        <Container
                            sx={{py: 8}} maxWidth="fit-content">
                            <div className="flex mt-4 border border-gray-500 p-4">
                                <Grid container spacing={4}>
                                    {cards.map((card) => (
                                        <Grid item xs={12} sm={6} md={4} key={card.id}>
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
                                                    image={myimage}
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
                                                    <Checkbox className="jodeCheckBox"/>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))}

                                </Grid>
                            </div>
                        </Container>
                    </main>
                </ThemeProvider> */

            </ThemeContext.Provider>
        </div>
    );
}

export default SectionWrapper(Problems, "");
