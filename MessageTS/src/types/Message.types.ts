export type MessageFormProps = {
    handleMessageSubmit: (event: any) => void
    handleMessageChange: (event: React.InputHTMLAttributes<HTMLInputElement>) => void
    message: string;
}

export type SingleMessageProps = {
    content: string
}

export type MessageListProps = {
    messages: string[]
}

export type MessageProps = {
    messageFormProps: MessageFormProps
    message: SingleMessageProps
    messageList: MessageListProps
}