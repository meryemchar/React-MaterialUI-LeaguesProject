import {React}from 'react';
import { useEffect, useState } from 'react';
import { fetchDetailsTeams } from '../app/leaguesAPI.js';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import Item from './TeamItem';
import { 
    useParams
  } from "react-router-dom";

  import { CircularProgress, List} from '@mui/material';



  import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function DetailsTeams () {

    const [details, setDetails] = useState(
        {name:'',
        image_url:'',
        current_videogame:'',
        players:
            []
            });
        const [loading, setLoading] = useState(false);

    const id=useParams().teamId;

    async function fetchData()
    {
        
        
        setLoading(true);
        
        const data = await fetchDetailsTeams(id);
        console.log("ana");
        //si fetchLeague terminé
        setDetails(data);
        setLoading(false);
        console.log(data);
        
    }

    useEffect(() =>
    {
        fetchData();
    }, [])

    let content;


    if(loading)
    {
        content = <CircularProgress colors="secondary" />
    }else
    {
       
        content=
        <div>
       

            <Card sx={{ maxWidth: 400 }}>
            <Typography gutterBottom variant="h4" component="div">
            {details.name}
            </Typography>
            <CardMedia
            component="img"
            height="auto"
            image={details.image_url}
            alt=""
            />
            
            
           
            <CardActions>
            {/* <dl>
                <dt>site web</dt>
                    <dd><a href={details.url}> site web </a></dd>
                <dt>jeu</dt>
                    <dd>{details.videogame.name}</dd>
            </dl> */}
            <List>
            <ListItem>
            {/* <ListItemText>
                <p>  jeu video: {details.current_videogame.name}</p>
            </ListItemText>     */}
            </ListItem>
            </List>
            </CardActions>
            <CardContent>
            {/* <List> */}
                    {
                        details.players.map((el) => (
                            // <Item key={el.id}
                            // description={el.description} 
                            // year={el.year}
                            // slug={el.slug}
                            // />
                        <dl key={el.id}>
                            <dt> Nom: </dt>
                                <dd>{el.name}</dd>
                            <dt>year: </dt>
                                <dd>{el.nationality}</dd>
                                {/* {el.winner_id} */}
                            <dt>slug: </dt>
                                <dd>{el.slug}</dd>
                        </dl>

                                            ))
                    }
                {/* </List> */}
                <Typography variant="body2" color="text.secondary">
       
            </Typography>
            </CardContent>
            </Card>
            </div>

       
    }
    return (
        <>
        <div>
        <h3>ID: { id } </h3>
      </div>

      <div style={{ marginBottom:30  }}>
            {content}
        </div>
        
        
        </>
        
    );
   


   
    
    
}

export default DetailsTeams;