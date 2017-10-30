// OPCODE REQUIRED :
// - S_NPC_MENU_SELECT

module.exports = function BrokerAnywhere(dispatch){
    
    // command
	try {
		const Command = require('command')
		const command = Command(dispatch)
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
	const chatHook = event => {
        if(!event.message.toLowerCase().includes('!broker')) return
		broker()
        return false
    }
    dispatch.hook('C_CHAT', 1, chatHook)
	dispatch.hook('C_WHISPER', 1, chatHook) 
	*/
	 
    // code
    function broker() {
        dispatch.toClient('S_NPC_MENU_SELECT', 1, { type: 28 })
	}

}
