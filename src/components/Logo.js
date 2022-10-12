import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* Les images importées depuis la balise IMG sont accessible dans "public" */}
            <img src="./img/pokeball.png" alt="logo_pokeball" />
            <h3> Pokédex </h3>
        </div>
    );
};

export default Logo;