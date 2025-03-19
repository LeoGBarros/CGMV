import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import VehicleCard from './components/VehicleCard';
import './Home.css';
import { Vehicle } from './types';

const HomePage: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/assets/vehicles.json')
      .then((res) => res.json())
      .then((data) => setVehicles(data));
  }, []);

  const filteredVehicles = vehicles.filter((vehicle) =>
    vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <div className="header">
        <img
          src="public\assets\images\icarros.png"
          alt="Logo da Aplicação"
          className="app-logo"
        />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="vehicle-list">
        {filteredVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
