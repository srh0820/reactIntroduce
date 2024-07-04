import logo from '../img/logo.svg'
import logo_hover from '../img/logo_hover.svg'
import hdscss from './scss/hd.module.scss'

function Hd() {
    return (
        <header>
            <div className={`container d-flex justify-content-between align-items-center ${hdscss.container}`}>
                {/* <h1><a href=""><img src="/img/logo.png" alt="" /></a></h1> */}
                <div className={`${hdscss.logo_container}`}>
                    <img src={logo} alt="Logo" className={`${hdscss.logo}`} />
                    <img src={logo_hover} alt="Hover Logo" className={`${hdscss.logo_hover}`} />
                </div>
                <ul className="gnb d-flex mb-0 ms-0">
                    <li><a href="">포트폴리오</a></li>
                    <li className='ms-3'><a href="">인물탐방</a></li>
                    <li className='ms-3'><a href="">사전인터뷰 및 제안</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Hd