import { CircularProgress, List} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchLeagues } from '../app/leaguesAPI.js';
import Item from './TeamItem';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function TeamsList()
{   
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [numpage,setNumpage]=useState(1);
    const nbritems=5;
    const [totalpages,setTotalpages]=useState(1);

    async function fetchData(numpage=1,nbritems)
    {
        setLoading(true);
        const data = await fetchLeagues(numpage,nbritems);

        //si fetchLeague terminé
        setList(data.json);
        console.log("xtotal : leagus : " + data.xtotal);
        setLoading(false);
        setTotalpages(data.xtotal);
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
                            <Item key={el.id} id={el.id} name={el.name} img={el.image_url}/>
                        ))
                    }
                </List>
    }
    return (
        <div className="Teams-list">
            {content}
            <Stack spacing={2} style={{color: 'white'}}>
            {/* <Typography>Page: {numpage}</Typography> */}
            <Pagination style={{ margin:30 }}count={Math.ceil(totalpages/nbritems)} color="secondary" page={numpage} onChange={handleChange}  />
            </Stack>
            
        </div>
        // onChange={handleChange}
        
    );
}

export default TeamsList;