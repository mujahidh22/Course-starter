import React, { useState } from 'react'
import Card from './Card'

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    //returns you a list of all courses recieved from api response
    function getCourses() {
        if (category === "All") {
            let allCourses = []; // array to store courses data into a single array
            // inserting all the data into a single array
            Object.values(courses).forEach(array => {       //getting only VALUE from key-values pair and for each value running forEach loop
                array.forEach(data => {                   // getting every single value of VALUE and inserting into a single array
                    allCourses.push(data)
                })
            })
            return allCourses;
        }
        else{
            // main sirf specific category ka array pass krunga
            return courses[category];
        }

    }
    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map((course) => {
                    return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}> </Card>
                })
            }

        </div>
    )
}

export default Cards
