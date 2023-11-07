import React from 'react';

const DownloadButton: React.FC = () => {
    return (
        <a href="..\assets\react.svg" download >
            <button>DownLoad</button>
        </a>
    );
};

export default DownloadButton;