var alias_applyCrit = Game_Action.prototype.applyCritical;
Game_Action.prototype.applyCritical = function(damage) {
    AudioManager.playSe({name: "PK_SMAAASH.ogg", pan: 0, pitch: 100, volume: 100});
    return alias_applyCrit.call(this, damage);
};

