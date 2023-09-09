'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.'
import { useRouter, usePathname } from 'next/navigation'

import axios from 'axios'

interface IUser{
  id:number;
  username:string;
  email:string;
}

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname();
  const [login, setLogin] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>({
    id:-1,
    username:"",
    email:""
  });

  useEffect(() => {
    if(pathname==="/"){
    try {
      const getUserData = async () => {
        const response:any = await axios.get('/api/users/me').catch(err => console.log(err));
        if (response?.status === 200) {
          setUser(response.data.data);
          setLogin(true);
        }
        else if(response?.status === 400) {
          setLogin(false);
        }
      }
      getUserData();
    }
    catch (err: any) {
      console.log(err.message);
    }
  }
  }, [pathname])

  const logoutUser = async()=>{
    const response = await axios.get('/api/users/logout');
    if(response.data.success){
      setLogin(false);
      setUser({
        id:-1,
        username:"",
        email:""
      });
    }
    else{
      console.log(response)
    }
  }

  const pushSignin = () => {
    if(login){
      logoutUser();
    }
    else{
      router.push('/login');
    }
   }

  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex
      justify-between items-center sm:px-16 px-6 py-4'>
        <Link href="/" className='flex justify-center
        items-center'>
          <Image
            src="/logo.svg"
            alt="Car Dekhiye Logo"
            width={118}
            height={18}
            className='object-contain' />
        </Link>
        <div className="">{
          login ?  `Hi ${user?.username}!`: ""
        }</div>
        <CustomButton
          title={login ? "Logout" : "Sign In"}
          btnType="button"
          containerStyles='text-primary-blue
        rounded-full bg-white min-w-[130px]'
          handleClick={pushSignin} />

      </nav>
    </header>
  )
}

export default Navbar