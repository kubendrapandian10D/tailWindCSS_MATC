import React from 'react'

const SearchBar = () => {
    return (
        <div>

            <div className='hidden md:block w-1186 '>

                <div className='mx-6 mt-2 h-60 px-6 py-3 flex justify-between rounded-lg drop-shadow-4ds@ bg-white'>
                    <div className='border-solid border w-742@ border-grayLight@ rounded-lg flex'>

                        <img src="./images/searchbar/search.svg" alt="Search button" className=" w-26_ h-26_ my-1 ml-2.5" />
                        <p className='font-normal font-roboto_ text-base text-grayMedium_  py-7_  px-2.5  self-center'>Search </p>
                    </div>

                    <div className='    w-213_   flex justify-between '>
                        <img src="./images/searchbar/bell.svg" alt="bell button" className=" w-26_ h-26_ my-1  " />
                        <div className='flex flex-col'>
                            <p className='font-bold text-xs font-roboto_ text-purpleTaupe_' >Puma Official Store </p>
                            <p className='font-bold text-xs font-roboto_ text-grayMedium_ self-end'>Change Seller</p>
                        </div>
                        <img src="./images/searchbar/status.svg" alt="status pic" className=" w-36_ h-36_  m-0 p-0  " />

                    </div>
                </div>
            </div>
        </div>

    )
}

export default SearchBar