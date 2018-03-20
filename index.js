// Version 1.36 r:00

const Command = require('command')

module.exports = function CmdBroker(d){
	const command = Command(d)

    // command
	command.add(['broker', '거래'], () => { d.toClient('S_NPC_MENU_SELECT', { type: 28 }) })

}
