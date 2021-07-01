import React, {useEffect} from 'react';
import '../style/stopWatch.scss';
import {useSelector, useDispatch} from "react-redux";

function StopWatch(props) {

    const dispatch = useDispatch();
    const {time, active, pause, timeout} = useSelector(state => state.timer);


    useEffect(() => {
        let interval = null;
        (active && !pause) ?

            interval = setInterval(() => {
                dispatch({type: 'tick', payload: 10});
            }, 10) :

            clearInterval(interval);

        return () => clearInterval(interval);
    }, [active, pause, time]);

    function pauseClick(e) {

        e.preventDefault();
        if (timeout === null) {
            dispatch({
                type: 'timeout', payload:
                    setTimeout(() => {
                        dispatch({type: 'timeout', payload: null});
                        dispatch({type: 'pause'});
                    },300)
            });


        }
    }

    function pauseDoubleClick(e) {

        e.preventDefault();
        clearTimeout(timeout);
        dispatch({type: 'timeout', payload: null});
        dispatch({type: 'pause'});

    }

    return (
        <div className='stopWatch'>
            <h3>stopwatch</h3>
            <div className='stopWatch-show'>
                <div><span className='show_digit'>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}</span>
                    <span className='show_colon'>:</span>
                    <span className='show_digit'>{('0' + Math.floor(time / 1000) % 60).slice(-2)}</span>
                    <span className='show_colon'>:</span>
                    <span className='show_digit'>{('0' + Math.floor(time / 10) % 100).slice(-2)}</span>
                </div>
                <div className='stopWatch-control'>
                    {!active && <button onClick={() => dispatch({type: 'start'})}>START</button>}
                    {active && <button onClick={e => pauseClick(e)}
                                       onDoubleClick={e => pauseDoubleClick(e)}>WAIT</button>}
                    {active && <button onClick={() => dispatch({type: 'reset'})}>RESET</button>}
                </div>

            </div>
        </div>
    );
}

export default StopWatch;