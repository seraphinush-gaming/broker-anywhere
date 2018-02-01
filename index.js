// OPCODE REQUIRED :
// - S_NPC_MENU_SELECT

// Version 1.35 r:00

module.exports = function CmdBroker(d){

    // command
	try {
		const Command = require('command')
		const command = Command(d)
		command.add(['broker', '거래'], () => { d.toClient('S_NPC_MENU_SELECT', { type: 28 }) })
	} catch (e) { console.log(`[ERROR] -- cmd-broker module --`) }

}
