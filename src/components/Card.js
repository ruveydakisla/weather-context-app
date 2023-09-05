import React from 'react'

function Card({day,temp,durum}) {
    const rainPath = 'https://cdn-icons-png.flaticon.com/128/3351/3351979.png';
    const sunnyPath='https://cdn-icons-png.flaticon.com/128/869/869869.png';
    const cloudyPath='https://cdn-icons-png.flaticon.com/128/6122/6122561.png';
    const sağanak='https://cdn-icons-png.flaticon.com/128/2864/2864403.png';
    let imagePath;
    if(durum==='orta şiddetli yağmur')
        {
        imagePath=rainPath;
        }
    else if(durum==='açık')
    {
        imagePath=sunnyPath;
    }
    else if(durum==='parçalı bulutlu')
    {
        imagePath=cloudyPath;
    }
    else{
        imagePath=sağanak;
    }
  return (
    
    <div className='Card'>
        <p className='cardText'>{day}</p>
        <img src={imagePath}alt='resim' />
        <p className='cardText'>{temp}</p>
    </div>
    
  )
}

export default Card;