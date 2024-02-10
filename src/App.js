import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/NavBar";
import Card from "./Components/Card";

function App() {
  //useState hook for storing data
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);


  // making get request in useffect hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        const data = response.data;

        // Extracting relevant information from the API response
        const extractData = {
          gender: data.results[0].gender,
          firstName: data.results[0].name.first,
          lastName: data.results[0].name.last,
          image: data.results[0].picture.large,
          phone: data.results[0].phone,
        };
        // Set the extracted data to the state
        setUserData(extractData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {/* conditional rendering for showing data after getting the proper response */}
      {loading ? <p>Loading....</p> : <Card userData={userData} />}
    </div>
  );
}

export default App;
