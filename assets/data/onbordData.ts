import {AnimationObject} from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
    {
        id: 1,
        animation: require('@/assets/images/Aniki Hamster.json'),
        text: 'travel to do',
        textColor: '#005b4f',
        backgroundColor: '#C0C0C0',
      },
  {
    id: 2,
    animation: require('@/assets/images/Aniki Hamster.json'),
    text: 'travel to do',
    textColor: '#005b4f',
    backgroundColor: '#FFFAFA',
  },
  {
    id: 3,
    animation: require('@/assets/images/Aniki Hamster.json'),
    text: 'travel to do',
    textColor: '#1e2169',
    backgroundColor: '#bae4fd',
  },
  {
    id: 4,
    animation: require('@/assets/images/Aniki Hamster.json'),
    text: 'travel to do',
    textColor: '#F15937',
    backgroundColor: 'grey',
  },
  {
    id: 5,
    animation: require('@/assets/images/fifo.json'),
    text: 'travel to do',
    textColor: '#F15937',
    backgroundColor: '#FFE4E1',
  },
];

export default data;