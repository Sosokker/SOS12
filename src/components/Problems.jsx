import * as React from 'react';
import { useState, useEffect } from 'react';
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
import cards from '../constants/Card';
import { SectionWrapper } from '../hoc';
import Cookies from 'js-cookie';
import Preproblems from "./Preproblems.jsx";


const CardItem = ({ card }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const savedCheckedValue = Cookies.get(`checkboxValue_${card.id}`);
    if (savedCheckedValue === 'true') {
      setChecked(true);
    }
  }, [card.id]);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    Cookies.set(`checkboxValue_${card.id}`, event.target.checked, {
      expires: 9999,
    });
  };

  return (
    <Grid item xs={12} sm={6} md={4} key={card.id} >
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
            pt: '56.25%',
            height: 0,
          }}
          image={card.img}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            color="#7DD6F6"
          >
            {card.title}
          </Typography>
          <Typography color="aliceblue">{card.describe}</Typography>
        </CardContent>
        <CardActions>
        <Button size="small">
          <a href={card.link} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </Button>
          <Checkbox
            className="jodeCheckBox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
        </CardActions>
      </Card>
    </Grid>
  );
};

const Problems = () => {

  return (
    <div className="Problems">
          <CssBaseline />
          <main>
            <Container sx={{ py: 8 }} maxWidth="fit-content">
                <Preproblems />
              <div className="flex mt-4 border border-gray-500 p-4">
                <Grid container spacing={4}>
                  {cards.map((card) => (
                    <CardItem card={card} key={card.id}/>
                  ))}
                </Grid>
              </div>
            </Container>
          </main>
    </div>
  );
};

export default SectionWrapper(Problems, "");
