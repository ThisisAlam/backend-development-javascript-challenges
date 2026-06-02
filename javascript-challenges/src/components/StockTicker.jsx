import React from 'react'

export default function StockTicker() {
    const [timer, setTimer] = React.useState("00:00:00");
    const [intervalId, setIntervalId] = React.useState(null);
    
    const [priceState, setPriceState] = React.useState(1.13);
    const [previousPrice, setPreviousPrice] = React.useState(1.13);

    function startTicker() {
        updateTime();
        updatePrice();
    }
    
    function updateTime(){
        if (intervalId) return; // Prevent multiple intervals
        const newTimer = setInterval(() => {
            setTimer(
                new Date().toLocaleTimeString('en-GB', {
                    hour12: false
                })
            );
        }, 1000);
        setIntervalId(newTimer);
    }
    
    function updatePrice() {
        const newPrice = setInterval(() => {
            const nextPrice = Number(
                (Math.random() * 3).toFixed(2)
            );

            setPreviousPrice(priceState);
            setPriceState(nextPrice);
        }, 5000);
    }

    function resetTicker() {
        clearInterval(intervalId);
        setIntervalId(null);
        setTimer("00:00:00");
        setPriceState(1.13);
    }

    return(
        <div className="stock-ticker-container">
            <div className="stock-information">
                <h2>QtechAI</h2>

                <div className="info-row">
                    <span>Symbol</span>
                    <span>QTA</span>
                </div>

                <div className="info-row">
                    <span>Price</span>
                    <span className={`
                        price 
                        ${
                           priceState > previousPrice
                            ? 'price-up'
                            : priceState < previousPrice
                            ? 'price-down'
                            : 'price-unchanged'
                        }
                        `}>{priceState}</span>
                </div>

                <div className="info-row">
                    <span>Time:</span>
                    <span>{timer}</span>
                </div>
            </div>

            <div className="stock-controls">
                <button 
                    className="start-btn" 
                    onClick={startTicker}
                >Start</button>
                <button className="reset-btn" onClick={resetTicker}>
                    Reset
                </button>
            </div>
        </div>
    )
}