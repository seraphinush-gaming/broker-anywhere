// OPCODE REQUIRED :
// - S_NPC_MENU_SELECT

// Version 1.31 r:00

module.exports = function BrokerAnywhere(d){

    // code
    function broker() { d.toClient('S_NPC_MENU_SELECT', { type: 28 }) }

    // command
	try {
		const Command = require('command')
		const command = Command(d)
		// NA
		command.add('broker', () => {
			broker()
			send(`<font color="#56B4E9">Summoned.</font>`)
		})
		// KR
		command.add('거래', () => {
			broker()
			send(`<font color="#56B4E9">소환됬습니다.</font>`)
		})
		function send(msg) { command.message(`[broker-anywhere] : ` + msg) }
	} catch (e) { console.log(`[ERROR] -- broker-anywhere module --`) }

}
