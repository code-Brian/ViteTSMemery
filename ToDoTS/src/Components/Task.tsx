import {useState} from 'react'

interface todoProps {
    content: string;
}

export const Task = (props: todoProps) => {
    return (
        <li>{props.content}</li>
    )
}
