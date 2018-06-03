// Version 1.36 r:02

const Command = require('command')

module.exports = function CmdBroker(d){
	const command = Command(d)

    // command
	command.add(['broker', '거래'], () => { d.send('S_NPC_MENU_SELECT', 1, { type: 28 }) })

}