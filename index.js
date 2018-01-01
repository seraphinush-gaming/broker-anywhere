// OPCODE REQUIRED :
// - S_NPC_MENU_SELECT

// Version 1.34 r:00

module.exports = function BrokerAnywhere(d){

    // code
    function broker() { d.toClient('S_NPC_MENU_SELECT', { type: 28 }) }

    // command
	try {
		const Command = require('command')
		const command = Command(d)
		// KR
		command.add('거래', () => {
			broker()
			send(`소환됬습니다.`.clr('56B4E9'))
		})
		// NA
		command.add('broker', () => {
			broker()
			send(`Summoned.`.clr('56B4E9'))
		})
		function send(msg) { command.message(`[command-broker] : ` + [...arguments].join('\n\t - ')) }
	} catch (e) { console.log(`[ERROR] -- command-broker module --`) }

}

// credit : https://github.com/Some-AV-Popo
String.prototype.clr = function (hexColor) { return `<font color="#${hexColor}">${this}</font>` }
