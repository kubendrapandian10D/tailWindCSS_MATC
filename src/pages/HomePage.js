import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";


const HomePage = () => {
  return (
    <>
      <section className="flex  ">

        <Navbar className="w-64" />
        <div className=" w-auto bg-lavendarLace_ ">

          <SearchBar />
        </div>


      </section>
    </>
  );
};

export default HomePage;
