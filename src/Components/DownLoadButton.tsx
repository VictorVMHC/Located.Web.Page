import React from 'react';

const DownloadButton: React.FC = () => {

    const downloadImage = () => {
        console.log("hola");
        
            const imagenURL = "./public/manager.apk";
            console.log(imagenURL);
            const enlace = document.createElement('a');
            enlace.href = imagenURL;
            enlace.download = 'manager.apk';
            enlace.click();
    }
    return (


        <a download >
            <button onClick={() => downloadImage() }>DownLoad</button>
        </a>
    );
};

export default DownloadButton;