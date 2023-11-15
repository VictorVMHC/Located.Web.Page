import React from 'react';

const DownloadButton: React.FC = () => {

    const downloadImage = () => {
            const imagenURL = "../assets/apks/LocatedApp.apk"
            const enlace = document.createElement('a');
            enlace.href = imagenURL;
            enlace.download = 'LocatedApp.apk';
            enlace.click();
    }
    return (
        <a download >
            <button onClick={() => downloadImage() }>DownLoad Located APK</button>
        </a>
    );
};

export default DownloadButton;