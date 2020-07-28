import React from 'react';

import DogImage from '../../components/DogImage/DogImage.component';
import FormButton from '../../components/FormButton/FormButton.component';
import {
  MainContainer,
  MainButtonContainer,
  MainLink,
} from './Main.Styles';

import { createOrder } from '../../firebase/firebase.utils';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDog: {
        image: null,
        dogId: 0,
      },
      dogOrdered: false,
    }
  }

  getDog = async () => {
    const { currentDog } = this.state;
    const { currentUser } = this.props;
    const dogOrdered = await createOrder(currentDog, currentUser);
    this.setState({ dogOrdered: dogOrdered });
    console.log(dogOrdered);
  }

  generateDog = () => {
    const randomDogId = Math.round(Math.random() * (100000000 - 1) + 1);
    // const currentDogData = {
    //   image: randomDogId,
    //   dogId: randomDogId,
    // }
    // this.setState({
    //   currentDog: currentDogData
    // })
    fetch('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true', {
      cors: 'no-cors'
    })
      .then(response => response.json())
      .then(data => {
        const currentDogImage = data[0];
        const currentDogData = {
          image: currentDogImage,
          dogId: randomDogId,
        }
        this.setState({
          currentDog: currentDogData
        })
        console.log(currentDogData);
      })
  }

  componentDidMount() {
    this.generateDog();
  }

  render() {
    const { currentDog, dogOrdered } = this.state;
    const { currentUser } = this.props;
    return (
      <MainContainer>
        <h2> Welcome to Shybi Dogs </h2>
        <div>Get this Dog now: </div>
        <DogImage imageLink={currentDog.image} />
        {
          dogOrdered ? (
            <MainButtonContainer>
              <h2>Dog Ordered: The pet shop keeper will email you soon regarding this.</h2>
              <FormButton onClick={() => this.setState({ dogOrdered: false })}> Want to Order Another dog? </FormButton>
            </MainButtonContainer>
          ) : (
              <MainButtonContainer>
                {
                  currentUser ? (<FormButton onClick={this.getDog}> Get this Dog </FormButton>) :
                    (
                      <MainLink to='/login'> Register/Login </MainLink>
                    )
                }
                <FormButton onClick={this.generateDog}> Get Another Dog </FormButton>
              </MainButtonContainer>)
        }
      </MainContainer>
    );
  }
}

export default MainComponent;