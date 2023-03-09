import React from 'react'
import { Input } from '@/types/types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { setValue, setFetchValue } from '@/redux/inputSlice'
import debounce from 'lodash.debounce'


const MyInput: React.FC<Input> = ({ placeholder }) => {

    const dispatch = useDispatch()
    const value = useSelector((state: RootState) => state.inputSlice.value)

    const updateSearchValue = React.useCallback(
        debounce((str: string) => {
            dispatch(setFetchValue(str));
        }, 500),
        [dispatch],
    );

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setValue(event.target.value));
        updateSearchValue(event.target.value);
    };

    return (
        <input placeholder={placeholder} className='bg-gray-200 mt-2 w-1/3 border-2 px-2 border-black  block' type="text" value={value} onChange={onChangeInput} />
    )
}

export default MyInput