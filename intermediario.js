import React, { useState } from 'react';

function InputNome() {
  const [nome, setNome] = useState('');

  const lidarComMudanca = (evento) => {
    setNome(evento.target.value);
  };

  return (
    <div>
      <label htmlFor="campoNome">Nome:</label>
      <input
        type="text"
        id="campoNome"
        value={nome}
        onChange={lidarComMudanca}
      />
      <p>Você digitou: {nome}</p>
    </div>
  );
}
