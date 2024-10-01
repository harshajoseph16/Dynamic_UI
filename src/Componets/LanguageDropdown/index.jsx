import React from 'react';

const LanguageDropdown = () => {
  const handleChange = (event) => {
    console.log(`Selected language: ${event.target.value}`);
  };

  return (
    <div  className='land'>
      <select onChange={handleChange} style={{ padding: '5px', borderRadius: '4px', marginRight: '5px', backgroundColor:'transparent', fontSize:'12px', color:'white'  }}>
      <option value="en" style={{ color: 'black' }}>EN</option>
        <option value="es" style={{ color: 'black' }}>SP</option>
        <option value="fr" style={{ color: 'black' }}>FR</option>
        <option value="de" style={{ color: 'black' }}>GM</option>
      </select>
    </div>
  );
};

export default LanguageDropdown;
