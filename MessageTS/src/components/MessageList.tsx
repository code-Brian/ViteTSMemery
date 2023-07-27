import {Message} from './Message'
import {MessageListProps} from '../types/Message.types'



export const MessageList: React.FC<MessageListProps> = ({messages}) => {
    return (
        <ul>
            {
                messages.map((message, index) =>
                <li key={index}><Message content={message}/></li>
                )
            }
        </ul>
    )
}
