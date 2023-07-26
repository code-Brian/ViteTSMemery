type MessageProps = {
    content: string
}

export const Message = (props: MessageProps) => {
    return (
        <span>{props.content}</span>
    )
}
