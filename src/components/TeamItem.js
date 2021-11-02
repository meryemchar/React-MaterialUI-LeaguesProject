import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Item(props)
{


    const handleChange=(event,value)=>{
        console.log(value);
                                        }

    return (
        <ListItem>
            {/* <ListItemText>
                {props.id}
            </ListItemText> */}
            <ListItemAvatar>
                <Avatar src={props.img}/>
            </ListItemAvatar>
            <Link to={'/leagues/' + props.id} style={{ textDecoration: 'none', color:'white',margin:10  }}>
                {props.name}
            </Link>
            <Link to={'/teams/' + props.idTeam} style={{ textDecoration: 'none', color:'white',margin:10  }}>
                {props.nameTeam}
            </Link>
            {/* <ListItemText>
                {props.begin_at}
            </ListItemText>
            <ListItemText>
                {props.description}
            </ListItemText>
            <ListItemText>
                {props.end_at}
            </ListItemText>
            <ListItemText>
                {props.full_name}
            </ListItemText>
            <ListItemText>
                {props.league_id}
            </ListItemText>
            <ListItemText>
                {props.modified_at}
            </ListItemText>
            <ListItemText>
                {props.name}
            </ListItemText>
            <ListItemText>
                {props.season}
            </ListItemText>
            <ListItemText>
                {props.slug}
            </ListItemText>
            <ListItemText>
                {props.tier}
            </ListItemText>
            <ListItemText>
                {props.winner_type}
            </ListItemText>
            <ListItemText>
                {props.year}
            </ListItemText> */}
            
        </ListItem>
    );
}

export default Item;