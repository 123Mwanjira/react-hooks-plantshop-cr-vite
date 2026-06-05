import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleToggleStock(id) {
    setPlants(
      plants.map((plant) =>
        plant.id === id
          ? { ...plant, soldOut: !plant.soldOut }
          : plant
      )
    );
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />

      {/* MUST MATCH Search.jsx */}
      <Search
        searchTerm={search}
        onSearchChange={setSearch}
      />

      <NewPlantForm onAddPlant={addPlant} />

      <PlantList
        plants={filteredPlants}
        onToggleStock={handleToggleStock}
      />
    </div>
  );
}

export default App;