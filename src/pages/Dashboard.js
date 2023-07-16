import React,{useEffect, useState} from 'react'
import {RiSearch2Line} from 'react-icons/ri'
import {BiMoon} from 'react-icons/bi'
import {MdOutlineDashboardCustomize} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import { PolarChart } from '../component/PolarChart'

import { URLS } from '../component/Url'
import axios from 'axios'
import { RadarChart } from '../component/RadarChart'


 

export const Dashboard = () => {
    const [productData, setProductData] = useState([]) 
    async function getData() {
        await axios.get(URLS)
        .then((response)=>{
            const product = response.data.data;
            setProductData(product)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
//    console.log(productData)

    useEffect(() => {
        getData();
    }, [])

    

  return (
    <>
        <div className='h-16 flex justify-between px-4 items-center border border-gray-500 rounded-md w-full bg-gray-900'>
            <div className='flex gap-2'>
                <button type='search ' className='hover:bg-gray-300 hover:bg-opacity-20 rounded-full p-1'><RiSearch2Line size={26} className='text-gray-400'/></button>
                <input type='search' placeholder='Search' className='bg-transparent max-sm:hidden'/>
            </div>
            <div className='flex gap-2 text-[2rem] text-white'>
                <BiMoon className='hover:bg-gray-300 hover:bg-opacity-20 rounded-full p-1 cursor-pointer'/>
                <MdOutlineDashboardCustomize className='hover:bg-gray-300 hover:bg-opacity-20 rounded-full p-[0.3rem] cursor-pointer'/>
                <CgProfile className='hover:bg-gray-300 hover:bg-opacity-20 rounded-full p-[0.3rem] cursor-pointer'/>
            </div>
        </div>
        <div className=' mt-5 flex flex-col gap-8'>
            <div className='  flex max-md:flex-col gap-5'> 
                <div className='w-1/2 max-md:w-full flex  flex-auto items-center justify-center rounded-md border border-gray-500'>
                    <PolarChart datas={productData}/>
                </div>
                <div className='w-1/2 max-md:w-full flex flex-auto items-center justify-center rounded-md border border-gray-500  '>
                    <RadarChart datas={productData}/>
                </div>
            </div>

        </div>
    </>
  )
}
