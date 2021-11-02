import { CircularProgress, List} from '@mui/material';
import React, {useContext, useEffect, useState } from 'react';
import { fetchTeamsByGame } from '../app/leaguesAPI.js';
import Item from './TeamItem';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { VideoGameContext } from './navbar';

function ListTeamsByGame()
{   
    const {currentGame} = useContext(VideoGameContext);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [numpage,setNumpage]=useState(1);
    const nbritems=5;
    const [totalpages,setTotalpages]=useState(1);

    async function fetchData(numpage=1,nbritems)
    {
        setLoading(true);
        console.log("avant fetch");
        const data = await fetchTeamsByGame(numpage,nbritems,currentGame);
        console.log("apres fetch");

        //si fetchLeague terminé
        setList(data.json);
        console.log(data.headers.get('x-total'));
        setLoading(false);
        setTotalpages(data.headers.get('x-total'));
    }

    const handleChange=(event,value)=>{
        console.log(value);
        setNumpage(value)};

    

    useEffect(() =>
    {
        fetchData(numpage,nbritems);
    }, [numpage,currentGame])


    let content;


    if(loading)
    {
        content = <CircularProgress colors="secondary" />
    }else
    {
        content = <List>
                    {
                        list.map((el) => (
                            <Item key={el.id} id={el.id} name={el.name} img={el.image_url}/>
                        ))
                    }
                </List>
    }
    return (
        <div className="Teams-list">
            {content}
            <Stack spacing={2} >
            {/* <Typography>Page: {numpage}</Typography> */}
            <Pagination style={{ margin:30 }}count={Math.ceil(totalpages/nbritems)} color="secondary" page={numpage} onChange={handleChange}  />
            </Stack>
            
        </div>
        // onChange={handleChange}
        
    );
}

export default ListTeamsByGame;