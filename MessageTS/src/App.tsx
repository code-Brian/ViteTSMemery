import {MessageList} from './components/MessageList'
import {MessageForm} from './components/MessageForm'
import {useState} from 'react'

function App() {

  const [message, setMessage] = useState<string>("")
  const [messageList, setMessageList] = useState<string[]>([])

  const handleMessageChange = (e:any) => {
      setMessage(e.target.value)
      console.log(message)
  }

  const handleMessageSubmit = (e:any) => {
    e.preventDefault()
    setMessageList([...messageList, message])
    setMessage("")
    console.log(messageList)
}
  return (
    
    <>
      <MessageForm handleMessageChange ={handleMessageChange} handleMessageSubmit={handleMessageSubmit} message={message}/>
      <MessageList messages={messageList}/>
    </>
  )
}

export default App
