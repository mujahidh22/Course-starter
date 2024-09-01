import React from 'react'

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory =  props.setCategory;

  function categoryHandler(title){
    setCategory(title)
  }
     
  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto py-4 justify-center'>
      
        {filterData.map((data)=>{   //hr ek filter data k liye button bna do
            return (
            <button className={`text-lg px-2 py-2 rounded-md font-medium text-white bg-black 
              hover:bg-opacity-50 border-2 transition-all duration-300
              ${category === data.title ? "bg-opacity-60 border-white":"bg-opacity-40 border-transparent"}`} 
            key={data.id} onClick={()=>categoryHandler(data.title)}>  {/*button ka title send kr diya taki current category pta chl ske*/}
                {data.title}      {/*hr button me uska title daal do*/}
            </button>
            )
        })}

    </div>
  )
}

export default Filter
