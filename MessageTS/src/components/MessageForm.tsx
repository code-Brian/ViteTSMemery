
type MessageFormProps = {
    handleMessageSubmit: (event: any) => void
    handleMessageChange: (event: React.InputHTMLAttributes<HTMLInputElement>) => void
    message: string;
}

export const MessageForm: React.FC<MessageFormProps> = ({handleMessageSubmit, handleMessageChange,message}) => {
    return (
        <div>
            <form onSubmit={handleMessageSubmit}>
                <div>
                    <input type="text" value={message} onChange={handleMessageChange}/>
                </div>
                <div>
                    <button>Send Message</button>
                </div>
            </form>
        </div>
    )
}
