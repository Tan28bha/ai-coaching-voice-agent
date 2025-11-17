import { CreateUser } from '@/convex/users';
import { useUser } from '@stackframe/stack'
import {useMutation} from 'convex/react';
import React, { use, useEffect } from 'react'

function AuthProvider({children}) {

    const user=useUser();
    const createUser=useMutation(api.users.CreateUser);
    useEffect(()=> {
        console.log(user)
    },[user])

    const createNewUser=()=>{
        const result=await CreateUser({
        name:user?.displayName,
        email:user.primaryEmail
    })
    } 

  return (
    <div>
      {children}
    </div>
  )
}

export default AuthProvider
