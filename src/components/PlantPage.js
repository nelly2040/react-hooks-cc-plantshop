import React from "react";
import PlantList from "./PlantList";
import Search from "./Search"; // Assuming you have a Search component

function PlantPage() {
  return (
    <main>
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;