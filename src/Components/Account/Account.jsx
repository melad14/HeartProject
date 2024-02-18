import React, { useContext } from 'react'
import image from '../../Images/Capture.PNG'
import { AuthContext } from '../../Context/AuthContext.jsx'

export default function Account() {
    let { userData } = useContext(AuthContext)
    console.log(userData.user);
    return (
        <div className='container my-4 d-flex '>
            <form action="" className='w-100 mx-4 border border-dark border-1 rounded-3 p-3 shadow shadow-4' >

                <div className="row g-3 ">
                    <div className="col-md-12">
                        <img src={image} className='profile  d-block rounded-circle' alt="" />
                    </div>
                    <div className="col-md-4 p-1">
                        <div className=' border border-2 rounded-2 shadow shadow-3 p-3'>
                            <label className='text-muted' htmlFor="name">Your Name :</label>
                            <h3 className='text-dark '>{userData.user.first_name} {userData.user.last_name} </h3>
                        </div>
                    </div>

                    <div className="col-md-4  p-1">
                        <div className=' border border-2 rounded-2 shadow shadow-3 p-3'>
                            <label htmlFor="age" className=' text-muted'>Age :</label>
                            <h3 className='text-dark '>{userData.user.age} </h3>
                        </div>
                    </div>
                    <div className="col-md-4  p-1">
                        <div className=' border border-2 rounded-2 shadow shadow-3 p-3'>
                            <label htmlFor="gender" className=' text-muted'>Gender</label>
                       
                            <h3 className='text-dark '>Male</h3>
                            
                        </div>
                    </div>

                    <div className="col-md-4  p-1">
                        <div className=' border border-2 rounded-2 shadow shadow-3 p-3'>
                            <label htmlFor="image" className=' text-muted'>Image Url</label>
                            <input type="string" className='form form-control ' name='image' />
                        </div>
                    </div>
                    <div className="col-md-4  p-1">
                        <div className=' border border-2 rounded-2 shadow shadow-3 p-3'>
                            <label htmlFor="phone" className=' text-muted'> Phone Number</label>
                            <input type="number" className='form form-control ' name='phone' />
                        </div>

                    </div>
                </div>


            </form>

        </div>
    )
}



