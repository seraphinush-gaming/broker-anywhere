// Version 1.37 r:00

const Command = require('command')

module.exports = function CmdBroker(d){
	const command = Command(d)

    // command
	command.add(['broker', '거래'], () => { d.send('S_NPC_MENU_SELECT', 1, { type: 28 }) })

}