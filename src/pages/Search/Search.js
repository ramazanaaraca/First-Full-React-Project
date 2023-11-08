import React, { useState } from 'react'
import Wrapper from '../../Components/Wrapper'
import Input from '../../Components/Input'
import SearchIcon from '../../../src/assets/img/icon_searc.svg'
import Breadcumb from '../../Components/Breadcumb'
import { DISCOVER_ITEMS } from '../../data'
import Table from './Table'

const Search = () => {
  
    const [query , setQuery] = useState('');

    const keys = ['title' , 'paragraf']

    const handleChange = (e) => {
       setQuery(e.target.value) 
      }
    

    const search = (data) => {
      return  data.filter((item) => 
      keys.some((key) => item[key].toLowerCase().includes(query)
      )) 
    }

  return (
    <Wrapper
   
    >

    <Breadcumb
    pageName='Search Results'
    title='Search Results'
    nonParagraf={true}
    />    

   <div className='flex items-center justify-center flex-col px-[100px]'>
        <div className='md:w-[600px]'>
            <Input
            type='text'
            SearchIcon={SearchIcon}
            onChange={handleChange}
            value={query}
            ></Input>
        </div>

        <div className='self-start pt-[76px] mb-[50px]'>
            <p className='text-sm font-normal text-[#868686]'>' {query.toLocaleUpperCase()} ' için {search(DISCOVER_ITEMS).length} tane arama sonucu bulunmuştur.</p>
        </div>
        <Table data={search(DISCOVER_ITEMS)}/>
        
   </div>

   </Wrapper>
  )
}

export default Search