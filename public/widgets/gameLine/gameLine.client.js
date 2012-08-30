feather.ns("training_gc");
(function() {
  training_gc.gameLine = feather.Widget.create({
    name: "training_gc.gameLine",
    path: "widgets/gameLine/",
    prototype: {
      onInit: function() {
        
      },
      onReady: function() {
        var me = this;
        me.domEvents.bind(me.get("#join"), 'click', function() {
            //alert(me.options.gamename);
            me.fire('join', me.options.gamename);
        });
        
      }
    }
  });
})();
