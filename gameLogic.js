var myGame = {
  config : {
      lives: 6,
      speed : 0.5,
      actionButton: 'leftmouse',
      endTrigger : 'Trigger.end',
      screenImages : [
        {
          src:'/images/start.png',
          id : 'mainScreen'
        },
        {
          src : '/images/lose.png',
          id : 'loseScreen'
        },
        {
          src : '/images/win1.png',
          id : 'win1.png'
        }
      ],
      livesImage : {
        src : '/images/heart.png',
        dX:0,
        dY:10,
        dWidth:30,
        dHeight:30
      },
      cameraSettings : {
        offset : {
          x : 10,
          y : 0,
          z : -50.

        },
        rotation : {
          x: 0,
          y: 0,
          z: 0
        }
      }
  },

  scripts : function(){
    //TODO this is where you can add your own game logic
  }
};

function start(){
    myGame.game = new A3D.Game.Scroller(myGame.config);
    myGame.game.loadScene('/scenes/','my_first_game_meow.babylon',myGame.scripts);
}

document.addEventListener( "DOMContentLoaded", start, false );
