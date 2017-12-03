// OPCODE REQUIRED :
// - S_NPC_MENU_SELECT

// Version 1.3 r:01

module.exports = function BrokerAnywhere(d){
	
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
		function send(msg) {
			command.message(`[broker-anywhere] : ` + msg)
		}
	} catch (e) {
		console.log(`[ERROR] -- broker-anywhere module --`)
    }

	// via chat
	// implemented in command module
	/* 
	const chatHook = e => {
        if(!e.message.toLowerCase().includes('!broker')) return
		broker()
        return false
    }
    d.hook('C_CHAT', chatHook)
	d.hook('C_WHISPER', chatHook) 
	*/
	 
    // code
    function broker() {
        d.toClient('S_NPC_MENU_SELECT', { type: 28 })
	}

}
