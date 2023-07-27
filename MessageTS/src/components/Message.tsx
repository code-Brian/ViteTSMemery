import { SingleMessageProps } from "../types/Message.types"

export const Message: React.FC<SingleMessageProps> = ({content}) => {
    return (
        <span>{content}</span>
    )
}
