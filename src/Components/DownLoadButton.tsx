import React from 'react';

const DownloadButton: React.FC = () => {
    return (
        <a href="..\assets\react.svg" download >
            <button style={{width: 200}}>DownLoad APK</button>
        </a>
    );
};

export default DownloadButton;