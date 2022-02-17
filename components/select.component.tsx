import React, {useEffect, useRef, useState} from 'react';
import {LanguageType} from "../types/language.types";
import {languageActions} from "../store/action-creators/language/language.action-creators";
import {useDispatch} from "react-redux";
import {useOutsideClick} from "../hooks/useOutsideClick";
import {useTypedSelector} from "../hooks/useTypedSelector";

const languages = [
    {lang: "eng", id: 1},
    {lang: "cz", id: 2},
    {lang: "ukr", id: 3},
    {lang: "rus", id: 4},
    {lang: "hr", id: 5},
]

export const Select: React.FC = () => {
    const {language} = useTypedSelector(state => state.language)

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [value, setValue] = useState<LanguageType>(language)

    const dispatch = useDispatch()
    const wrapperRef = useRef(null)

    const onValueChangeHandler = (v: LanguageType) => {
        setValue(v as LanguageType)
        setIsOpen(!isOpen)
    }

    useOutsideClick(wrapperRef, () => setIsOpen(false))

    useEffect(() => {
        dispatch(languageActions.languageChanged(value))
    }, [value])

    return (
        <div ref={wrapperRef} className={'z-50 flex flex-col md:hover:scale-105 transform transition ease-out duration-200'}>
            <button data-dropdown-toggle="dropdown" onClick={() => setIsOpen(!isOpen)}
                    className="text-white bg-gray-600 hover:bg-gray-500 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                    type="button">
                {value}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div
                className={`${!isOpen ? 'hidden' : 'inline-flex'} bg-white absolute justify-center outline-none text-base list-none bg-white rounded divide-y divide-gray-100`}>
                <ul aria-labelledby="dropdownButton">
                    {languages?.map(l => {
                        return (
                            <li key={l.id} onClick={() => onValueChangeHandler(l.lang as LanguageType)}
                                className="bg-white shadow cursor-pointer py-2 px-6 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                {l.lang}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
