import React from 'react';

import {
  DogImageContainer,
  DogImg
} from './DogImage.styles';

const DogImage = ({ imageLink }) => (
  <DogImageContainer>
    {
      imageLink ?
        <DogImg src={imageLink} /> :
        (
          <div>
            Getting Dog Image
          </div>
        )
    }
  </DogImageContainer>
);

export default DogImage;
