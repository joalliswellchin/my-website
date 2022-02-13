import { Breakpoint } from 'react-socks';

const WhoAmI = () => {
    return (
        <div>
            <Breakpoint medium up>
                <div className="paraMU">
                    <Info/>
                </div>
            </Breakpoint>
            <Breakpoint small down>
                <div className='paraSD'>
                    <Info/>
                </div>
            </Breakpoint>
        </div>
    )
}

const Info = () => {
    return (
        <div>
            It is great to have you here!
            <br/>
            In here I hope you can see the joys I have in the endeavours
            I have made, from coding to coffee
            <br/>
            Take a look around and I hope you enjoy your stay here!
        </div>
    )
}

export default WhoAmI;