import { Breakpoint } from 'react-socks';

const MyMotto = () => {
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
            What is my motto when I develop? <br/>
            I believe anything that can be automated should be
            automated as much as possible. <br/>
        </div>
    )
}

export default MyMotto;