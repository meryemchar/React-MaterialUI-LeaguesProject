

export const fetchLeagues = async (numPage=2,nbrItems=5) =>
{
    

    const response = await fetch(
        process.env.REACT_APP_LEAGUE_API+'sort=&page='+numPage+'&per_page='+nbrItems,
        {
            // mode : 'cors',
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )

    const json = await response.json();
    return {json:json,headers: response.headers};
}


export const fetchLeaguesByGame = async (numPage=2,nbrItems=5,videogame_id) =>
{
    

    const response = await fetch(
       // process.env.REACT_APP_VIDEOGAMES+'/'+videogame_id+'/leagues?sort=&page='+numPage+'&per_page='+nbrItems,
       process.env.REACT_APP_API+'leagues?filter[videogame_id]='+videogame_id+'&sort=id&page='+numPage+'&per_page='+nbrItems,
       {
            // mode : 'cors',
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )

    const json = await response.json();
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    return {json:json,headers: response.headers};
}


export const fetchTeams = async (numPage=2,nbrItems=5) =>
{
    

    const response = await fetch(
        process.env.REACT_APP_TEAMS_API+'sort=&page='+numPage+'&per_page='+nbrItems,
        {
            // mode : 'cors',
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )

    const json = await response.json();
    return {json:json,headers: response.headers};
}


export const fetchDetails = async (id) =>
{
    

    const response = await fetch(
        process.env.REACT_APP_DETAILS+id,
        {
            // mode : 'cors',
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )

    const json = await response.json();
    console.log(json);
    return json;
}

export const fetchDetailsTeams = async (id) =>
{
    

    const response = await fetch(
        process.env.REACT_APP_DETAILSTEAMS+id,
        {
            // mode : 'cors',
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )

    const json = await response.json();
    console.log(json);
    return json;
}

export const fetchGames = async () =>
{
    
    console.log("hhhhhhhhhhhh");
    const response = await fetch(
        process.env.REACT_APP_VIDEOGAMES,
        {
            // mode : 'cors',
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )

    const json = await response.json();
     console.log("le fichier",json);
    return json;
}



export const fetchTeamsByGame = async (numPage=2,nbrItems=5,videogame_id) =>
{
    

    const response = await fetch(
        process.env.REACT_APP_API+'teams?filter[videogame_id]='+videogame_id+'&sort=id&page='+numPage+'&per_page='+nbrItems,
        {
            // mode : 'cors',
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )

    const json = await response.json();
    return {json:json,headers: response.headers};
}


