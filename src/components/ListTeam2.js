import { CircularProgress, List} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchTeams } from '../app/leaguesAPI.js';
import Item from './TeamItem';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function ListTeam2()
{   
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [numpage,setNumpage]=useState(1);
    const nbritems=6;
    const [totalpages,setTotalpages]=useState(1);

    async function fetchData(numpage=1,nbritems)
    {
        setLoading(true);
        const data = await fetchTeams(numpage,nbritems);

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
    }, [numpage])


    let content;


    if(loading)
    {
        content = <CircularProgress colors="secondary" />
    }else
    {
        content = <List>
                    {
                        list.map((el) => (
                            <Item key={el.id} idTeam={el.id} nameTeam={el.name} img={el.image_url}/>
                        ))
                    }
                </List>
    }
    return (
        <div >
            {content}
            <Stack spacing={5} style={{ margin:30 }}>
            {/* <Typography>Page: {numpage}</Typography> */}
            <Pagination count={Math.ceil(totalpages/nbritems)} color="secondary" page={numpage} onChange={handleChange}  />
            </Stack>
            
        </div>
        // onChange={handleChange}
        
    );
}

export default ListTeam2;