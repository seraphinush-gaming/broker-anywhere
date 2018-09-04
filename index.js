// Version 1.38 r:00

module.exports = function CmdBroker(m){
	const cmd = m.command || m.require.command;

    // command
	cmd.add(['broker', '거래'], { 
		$none() { m.send('S_NPC_MENU_SELECT', 1, { type: 28 }); } 
	})

}