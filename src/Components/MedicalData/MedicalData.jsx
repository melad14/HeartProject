import React from 'react'

export default function MedicalData() {
    return <>

        <div className="container my-4 d-flex">


            <form action="" className='col-md-12 mx-4 border border-dark border-1 rounded-3 p-3 shadow shadow-4'>
                <h1 className='primary'>Medical Data</h1>

                <div className="row g-4 p-4 ">
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="age" >Age</label>
                        <input type="number" className='form form-control mt-2' name='age' />
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="gender">Gender</label>
                        <select className=' form-select mt-2' name="gender" id="">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="chesttype">Chest Pain Type</label>
                        <select className=' form-select mt-2' name="chesttype" id="">
                            <option value="true">True</option>
                            <option value="false">False</option>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>


                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="restingbp" >Resting BP</label>
                        <input type="string" className='form form-control mt-2' name='restingbp' />
                    </div>


                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="cholesterol" >Cholesterol Level</label>
                        <select className=' form-select mt-2' name="cholesterol" id="">
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="fastingbs" >Fasting BS</label>
                        <select className=' form-select mt-2' name="fastingbs" id="">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>

                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="restingec6" >Resting EC6</label>
                        <select className=' form-select mt-2' name="restingec6" id="">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>

                        </select>
                    </div>

                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="maxhr" > Max HR</label>
                        <input type="number" className='form form-control mt-2' name='maxhr' />
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="exerciseangina" >Exercise Angina</label>
                        <select className=' form-select mt-2' name="exerciseangina" id="">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>

                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="oldbeak" >Old Beak</label>
                        <input type="number" className='form form-control mt-2' name='oldbeak' />
                    </div>
                    

                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="stslope">ST-SLOPE</label>
                        <select className=' form-select mt-2' name="stslope " id="">
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="heartdisease">Heart Disease</label>
                        <select className=' form-select mt-2' name="heartdisease" id="">
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className='text-muted' htmlFor="kidney" > Kidney Disease</label>
                        <input type="string" className='form form-control mt-2' name='kidney' />
                    </div>


     







                </div>

            </form>


        </div>
    </>


}
