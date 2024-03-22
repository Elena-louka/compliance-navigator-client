import React from 'react';
import './TopBar.css'; // Ensure you create this CSS file

function TopBar() {
    return (
        <header className="top-bar">
            <div className="top-bar-container">
                <div className="top-bar-title">CAIQ</div>
                <nav className="top-bar-nav">
                    {/* Add navigation items or status indicators here */}
                    <span>Meta</span>
                    <span>Manage</span>
                    <span>Respond</span>
                    {/* ... other navigation items */}
                </nav>
            </div>
        </header>
    );
}

export default TopBar;
