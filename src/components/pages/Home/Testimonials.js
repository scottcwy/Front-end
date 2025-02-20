import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Emily Chen',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `The food at Little Lemon was absolutely amazing! The Mediterranean flavors were authentic and the service was exceptional. The grilled sea bass was cooked to perfection.`,
  },
  {
    fullName: 'James Rodriguez',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `What a hidden gem! The atmosphere is cozy and welcoming. Their homemade pasta dishes are outstanding, and the herb-infused olive oil is to die for.`,
  },
  {
    fullName: 'Sarah Thompson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `I celebrated my anniversary here and it was perfect. The staff went above and beyond to make our evening special. The lemon dessert is a must-try!`,
  },
  {
    fullName: 'Michael Zhang',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Great vegetarian options! The Mediterranean platter had such fresh ingredients and unique flavors. Will definitely be coming back for more.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
