/*
 * Explosion Punch
 * Ported Pocketmine Plugins
 * By Darius Ellert Klaus
*/

var actived = false,
	size = 5;
function procCmd(cmd) {
	var c = cmd.split(" ");
	if(c[0] == "expunch"){
		if(c[1] == "on") {
			actived = true;
			clientMessage("[ExplosionPunch] Explosion Punch Actived.");
		}
		if(c[1] == "off") {
			actived = false;
			clientMessage("[ExplosionPunch] Explosion Punch Unactived.");
		}
		if(c[1] == "size") {
			if(c[2]) {
				size = parseInt(Math.round(c[2]));
			} else {
				clientMessage("[ExplosionPunch] Please set the size");
			}
		}
	}
}

function useItem(x,y,z,itemId,blockId) {
	if(actived == true) {
		Level.explode(x,y,z,size);
	}
}
