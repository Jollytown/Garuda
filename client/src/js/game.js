(function() {
  'use strict';

  function Game() {
    this.map = null;
  }

  Game.prototype = {
    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;
      this.world.setBounds(0, 0, 1920, 1920);
      this.map = this.add.sprite(x, y, 'map');
      this.map.anchor.setTo(0.5, 0.5);
      this.bmd = this.add.bitmapData(800, 600);
      this.bmd.context.lineWidth = 10;
      this.bmd.context.moveTo(0, 0);
      this.bmd.context.lineTo(60, 60);
      this.bmd.context.lineCap = 'butt';
      this.bmd.context.stroke();
      this.map = this.add.sprite(x, y, this.bmd);


      this.input.onDown.add(this.onInputDown, this);
      this.cursors = this.input.keyboard.createCursorKeys();
    },

    update: function () {
      if (this.cursors.up.isDown)
      {
          this.camera.y -= 4;
      }
      else if (this.cursors.down.isDown)
      {
          this.camera.y += 4;
      }

      if (this.cursors.left.isDown)
      {
          this.camera.x -= 4;
      }
      else if (this.cursors.right.isDown)
      {
          this.camera.x += 4;
      }
    },

    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['garuda'] = window['garuda'] || {};
  window['garuda'].Game = Game;

}());
