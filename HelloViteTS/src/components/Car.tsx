type Props = {
    make: string
    model: string
    mpg: number
}

export const Car: React.FC<Props> = ({make, model, mpg}) => {
    return (
        <div>
            <h2>Check out this car:</h2>
            <ul>
                <li>{make}</li>
                <li>{model}</li>
                <li>{mpg}</li>
            </ul>
        </div>
    )
}
