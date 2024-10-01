import React, { useState, useEffect } from 'react';
import './tab.css';

const TabComponents = () => {
  const [activeTab, setActiveTab] = useState('hr');
  const [timer, setTimer] = useState(null);

  const tabs = [
    {
      id: 'hr',
      label: 'For HR Managers',
      icon: 'fas fa-user-cog',
      content: 'Handle employee information digitally on our user-friendly platform. With automation, accuracy is guaranteed for reliable record-keeping.',
      content1: 'Manage recruitment processes with ease, from posting job ads to screening applicants and scheduling interviews.',
      content2: 'Utilize performance tracking tools to monitor employee progress and facilitate constructive feedback sessions.',
      activeColor: '#6C63FF',
      card2Color: '#A4C7FF',
      card3Color: '#81B2FF',
      borderColor: '#6C63FF', // Use activeColor for border
    },
    {
      id: 'line',
      label: 'For Line Managers',
      icon: 'fas fa-user-alt',
      content: 'Simplify task management for a boost in team productivity. Clear assignments, monitored deadlines, and smoother workflows await!',
      content1: 'Welcome new team members with ease – our automated workflows minimize admin hassle for quick integration into team dynamics.',
      content2: 'Facilitate open communication within teams to foster collaboration and enhance project outcomes.',
      activeColor: '#482084',
      card2Color: '#8A70B0',
      card3Color: '#69489A',
      borderColor: '#482084', // Use activeColor for border
    },
    {
      id: 'employees',
      label: 'For Employees',
      icon: 'far fa-user-circle',
      content: 'Get clarity on tasks, access key information, and perform tasks independently, fostering a culture of trust and ownership.',
      content1: 'Stay updated with company news and announcements through a dedicated information hub.',
      content2: 'Utilize self-service features for managing leave requests and accessing payroll information directly.',
      activeColor: '#FF8100',
      card2Color: '#FFC58A',
      card3Color: '#FFAE5C',
      borderColor: '#FF8100', // Use activeColor for border
    },
  ];

  const switchTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex].id);
  };

  useEffect(() => {
    const interval = setInterval(switchTab, 5000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const openTab = (tabName) => {
    clearInterval(timer);
    setActiveTab(tabName);
  };

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="container">
      <div className="top-sec">
        <h6>EMPOWER EVERY ROLE</h6>
        <h1>Triple the benefits!</h1>
      </div>

      <div className="tab-components">
        <div className={`tabs-container ${activeTab}`} id="tabs-container">
          <div className="rows-container">
            <div className="tab-left-bar">
              <div className="tab-left-icon">
                <i className="far fa-comment-dots"></i>
                <p>Streamline Workforce Management</p>
              </div>
              <div className="tab-left-icon">
                <i className="fas fa-atom"></i>
                <p>Smooth Employee Onboarding </p>
              </div>
              <div className="tab-left-icon">
                <i className="far fa-edit"></i>
                <p>Enhance Internal Communication </p>
              </div>
            </div>

            <div className="tab-content-area">
              <div className="tabs-header">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => openTab(tab.id)}
                    style={{
                      backgroundColor: activeTab === tab.id ? tab.activeColor : 'white',
                      color: activeTab === tab.id ? 'white' : 'black',
                    }}
                  >
                    <i className={tab.icon}></i> {tab.label}
                  </button>
                ))}
              </div>

              <div className="container1">
                <div
                  className="card card1"
                  style={{
                    border: `1px solid ${currentTab.borderColor}`, // Dynamically setting border color for card1
                  }}
                >
                  {tabs.map(tab => (
                    <div key={tab.id} className={`tab-content ${activeTab === tab.id ? 'active' : ''}`} id={tab.id}>
                      <p>{tab.content}</p>
                      <p>{tab.content1}</p>
                      <p>{tab.content2}</p>
                    </div>
                  ))}
                </div>

                {/* card2 and card3 only have background colors, no borders */}
                <div
                  className="card card2"
                  style={{
                    backgroundColor: currentTab.card2Color,
                    border: 'none', // Remove border for card2
                  }}
                ></div>

                <div
                  className="card card3"
                  style={{
                    backgroundColor: currentTab.card3Color,
                    border: 'none', // Remove border for card3
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabComponents;
