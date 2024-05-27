import proj1 from '../images/CRUD.jpg';
import proj2 from '../images/booking-photo.png';
import proj3 from '../images/cards.jpg';
import proj4 from '../images/pricecard.jpg';


export const ProjectList = [
  {
    title: 'CRUD Application',
    description:
      'user can create the profile, update and delete',
    image: proj1,
    tags: ['Mongo', 'Express', 'React', 'Redux', 'Node'],
    sourceFront:
      'https://github.com/Mohanrajcgm/CRUD',
    visit: 'https://sensational-stroopwafel-22fbea.netlify.app/Portal/Users',
    id: 0,
  },

  {
    title: 'Guest Room Booking App',
    description:
      'In this project, Owner can create homes and rooms. Guest can book the house. This project contains authorization and authentication.',
    image: proj2,
    tags: ['React', 'MongoDB', 'Express', 'Node'],
    sourceBack: 'https://github.com/Mohanrajcgm/hallbooking',
    visit: 'https://hallbooking-kzz4.onrender.com',
    id: 1,
  },
  {
    title: 'ADD to Cart',
    description:
      'this application is an example of e commerce website we can pick the product for purchase ',
    image: proj3,
    tags: ['Mongo', 'Express', 'React', 'Redux', 'Node'],
    sourceFront:
      'https://github.com/Mohanrajcgm/addtocart',
    visit: 'https://hilarious-dieffenbachia-dc2eea.netlify.app/',
    id: 2,
  },
  {
    title: 'Price card',
    description:
      'the price card is a simple web site and so responsive',
    image: proj4,
    tags: ['React', 'Node', 'Firebase', 'MongoDB', 'Express'],
    sourceFront: 'https://github.com/Mohanrajcgm/pricecard',
    visit: 'https://app.netlify.com/sites/glowing-mousse-15a59c/overview',
    id: 3,
  },
];
