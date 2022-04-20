import React, {useRef} from 'react'

const SortBlock = props => {
    const copyContent = useRef(null)

    function copytext() {
        navigator.clipboard.writeText(copyContent.current.textContent)
        if(copyContent.current.textContent)
            alert('Скопированно!!!')
    }

    return (
        <div className="col s12">
            <div className="card horizontal wrap">
                <div ref={copyContent}
                     className="copy-window">{props.pureNum.join(' ')}</div>
                <span>
                    <i
                        onClick={copytext}
                        id="icon" className="material-icons">filter_none</i>
                </span>
            </div>
        </div>
    )
}

export default SortBlock