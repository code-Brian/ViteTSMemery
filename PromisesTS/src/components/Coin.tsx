import {useState} from 'react'

export const Coin: React.FC = () => {
    const [numberOfTries, setNumberOfTries] = useState<number>(0)

    function tossCoin() {
        return Math.random() > 0.5 ? "heads":"tails"
    }

    function fiveHeads() {
        return new Promise<number>((resolve, reject) => {
            let headsCount = 0
            let attempts = 0
            while(headsCount < 5)
            {
                attempts++
                let result = tossCoin()
                console.log(`${result} was flipped.`)
                if(result === "heads") {
                    headsCount++
                }
                else{
                    headsCount = 0
                }
            }
            if(headsCount === 5) {
                resolve(attempts)
            }
            else {
                reject("No 5 heads in a row, yet!")
            }
            console.log(`It took ${attempts} tries to flip five "heads".`)
            return attempts
        })
    }

    const handleCoinToss = () => {
        fiveHeads()
        .then(res => setNumberOfTries(res))
        .catch(err => console.log(err))
        console.log("I bet this happens before the promise, b/c async lol")
    }

    return (
        <div>
            <h2>It took {numberOfTries} tries to get five "heads" in a row.</h2>
            <button onClick={handleCoinToss}>Get Flipt!</button>
        </div>
    )
}
