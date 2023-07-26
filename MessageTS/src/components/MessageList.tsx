import {Message} from './Message'

type MessageListProps = {
    messages: string[]
}

export const MessageList = (props: MessageListProps) => {
    return (
        <ul>
            {
                props.messages.map((message, index) =>
                <li key={index}><Message content={message}/></li>
                )
            }
        </ul>
    )
}
