/*
 * No Explosion
 * Ported Pocketmine Plugins
 * By Darius Ellert Klaus
*/

var noexplosion = false;

function procCmd(cmd) {
	var c = cmd.split(" ");
	if(c[0] == "noexplosion") {
		if(c[1] == "off") {
			noexplosion = false;
			clientMessage("[NoExplosion] Disabled");
		}
		if(c[1] == "on") {
			noexplosion = true;
			clientMessage("[NoExplosion] Enabled");
		}
	}
}

function entityRemovedHook(entity) {
	if(Entity.getEntityTypeId(entity) == 65 && noexplosion == true) {
		preventDefault();
	}
}

function deathHook(murderer,victim) {
	if(Entity.getEntityTypeId(victim) == 65 && noexplosion == true) {
		preventDefault();
	}
}
