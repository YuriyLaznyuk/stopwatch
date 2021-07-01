import React from 'react';
import '../style/stopWatch.scss'

function StopWatch(props) {
    return (
        <div className='stopWatch'>
            <h3>Stop Watch</h3>
            <div className='stopWatch-show'>
                <div><span>Hr</span>
                    <span>min</span>
                    <span>sec</span>
                </div>
                <div className='stopWatch-control'>
                    <button>START</button>
                    <button>PAUSE</button>
                    <button>RESET</button>
                </div>

            </div>
        </div>
    );
}

export default StopWatch;