import React, {useRef, useState} from 'react'
import Input from "../UI/input/Input";
import PageTitle from "./PageTitle";
import SortBlock from "./SortBlock";

// function getPureNum(e) {
//     const nonExist = []
//     arr = arr.filter((num) => num !== e.target.value)
//     copyWindow.innerHTML = arr.join(' ')
//
//     arr.forEach(num => {
//         if (e.target.value !== num) {
//             copyWindow2.innerHTML = e.target.value.trim()
//         }
//
//
//     })
//     e.target.value = ''
// }
//
// function getNonExistentNum(e) {
//
//     arr.forEach(num => {
//
//     })
// }
//
//

//
// dellNumbers.addEventListener('change', getPureNum)
//
//
// function copytext() {
//     navigator.clipboard.writeText(copyWindow.textContent)
//
//     copyWindow.textContent ? copyWindow.innerHTML = 'Скопированно!!!' : ''
// }

// icon.addEventListener('click', copytext)


const Filter = props => {

    const [consoleInput, setConsoleInput] = useState({
        labelName: 'Вставь Номера накладных из прибывшей консолидации',
        inputId: 'input-for-array',
        type: 'text',
        className: 'validate'
    })
    const [dellInput, setDellInput] = useState({
        labelName: 'Сканируй накладные, которые не нужно печатать',
        inputId: 'input-for-dell',
        type: 'number',
        className: 'validate'
    })


    const inputId = useRef(null)


    const onInputHandler = (e) => {
        const copy = Object.assign([], props.insertItem)
        if (e.target.getAttribute('data') === 'console') {
            e.target.value.split(' ').forEach(num => {
                copy.push(num)
            })
            props.setInsertItem(copy)
            console.log(props.insertItem)
        }
        console.log(props.insertItem)
    }

    const onFocusInHandler = e => {
        document.querySelector(`[for="${e.target.id}"]`)
            .classList.add('active')
    }

    const onFocusOutHandler = e => {
        if (!e.target.value)
            document.querySelector(`[for="${e.target.id}"]`)
                .classList.remove('active')
    }


    function getPureNum(e) {
        props.setInsertItem(props.insertItem.filter((num) => num !== e.target.value.trim()))
        e.target.value = ''
    }

    return (
        <div className="container">
            <br/><br/>
            <PageTitle
                title={'Фильтр накладных CDEK'}
            />
            <div className="row center">
                <div className="app-wrap">
                    <Input
                        dataTag={'console'}
                        input={inputId}
                        labelName={consoleInput.labelName}
                        inputId={consoleInput.inputId}
                        type={consoleInput.type}
                        className={consoleInput.className}
                        onFocusIn={onFocusInHandler}
                        onFocusOut={onFocusOutHandler}
                        onInput={onInputHandler}
                    />
                    <Input
                        input={inputId}
                        labelName={dellInput.labelName}
                        inputId={dellInput.inputId}
                        type={dellInput.type}
                        className={dellInput.className}
                        onFocusIn={onFocusInHandler}
                        onFocusOut={onFocusOutHandler}
                        onChange={getPureNum}
                    />
                    <SortBlock
                        pureNum={props.insertItem}
                    />
                </div>
            </div>
            <br/><br/>
        </div>
    )
}


export default Filter;