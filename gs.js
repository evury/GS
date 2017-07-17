/*:
 * @plugindesc Calcul du niveau du héro par le niveau d'équipement
 * @author Stacks
 *
 * @help Tag du niveau de l'équipement <GS: X/>
 * Niveau global de l'équipe : $globalLevel
 * Commande pour actualiser le niveau de l'équipe : GSupdate
 */

var $globalLevel = null;

var alias_prototype_create = Scene_Map.prototype.create;
Scene_Map.prototype.create = function() {
    alias_prototype_create.call(this);
    $globalLevel = 0;
    for(var i = 0; i < $gameParty.members().length; i++)
    {
        $globalLevel += $gameParty.members()[i].level;
    }
    $gameVariables.setValue(34, $globalLevel);
};

var alias_prototype_removeActor = Game_Party.prototype.removeActor;
Game_Party.prototype.removeActor = function(actorId) {
    alias_prototype_removeActor.call(this, actorId);
    $globalLevel = 0;
    for(var i = 0; i < $gameParty.members().length; i++)
    {
        $globalLevel += $gameParty.members()[i].level;
    }
        $gameVariables.setValue(34, $globalLevel);
};

var alias_prototype_addActor = Game_Party.prototype.addActor;
Game_Party.prototype.addActor = function(actorId) {
    alias_prototype_addActor.call(this, actorId);
    $globalLevel = 0;
    for(var i = 0; i < $gameParty.members().length; i++)
    {
        $globalLevel += $gameParty.members()[i].level;
    }
    $gameVariables.setValue(34, $globalLevel);
};

var alias_prototype_onItemOk = Scene_Equip.prototype.onItemOk;
Scene_Equip.prototype.onItemOk = function() {
    alias_prototype_onItemOk.call(this);
    var allEquips = this.actor().equips();
    var heroLevel = 0;
    parseInt(heroLevel);
    for(var i = 0; i < allEquips.length; i++)
    {
        if(allEquips[i] != null)
        {
            heroLevel += parseInt(allEquips[i].meta.GS);
        }
    }
    if(heroLevel === 0)
    {
        heroLevel = 1;
    }
    this.actor().changeLevel(heroLevel, false);
    this.actor().recoverAll();
    $globalLevel = 0;
    for(var i = 0; i < $gameParty.members().length; i++)
    {
        $globalLevel += $gameParty.members()[i].level;
    }
    $gameVariables.setValue(34, $globalLevel);
};

var alias_prototype_optimize = Scene_Equip.prototype.commandOptimize;
Scene_Equip.prototype.commandOptimize = function() {
    alias_prototype_optimize.call(this);
    var allEquips = this.actor().equips();
    var heroLevel = 0;
    parseInt(heroLevel);
    for(var i = 0; i < allEquips.length; i++)
    {
        if(allEquips[i] != null)
        {
            heroLevel += parseInt(allEquips[i].meta.GS);
        }
    }
    if(heroLevel === 0)
    {
        heroLevel = 1;
    }
    this.actor().changeLevel(heroLevel, false);
    this.actor().recoverAll();
    $globalLevel = 0;
    for(var i = 0; i < $gameParty.members().length; i++)
    {
        $globalLevel += $gameParty.members()[i].level;
    }
    $gameVariables.setValue(34, $globalLevel);
};

var alias_prototype_clear = Scene_Equip.prototype.commandClear;
Scene_Equip.prototype.commandClear = function() {
    alias_prototype_clear.call(this);
    var allEquips = this.actor().equips();
    var heroLevel = 0;
    parseInt(heroLevel);
    for(var i = 0; i < allEquips.length; i++)
    {
        if(allEquips[i] != null)
        {
            heroLevel += parseInt(allEquips[i].meta.GS);
        }
    }
    if(heroLevel === 0)
    {
        heroLevel = 1;
    }
    this.actor().changeLevel(heroLevel, false);
    this.actor().recoverAll();
    $globalLevel = 0;
    for(var i = 0; i < $gameParty.members().length; i++)
    {
        $globalLevel += $gameParty.members()[i].level;
    }
    $gameVariables.setValue(34, $globalLevel);
};

var gs_command = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args){
    gs_command.apply(this);
    if(command === "GSupdate")
    {
        $globalLevel = 0;
        for(var i = 0; i < $gameParty.members().length; i++)
        {
            $globalLevel += $gameParty.members()[i].level;
        }
        $gameVariables.setValue(34, $globalLevel);
    }
};
