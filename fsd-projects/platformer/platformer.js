$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 695, 400, 50, "yellow");
    createPlatform(325, 575, 300, 50, "blue");
    createPlatform(700, 500, 250, 50, "red");
    createPlatform(1050, 400, 250, 50, "white");
    createPlatform(1300, 300, 400, 50, "black");



    // TODO 3 - Create Collectables
    createCollectable("database", 400, 520);
    createCollectable("database", 700, 450);
    createCollectable("database", 1350, 250);
    createCollectable("database", 1200, 325);
  



    
    // TODO 4 - Create Cannons
    createCannon("right", 400, 1300);
    createCannon("top", 500, 750);
    createCannon("left", 500, 1698);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
