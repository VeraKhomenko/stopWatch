import React from 'react';

function BtnComponent({ start, stop, reset, wait, status }) {
    return (
        <div>
            {(status === 0) ?
                <button type="submit" className="stopwatch-btn stopwatch-btn-blu"
                    onClick={start}>Start</button> : ""
            }

            {(status === 1) ?
                <div>
                    <button type="submit" className="stopwatch-btn stopwatch-btn-red"
                        onClick={stop}>Stop</button>
                    <button type="submit" className="stopwatch-btn stopwatch-btn-blu"
                        onDoubleClick={wait}>Wait</button>
                    {/* onClick={wait} */}
                    <button type="submit" className="stopwatch-btn stopwatch-btn-yel"
                        onClick={reset}>Reset</button>
                </div> : ""
            }
            {(status === 2) ?
                <div>
                    <button type="submit" className="stopwatch-btn stopwatch-btn-red"
                        onClick={start}>Start</button>

                    <button type="submit" className="stopwatch-btn stopwatch-btn-yel"
                        onClick={reset}>Reset</button>
                </div> : ""
            }
            {(status === 3) ?
                <div>
                    <button type="submit" className="stopwatch-btn stopwatch-btn-red"
                        onClick={reset}>Stop</button>
                    <button type="submit" className="stopwatch-btn stopwatch-btn-blu"
                        onDoubleClick={start}>Start</button>

                    <button type="submit" className="stopwatch-btn stopwatch-btn-yel"
                        onClick={start}>Reset</button>
                </div> : ""
            }

        </div>
    );
}

export default BtnComponent;