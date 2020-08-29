import React, { useEffect, useState, useLayoutEffect } from 'react'

const Motion = () => {
    const [ ghostMotion, clearGhostMotion ] = useState(true)
    useLayoutEffect(() => clearGhostMotion(true), [ghostMotion])
    useEffect(() => {
        clearGhostMotion(false);
        return () => clearGhostMotion(true);
    }, [ghostMotion]);

    return (
        <>
            <div className='motion'>
                <video className="motion-video" controls>
                    <source src="https://www.dropbox.com/s/libbfc34hlgwmsf/Celia%20-%20Showreel_1st%20Draft%20%28Updated%29%20copy.mp4?raw=1" />
                </video>
            </div>
            <div className="ghost-div ghost-div--motion" style={{ background: `${ ghostMotion === true ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)'}` }}></div>
        </>
    )
}

export default Motion

// { ghostMotion, fillMotion, clearMotion }