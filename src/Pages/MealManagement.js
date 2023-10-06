import React from 'react'
import Navbar from '../Components/Navbar'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";
import MealBox from '../Components/MealBox';
const MealManagement = () => {
    return (
        <>
            <Navbar />
            <h1 className='text-center'>Meal Management</h1>

            <h4 className='mt-5 text-center'>Chích chòe lửa</h4>
            <div className='d-flex justify-content-around row'>
                <MealBox image="https://image.lexica.art/md2/4aec8c39-4036-4f08-ae4b-30100d6f221c" title={"Dế"} content={'Cho chim non'} button={'Thay đổi'} />
                <MealBox image="https://image.lexica.art/md2/0ed086af-5167-4301-99bd-c26e4031161e" title={"Sâu"} content={'Cho chim chuyền'} button={'Thay đổi'} />
                <MealBox image="https://image.lexica.art/md2/57f316e9-3dac-431d-ade6-cede7d39e5af" title={"Cám"} content={'Cho chim trưởng thành'} button={'Thay đổi'} />
                <h4 className='mt-5 text-center'>Chích chòe than</h4>
                <MealBox image="https://image.lexica.art/md2/4aec8c39-4036-4f08-ae4b-30100d6f221c" title={"Dế"} content={'Cho chim non'} button={'Thay đổi'} />
                <MealBox image="https://image.lexica.art/md2/0ed086af-5167-4301-99bd-c26e4031161e" title={"Sâu"} content={'Cho chim chuyền'} button={'Thay đổi'} />
                <MealBox image="https://image.lexica.art/md2/57f316e9-3dac-431d-ade6-cede7d39e5af" title={"Cám"} content={'Cho chim trưởng thành'} button={'Thay đổi'} />
            </div>


        </>
    )
}

export default MealManagement