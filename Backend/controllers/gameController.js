
const fs = require("fs");

/**
* Desc : get GAME
 * Route: GET /api/games
 * Access: private
 */
const getGames = (req,res)=>{
    fs.readFile("./resources/class.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        res.status(200).json({data:JSON.parse(jsonString)});
      });
    
}

/**
 * Desc : create GAME
 * Route: POST /api/games
 * Access: private
 */
const setGame = (req,res)=>{
    res.status(200).json({'message':"Game created successfully"});
}

/**
 * Desc : update GAMEs
 * Route: PUT /api/games
 * Access: private
 * Params: game ID 
 */
const updateGame=(req,res)=>{
    res.status(200).json({'message':`Game updated successfully ${req.params.id}`});
} 

/**
 * Desc : delete GAME
 * Route: DELETE /api/games
 * Access: private
 * Params: game ID 
 */
const deleteGame=(req,res)=>{
    res.status(200).json({'message':`Game deleted successfully ${req.params.id}`});
}

module.exports ={
    getGames,
    setGame,
    updateGame,
    deleteGame
}