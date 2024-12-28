import React from 'react'
import CustomerCard from '../../components/dashboard/Admin/customer-card'
import { useGetUsersQuery } from '../../redux/api/ApiRoutes'
import { useAuthContext } from '../../context/AuthContext'

const Customer = () => {
const {authToken} = useAuthContext()
const {data} = useGetUsersQuery(authToken.token || "")
console.log(data)
  return (
    <div className='w-full'>
        <div className='w-full  flex justify-center items-center'> 
            <h2 className='text-center text-4xl text-primary font-Ubuntu py-6'>Customers</h2>
        </div>
        <div className='w-full flex flex-wrap items-center justify-center px-8 md:px-0'>
            {       
                data?.map((user)=> (
                    <div className='px-4'>
                    <CustomerCard email={user?.email} orderCount={user?.orderCount} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Customer