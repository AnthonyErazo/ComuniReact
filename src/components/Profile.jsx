import React, { useEffect, useState } from 'react'
import DashboardLayout from './DashboardLayout'
import Breadcrumb from './Breadcrumb'
import { Link } from 'react-router-dom';
import { FaCamera, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { background, user } from '../assets';
import { updateUser } from '../services/userService';
import { useAuth } from '../context/AuthContext';
import { useAlert } from '../context/AlertContext';

export default function Profile() {
    const {user,setLoadingData}=useAuth()
    const {addAlert}=useAlert()
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const handleChangeEmail =(e)=>{
        e.preventDefault()
        const fecthChangeEmail=async()=>{
            try{
                setLoadingData(true)
                const response=await updateUser({email})
                addAlert('success',response.message)
            }catch (error){
                console.error('Error fetching change email:', error)
                addAlert('error',error.response.data.message)
            }finally{
                setLoadingData(false)
            }
        }
        fecthChangeEmail()
        setEmail('')
    }
    const handleChangePassword =(e)=>{
        e.preventDefault()
        const fecthChangePassword=async()=>{
            try{
                setLoadingData(true)
                const response=await updateUser({password})
                addAlert('success',response.message)
            }catch (error){
                console.error('Error fetching change password:', error)
                addAlert('error',error.response.data.message)
            }finally{
                setLoadingData(false)
            }
        }
        fecthChangePassword()
        setPassword('')
    }
    return (
        <>
            <Breadcrumb pageName="Profile" />
            <div className="overflow-hidden rounded-sm border shadow-default border-strokedark bg-boxdark">
                <div className="relative z-20 h-35 md:h-65">
                    <img
                        src={user.group.background?.ref||background}
                        alt={user.group.background?.name||'background'}
                        className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
                    />
                    <Link to={'/dashboard/myGroup'} className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
                        <label
                            htmlFor="cover"
                            className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90 xsm:px-4"
                        >
                            <input type="file" name="cover" id="cover" className="sr-only" />
                            <span>
                                <FaCamera />
                            </span>
                            <span>Edit</span>
                        </label>
                    </Link>
                </div>
                <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
                    <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
                        <div className="relative drop-shadow-2">
                            <div className="h-full w-full flex items-center justify-center rounded-full overflow-hidden">
                                <img src={user.group.img?.ref||user} alt={user.group.img?.name||"user"} />
                            </div>
                            <label
                                htmlFor="profile"
                                className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
                            >
                                <Link to={'/dashboard/myGroup'}>
                                    <FaCamera />
                                    <input
                                        type="file"
                                        name="profile"
                                        id="profile"
                                        className="sr-only"
                                    />
                                </Link>
                            </label>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="mb-1.5 text-2xl font-semibold  text-white">
                            {user.group?.name||`'Nombre de su grupo'`}
                        </h3>

                        <div className="mx-auto max-w-180">
                            <p className="mt-4.5 text-white">
                                {user.group?.description||`'Descripcion de su grupo'`}
                            </p>
                        </div>

                        <div className="mt-6.5">
                            <h4 className="mb-3.5 font-medium  text-white">
                                My social networks
                            </h4>
                            <div className="flex items-center justify-center gap-8">
                                {user.group.linkFacebook&&<a
                                    href={user.group.linkFacebook} 
                                    target="_blank"
                                    className="hover:text-primary"
                                    aria-label="social-icon"
                                >
                                    <FaFacebookF className='fill-white w-6' />
                                </a>}
                                {user.group.linkWhatsapp&&<a
                                    href={user.group.linkFacebook} 
                                    target="_blank"
                                    className="hover:text-primary"
                                    aria-label="social-icon"
                                >
                                    <FaWhatsapp className='fill-white w-6' />
                                </a>}
                                {user.group.linkInstagram&&<a
                                    href={user.group.linkInstagram} 
                                    target="_blank"
                                    className="hover:text-primary"
                                    aria-label="social-icon"
                                >
                                    <FaInstagram className='fill-white w-6' />
                                </a>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5'>
                <div className="flex flex-col gap-9">
                    <div className="rounded-sm border shadow-default border-strokedark bg-boxdark">
                        <form onSubmit={handleChangeEmail}>
                            <div className="p-6.5">
                                <div className="mb-4.5 flex flex-col gap-6">
                                    <div className="w-full">
                                        <label className="mb-2.5 block  text-white">
                                            Change Email
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            onChange={(e)=>setEmail(e.target.value)}
                                            value={email}
                                            name='email'
                                            placeholder="Enter your email"
                                            className="w-full rounded border-[1.5px] bg-transparent py-3 px-5  outline-none transition active:border-primary disabled:cursor-default disabled:bg-whiter border-form-strokedark bg-form-input text-white focus:border-primary"
                                        />
                                    </div>
                                </div>
                                <button type='submit' className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                    Change
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col gap-9">
                    <div className="rounded-sm border shadow-default border-strokedark bg-boxdark">
                        <form onSubmit={handleChangePassword} >
                            <div className="p-6.5">
                                <div className="mb-4.5 flex flex-col gap-6 ">
                                    <div className="w-full ">
                                        <label className="mb-2.5 block  text-white">
                                        Change Password
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name='password'
                                            onChange={(e)=>setPassword(e.target.value)}
                                            value={password}
                                            placeholder="Enter your password"
                                            className="w-full rounded border-[1.5px] bg-transparent py-3 px-5 outline-none transition active:border-primary disabled:cursor-default disabled:bg-whiter border-form-strokedark bg-form-input text-white focus:border-primary"
                                        />
                                    </div>
                                </div>
                                <button type='submit' className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                    Change
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
