import React, { useState, useEffect } from 'react';
import './GridListView.css'

const GridListView = () => {
  const [data, setData] = useState([]);
  const [viewType, setViewType] = useState('grid');

 
  const fetchData = async () => {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos'); 
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);
  const renderGridItems = () => {
    return (
      <div className="grid-view">
        {data.map((item, index) => (
          <div className="grid-item" key={index}>
            <div className="image-container">
            <img  className='img' src={item.url}/>
            </div>
            <div className="txt-content">
            <h3>{item.title}</h3>
            </div>
            
          </div>
        ))}
      </div>
    );
  };


  const renderListItems = () => {
    return (
      <div className="list-view">
        {data.map((item, index) => (
          <div className="list-item" key={index}>
            <div className="image-container">
            <img className="img" src={item.url}/>
           
            </div>
            <div className="text-content">
            <h3>{item.title}</h3>
            </div>
            
          </div>
        ))}
      </div>
    );
  };

  return (
    <div 
    style ={{ textAlign:"center",marginTop:"2rem", marginBottom:"8rem" }}>
      <button className='btn' onClick={() => setViewType('grid')}>Grid view</button>
      <button className='btn1' onClick={() => setViewType('list')}>List view</button>

      {viewType === 'grid' ? renderGridItems() : renderListItems()}
    </div>
  );
};

export default GridListView;
