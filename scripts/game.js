class Game{
    constructor(){

    }








    getGameState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
            gameState = data.val();
        }, function(errorMsg) {
            console.log(errorMsg)
        });

    }

    updateGameState(stateValue){
        var databaseRef = database.ref("/");
        databaseRef.update({
            gameState : stateValue
        });        
    }

    start() {
        if(gameState === 0) {
            player = new Player();
            player.getPlayerCount();
            form = new Form();
            form.display();
        }
    }

    play(){
        
    }
}


