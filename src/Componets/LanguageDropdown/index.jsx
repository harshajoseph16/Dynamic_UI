import React from 'react';

const LanguageDropdown = () => {
  const handleChange = (event) => {
    console.log(`Selected language: ${event.target.value}`);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <select onChange={handleChange} style={{ padding: '5px', borderRadius: '4px', marginRight: '5px', backgroundColor:'transparent', fontSize:'12px', borderRadius:'32px'  }}>
        <option value="en">EN</option>
        <option value="es">SP</option>
        <option value="fr">FR</option>
        <option value="de">GM</option>
      </select>
    </div>
  );
};

export default LanguageDropdown;
