import React from 'react';

import {
  DogImageContainer,
  DogImg
} from './DogImage.styles';

const DogImage = ({ imageLink }) => (
  <DogImageContainer>
    {
      imageLink ?
        <DogImg src={'https://cdn.shibe.online/shibes/a31ecabc17058543530be964e55d1f405886828f.jpg'} /> :
        (
          <div>
            Getting Dog Image
          </div>
        )
    }
  </DogImageContainer>
);

export default DogImage;
