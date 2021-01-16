class Form{
    constructor(){
        this.input = createInput("");
        this.input.position(250, 150);

        this.button = createButton("Play");
        this.button.position(275, 175);

        this.greeting = createElement("h6");
        this.greeting.position(250, 250);
    }




    display(){
        var title = createElement('h2');
        title.position(200, 50);
        title.html("Car Racing Game");        
        // Arrow functions
         
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            var name = this.input.value();
            this.greeting.html("Hello " + name);           
            playerCount++;
            player.index = playerCount;
            player.name = name;
            player.updatePlayerCount(playerCount);
            player.updatePlayerDetails();
           
        });

    }

}