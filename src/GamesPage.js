import React from 'react';
import useFetchGames from '../hooks/useFetchGames';

const GamesPage = () => {
  const { data, loading, error } = useFetchGames('https://api.example.com/games');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading games.</div>;

  return (
    <div>
      <h1>Games</h1>
      <ul>
        {data.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GamesPage;
