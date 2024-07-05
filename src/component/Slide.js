import slidescss from './scss/slide.module.scss'

function Slide() {
    return (
        <section>
            <div className={`container d-flex justify-content-center align-items-center px-0 ${slidescss.container}`}>
                <p>슬라이드구역</p>
            </div>
        </section>
    )
}

export default Slide;