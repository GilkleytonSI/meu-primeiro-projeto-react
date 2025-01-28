import React from 'react';

// Criando o componente "Olá, Mundo" e React com JSX
const OlaMundo = () => {
    const nome = "Gilkleyton";
    const saudacao = (nome) => `Olá, ${nome}!`;

    return (
        <div>
            <h1>{saudacao(nome)}</h1>
            <p>Bem-vindo(a) ao React com JSX!</p>
            <h1>Olá, Mundo!</h1>
            <p>Este é meu primeiro componente React!</p>
        </div>
    );
};

export default OlaMundo;
