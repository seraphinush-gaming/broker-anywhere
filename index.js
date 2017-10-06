// OPCODE REQUIRED :
// - S_NPC_MENU_SELECT

module.exports = function BrokerAnywhere(dispatch){
    
    // command
	try {
		const Command = require('command')
		const command = Command(dispatch)
		command.add('broker', () => {
			broker()
			send(`[broker-anywhere] : Summoned.`)
		})
		function send(msg) {
			command.message(`<font color="#FFFFFF">` + msg + `</font>`)
		}
	} catch (e) {
		console.log(`[ERROR] -- broker-anywhere module --`)
    }

	// via chat
	// implemented in Command module
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
