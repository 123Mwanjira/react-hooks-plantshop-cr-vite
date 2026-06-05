import PlantList from "./PlantList";

function PlantPage({ plants, searchTerm, onSoldOut }) {
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PlantList
      plants={filteredPlants}
      onSoldOut={onSoldOut}
    />
  );
}

export default PlantPage;