import {React, useParams,createContext} from 'react';
import  { useEffect, useState } from 'react';

import ListTeamsByGame from './ListTeamsbygame';

import Listleague2 from './listleague2';
import TeamsList from './TeamsList';
import ListTeam2 from './ListTeam2';
import Details from './details';
import DetailsTeams from './DetailsTeams';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import Toolbar from '@mui/material/Toolbar';
  import Typography from '@mui/material/Typography';
  import Button from '@mui/material/Button';
  import IconButton from '@mui/material/IconButton';
  import MenuIcon from '@mui/icons-material/Menu';
  import FormControl from '@mui/material/FormControl';
  import InputLabel from '@mui/material/InputLabel';
  import NativeSelect from '@mui/material/NativeSelect';


// import { FormControl } from '@mui/material';

import { fetchGames } from '../app/leaguesAPI.js';


export const VideoGameContext = createContext({
  currentGame: 0,
  setCurrentGame : (game) => {}
})



  export default function Navbar() {


    const [currentGame, setCurrentGame] = useState(()=>{

      const saved = localStorage.getItem('currentGame');
      const initialValue = JSON.parse(saved);
  
      return initialValue || 1;
    });

    
    useEffect(() => {
      localStorage.setItem('currentGame',JSON.stringify(currentGame))
    }, [currentGame])



    const [list, setList] = useState([]);
    
    async function fetchData()
    {   
      
      const data = await fetchGames();
        setList(data);
        console.log("la liste");
        console.log({list});
    }

    useEffect(() =>
    {
        fetchData();
    }, [])

    const handleChange = (event) =>
  {
    setCurrentGame(event.target.value);
    console.log(currentGame);
  }

    return (

      <>

<VideoGameContext.Provider value={{currentGame,setCurrentGame}}>
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor: "darkorchid"}} >
        
        <Link to="/leagues" style={{ textDecoration: 'none', color:'white',margin:10 }} >
          leagues
          </Link>
          
          <Link to="/teams" style={{ textDecoration: 'none', color:'white', margin:10  }} >
          teams
          </Link>
         
          <Link to="/leaguesGame" style={{ textDecoration: 'none', color:'white',margin:10 }} >
          leaguesByGame
          </Link>

          <Link to="/teamsGame" style={{ textDecoration: 'none', color:'white',margin:10 }} >
          teamsByGame
          </Link>

          
      
            <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native" style={{ color:'white', marginBottom:5 }}>
                Jeu vidéo
            </InputLabel>
            <NativeSelect
            value={currentGame}
            onChange={handleChange}
              // defaultValue={30}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
              style={{ color:'white', margin:10, backgroundColor:"darkorchid" }}
            >
                 {  list.map((el) => (
                      <option 
                      key={el.id}
                      value={el.id} 
                      style={{ color:'white', margin:10, backgroundColor:"darkorchid" }}
                      >
                          {el.name}
                      </option>        
                        ))
              
                      }    
            </NativeSelect>
          </FormControl>

      
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 60 }}
          >
              
          </IconButton>
         
        </Toolbar>
      </AppBar>
    </Box>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            
            <Route exact path="/leagues" component={TeamsList} />
            <Route exact path="/teams" component={ListTeam2} />
              
            <Route exact path="/leagues/:leagueId" component={Details} />
            <Route exact path="/teams/:teamId" component={DetailsTeams} />
            <Route exact path="/leaguesGame" component={Listleague2}/>
            <Route exact path="/teamsGame" component={ListTeamsByGame}/>
            {/* <Route path="/details">
            <Details />
          </Route> */}
          
          
          {/* <Route path="/leagues/:leagueId" children={<Child />} /> */}
        
 
          </Switch>
          </VideoGameContext.Provider>
        </>
      
    );
  }
  
  