import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner"
import { toast } from "react-toastify";

const App = () => {

  const [courses, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  //Function to fetch data from api
  async function fetchData() {
    setLoading(true); // jb tk data fetch ho rha h tb tk loading ho
    try {
      const response = await fetch(apiUrl); //api call to get the data
      const fetchedData = await response.json();   // convert api data into json format
      //save data into a variable
      setCourse(fetchedData.data);
    }
    catch (error) {
      toast.error('Something went wrong');
    }
    setLoading(false); // data fetch hone k baad loading ruk jaye.
  }

  // Run on first render
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div> <Navbar /> </div>

      <div className="bg-bgDark2">
        <div> <Filter filterData={filterData} category={category} setCategory={setCategory} /> </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)   // agr loading true h to loading dikhao wrna card dikhao
          }
        </div>
      </div>

    </div>
  ); 
};

export default App;
