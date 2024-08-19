import React, { useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import MenuItem from './MenuItem';
import './Menu.css';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';
import image10 from './images/image10.jpg';
import image11 from './images/image11.jpg';
import image12 from './images/image12.jpg';
import image13 from './images/image13.jpg';
import image14 from './images/image14.jpg';
import image15 from './images/image15.jpg';
import image16 from './images/image16.jpg';
import image17 from './images/image17.jpg';
import image18 from './images/image18.jpg';
import image19 from './images/image19.jpg';
import image20 from './images/image20.jpg';
import image21 from './images/image21.jpg';
import image22 from './images/image22.jpg';
import image23 from './images/image23.jpg';
import image24 from './images/image24.jpg';
import image25 from './images/image25.jpg';
import image26 from './images/image26.jpg';
import image27 from './images/image27.jpg';
import image28 from './images/image28.jpg';
import image29 from './images/image29.jpg';
import image30 from './images/image30.jpg';
import image31 from './images/image31.jpg';
import image32 from './images/image32.jpg';
import image33 from './images/image33.jpg';
import image34 from './images/image34.jpg';
import image35 from './images/image35.jpg';
import image36 from './images/image36.jpg';
import image37 from './images/image37.jpg';
import image38 from './images/image38.jpg';
import image39 from './images/image39.jpg';
import image40 from './images/image40.jpg';

const menuItems = {
  'North-Indian': [
    { name: 'Butter Chicken', price: '₹250', image: image1, ingredients: ' Marinated Tender chicken, Creamy tomato-based sauce, aromatic spices like garam masala and fenugreek leaves.', description: 'Indulge in a symphony of flavors with our signature Butter Chicken. Succulent pieces of chicken, bathed in a luscious, velvety gravy, tantalize your taste buds with every bite. Each spoonful is a journey through the rich culinary heritage of India, where tradition meets innovation in perfect harmony.', },
    { name: 'Paneer Tikka', price: '₹200', image: image2, ingredients: 'Indian cottage cheese, skewered and grilled bell peppers, onions, and tomatoes', description: ' Experience the irresistible allure of our Paneer Tikka, where the smoky essence of the grill meets the creamy richness of paneer. Each bite bursts with vibrant flavors, as the tender paneer melts in your mouth, complemented by the tantalizing blend of spices. Its a culinary masterpiece that leaves a lasting impression.', },
    { name: 'Rogan Josh', price: '₹300', image: image3, ingredients: 'Tender lamb pieces, onions, yogurt, aromatic spices such as Kashmiri red chili, cardamom, and cloves.', description: 'Embark on a culinary adventure with our Rogan Josh, a timeless classic from the heart of Kashmir. Savour the tender, succulent lamb, delicately infused with the warmth of Kashmiri spices, as it melts in your mouth with every bite. Each spoonful is a journey to the majestic valleys of Kashmir, where every aroma tells a story of tradition, culture, and culinary mastery.',},
    { name: 'Chole Bhature', price: '₹150', image: image4, ingredients: 'Chickpea, onions, tomatoes, a blend of aromatic spices, fluffy deep-fried bread known as bhature', description: 'Delight in the vibrant flavors of our Chole Bhature, a quintessential North Indian delicacy that captivates the senses with its bold spices and comforting textures. The hearty chickpea curry, infused with the earthy aroma of spices, pairs harmoniously with the fluffy, golden-brown bhature, creating a culinary symphony that celebrates the essence of Indian street food.',},
    { name: 'Dal Makhani', price: '₹180', image: image5, ingredients: 'Creamy black lentils, kidney beans cooked slowly with butter, cream, tomatoes, and a blend of aromatic spices', description: ' Indulge in the luxurious decadence of our Dal Makhani, a culinary masterpiece that embodies the essence of comfort and warmth. Each spoonful is a symphony of velvety textures and rich flavors, as the creamy dal gently coats your palate with its buttery goodness. Its a dish that transcends boundaries, bringing together the soulful simplicity of lentils with the opulence of royal Indian cuisine.',},
    { name: 'Kadhai Paneer', price: '₹220', image: image6, ingredients: 'Cubes of paneer cooked with bell peppers, onions, tomatoes, and a blend of aromatic spices', description: 'Indulge in the vibrant flavors of our Kadhai Paneer, where tender cubes of paneer dance amidst a colorful medley of bell peppers and onions, infused with the aromatic spices of India. Each bite is a burst of freshness and spice, as the tangy tomato gravy envelops your palate in a symphony of flavors. Its a culinary journey that celebrates the essence of Indian cuisine in every bite.',},
    { name: 'Tandoori Chicken', price: '₹350', image: image7, ingredients: 'Chicken marinated in a spiced yogurt mixture, seasoned with aromatic spices like cumin, coriander, and turmeric', description: 'Savor the smoky allure of our Tandoori Chicken, a culinary masterpiece that celebrates the ancient art of tandoor cooking. Each succulent bite is infused with the bold flavors of Indian spices, while the charred exterior adds a tantalizing crunch. Its a dish that embodies the spirit of celebration and festivity, inviting you to experience the rich heritage of Indian cuisine.',},
    { name: 'Aloo Paratha', price: '₹100', image: image8, ingredients: 'Whole wheat flatbread stuffed with a spiced mashed potato mixture, seasoned with green chilies, ginger, and fresh coriander leaves', description: 'Experience the comforting embrace of our Aloo Paratha, a beloved staple of Indian cuisine that transcends generations. Crisp on the outside, soft and fluffy on the inside, each paratha is generously stuffed with a fragrant potato filling, bursting with the vibrant flavors of Indian spices. Its a culinary journey that evokes memories of home-cooked meals and lazy Sunday brunches, inviting you to savor every bite.',},
    { name: 'Lassi', price: '₹50', image: image9, ingredients: 'Chilled yogurt blended with water, sugar, and a hint of rose water or cardamom', description: 'Quench your thirst with the creamy indulgence of our Lassi, a timeless classic that refreshes the body and soul. Velvety smooth and irresistibly creamy, each sip is a burst of coolness, complemented by the subtle sweetness of rose water or the aromatic notes of cardamom. Its a drink that rejuvenates the senses and transports you to a state of blissful relaxation.',},
    { name: 'Gulab Jamun', price: '₹80', image: image10, ingredients: 'Deep-fried dumplings, fragrant sugar syrup infused with cardamom, rose water, and saffron.', description: 'Indulge in the heavenly sweetness of our Gulab Jamun, a divine treat that captivates the senses with its irresistible charm. Each golden-brown dumpling, soaked in a luscious sugar syrup, melts in your mouth with a burst of decadent flavor, leaving behind a lingering essence of cardamom and rose water. Its a dessert fit for royalty, a celebration of Indias rich culinary heritage that leaves a lasting impression.',},
  ],
  'South-Indian': [
    { name: 'Dosa', price: '₹100', image: image11, ingredients: ' A blend of rice and urad dal, fermented with fenugreek seeds, and a dash of salt.', description: 'A crispy, golden-brown crepe that whispers of South Indian kitchens. This light and airy delicacy is perfect when paired with tangy sambar and a variety of flavorful chutneys, making for a truly iconic culinary experience.', },
    { name: 'Idli', price: '₹80', image: image12, ingredients: 'Soft rice and urad dal, and a pinch of salt steamed to perfection.', description: 'Fluffy, cloud-like steamed rice cakes that melt in your mouth. A healthy and nutritious way to start the day, especially when dipped in sambar and a selection of savory chutneys.', },
    { name: 'Vada', price: '₹90', image: image13, ingredients: 'A batter of urad dal (black gram), spiced with green chilies, fragrant ginger, aromatic curry leaves, a sprinkle of salt, and a dash of pepper', description: 'Savory doughnuts that are crispy on the outside and soft on the inside. Each bite reveals layers of flavor, perfect when paired with sambar and chutney for a delightful snack or breakfast.', },
    { name: 'Uttapam', price: '₹110', image: image14, ingredients: 'rice and urad dal batter, crowned with onions, tomatoes, green chilies, grated carrots, and fresh coriander.', description: 'A thick, savory pancake adorned with vibrant vegetable toppings. It’s a beautiful symphony of textures and flavors, often described as the South Indian pizza, with its crispy edges and soft, flavorful center.', },
    { name: 'Bisi Bele Bath', price: '₹70', image: image15, ingredients: 'A blend of rice and toor dal, fresh vegetables like carrots, beans, and peas, special Bisi Bele Bath masala, finished with ghee, mustard seeds, curry leaves, and crunchy cashews.', description: 'A rich, aromatic one-pot meal that is the epitome of comfort food. Each spoonful is a journey through layers of flavors and textures, perfectly complemented by crunchy papadam.', },
    { name: 'Rasam', price: '₹60', image: image16, ingredients: 'A tangy tamarind base mixed with juicy tomatoes, toor dal, garlic, a mix of black pepper and cumin, with mustard seeds, curry leaves, and fresh coriander.', description: 'A zesty, spicy soup that warms the soul. It’s a liquid gold of South India, known for its digestive properties and vibrant flavor, perfect as a starter or a main course accompaniment.', },
    { name: 'Pongal', price: '₹120', image: image17, ingredients: 'Rice and moong dal, with ghee, and seasoned with cumin seeds, black pepper, fresh ginger, crunchy cashews, and aromatic curry leaves.', description: 'A velvety porridge that’s the heart of South Indian comfort food. It’s a dish rich in tradition and flavor, often enjoyed during festivals and as a nourishing breakfast.', },
    { name: 'Upma', price: '₹90', image: image18, ingredients: 'Roasted semolina, with mustard seeds, urad dal, green chilies, fresh ginger, curry leaves, and a colorful array of vegetables.', description: 'A savory, warm porridge that’s quick to make and satisfying to eat. Each spoonful is a burst of flavor and texture, making it a perfect start to the day or a hearty snack.', },
    { name: 'Bonda', price: '₹50', image: image19, ingredients: 'Mashed potatoes, with green chilies, ginger, and fresh coriander, a crispy batter of gram flour.', description: 'Crunchy on the outside, soft and spicy on the inside. These golden-fried dumplings are a popular snack, bursting with flavor and texture, perfect for any time of the day.', },
    { name: 'Payasam', price: '₹80', image: image20, ingredients: 'A mix of milk and rice or vermicelli, sugar or jaggery, with aromatic cardamom, ghee-roasted cashews and plump raisins.', description: 'A creamy, indulgent dessert that’s the essence of South Indian festivities. Sweet, aromatic, and rich, its the perfect way to end a meal on a celebratory note.', },
  ],
  Italian: [
    { name: 'Margherita Pizza', price: '₹250', image: image21, ingredients: ' Rich tomato sauce, fresh mozzarella cheese, fragrant basil leaves, virgin olive oil, sea salt.', description: 'A classic Italian masterpiece, this pizza is a simple yet elegant combination of fresh ingredients that create a symphony of flavors with every bite. The Margherita pizza is a testament to the beauty of simplicity.', },
    { name: 'Pepperoni Pizza', price: '₹300', image: image22, ingredients: 'Tangy tomato sauce, creamy mozzarella cheese, and generous slices of spicy pepperoni, oregano and a hint of garlic.', description: 'A crowd favorite, this pizza is a delicious blend of savory and spicy. The pepperoni adds a delightful kick, making each bite a burst of flavor that leaves you craving more.', },
    { name: 'Lasagna', price: '₹350', image: image23, ingredients: 'pasta sheets, rich meat sauce, meat and tomatoes, creamy béchamel sauce, ricotta cheese, mozzarella.', description: 'A hearty and comforting dish, lasagna is a labor of love that brings together layers of rich flavors and textures. It’s a warm embrace in every slice, perfect for family dinners or special occasions.', },
    { name: 'Spaghetti Bolognese', price: '₹200', image: image24, ingredients: 'spaghetti topped with meat sauce, ripe tomatoes, onions, garlic, carrots, celery, red wine, and Italian herbs.', description: 'A classic Italian favorite, this dish is a flavorful journey through the heart of Italy. The rich, savory sauce coats each strand of spaghetti, creating a perfect harmony of taste and texture.', },
    { name: 'Fettuccine Alfredo', price: '₹220', image: image25, ingredients: 'Fettuccine pasta, creamy sauce, Parmesan cheese, with a hint of garlic.', description: 'Decadently rich and creamy, this dish is a timeless comfort food. The silky Alfredo sauce clings to the fettuccine, delivering a luxurious taste experience that’s both indulgent and satisfying.', },
    { name: 'Bruschetta', price: '₹150', image: image26, ingredients: 'Toasted slices of bread, diced tomatoes, basil, garlic, and extra virgin olive oil, with a hint of balsamic vinegar.', description: 'A vibrant and fresh appetizer, bruschetta is a delightful way to start any meal. The combination of juicy tomatoes and aromatic basil on crispy bread creates a perfect balance of flavors and textures.', },
    { name: 'Caprese Salad', price: '₹180', image: image27, ingredients: 'ripe tomatoes and fresh mozzarella, fragrant basil leaves, virgin olive oil, balsamic glaze, black pepper.', description: 'A celebration of fresh ingredients, this salad is a beautiful and delicious representation of Italian cuisine. Each bite offers a refreshing burst of flavors, making it a perfect starter or side dish.', },
    { name: 'Panna Cotta', price: '₹160', image: image28, ingredients: 'heavy cream, sugar, and vanilla, fruit coulis, fresh berries, a hint of mint.', description: 'This elegant dessert is the epitome of simplicity and sophistication. Its smooth, creamy texture and delicate flavor make it a perfect end to any meal, leaving a lasting impression on your taste buds.', },
    { name: 'Tiramisu', price: '₹180', image: image29, ingredients: 'espresso-soaked ladyfingers, mascarpone cheese, eggs, sugar, cocoa powder, coffee liqueur.', description: 'An indulgent and luxurious dessert, tiramisu is a classic favorite that combines the bold flavors of coffee and cocoa with the creamy richness of mascarpone. Each bite is a heavenly experience that delights the senses.', },
    { name: 'Minestrone Soup', price: '₹140', image: image30, ingredients: 'Vegetables like carrots, celery, tomatoes, zucchini, and beans, pasta or rice, flavored with garlic, onions, Italian herbs.', description: 'A comforting and nutritious soup, minestrone is a delightful medley of flavors and textures. It’s a wholesome and satisfying dish that warms you from the inside out, perfect for any time of the year.', },
  ],
  Chinese: [
    { name: 'Spring Rolls', price: '₹150', image: image31, ingredients: 'Paper-thin wrappers, mix of shredded cabbage, carrots, bean sprouts, bell peppers, soy sauce, ginger, and garlic.', description: 'These crunchy delights are a burst of fresh, flavorful vegetables encased in a crispy shell. Spring rolls are the perfect appetizer, offering a delightful contrast of textures with every bite.', },
    { name: 'Dim Sum', price: '₹200', image: image32, ingredients: 'Dumplings filled with shrimp, pork, and vegetables, steamed buns with savory fillings, and tender marinated meats', description: 'Dim sum is a delightful culinary adventure, offering a little taste of everything. These small, flavorful bites are perfect for sharing and savoring a multitude of different flavors and textures.', },
    { name: 'Kung Pao Chicken', price: '₹250', image: image33, ingredients: 'Tender pieces of chicken, with peanuts, dried chili peppers, colorful bell peppers, spicy tangy sauce made from soy sauce, vinegar,sugar.', description: 'This classic dish is a symphony of spicy, sweet, and savory flavors. Each bite of Kung Pao Chicken delivers a satisfying crunch from the peanuts and a burst of heat from the chili peppers, making it a favorite for spice lovers.', },
    { name: 'Sweet and Sour Pork', price: '₹220', image: image34, ingredients: 'Crispy chunks of pork, pineapple juice, vinegar, ketchup, with bell peppers, onions, and juicy pineapple chunks.', description: 'A beloved dish that perfectly balances tangy and sweet flavors, Sweet and Sour Pork is a delightful combination of tender meat and fresh vegetables, all coated in a glossy, addictive sauce.', },
    { name: 'Fried Rice', price: '₹180', image: image35, ingredients: 'Fluffy rice, vegetables, scrambled eggs, chicken, shrimp, tofu, seasoned with soy sauce, sesame oil, and a touch of garlic.', description: 'This versatile dish is a staple of comfort food, offering a delicious blend of textures and flavors. Fried rice is a perfect side or main dish, satisfying and easy to customize with your favorite ingredients.', },
    { name: 'Chow Mein', price: '₹200', image: image36, ingredients: 'Stir-fried noodles, crisp vegetables like carrots, cabbage, and bell peppers, along with chicken or beef, soy sauce.', description: 'A beloved classic, Chow Mein is a delightful medley of chewy noodles and crunchy vegetables. Each bite is a harmonious blend of flavors and textures, making it a go-to for noodle lovers.', },
    { name: 'Moon Cake', price: '₹350', image: image37, ingredients: 'Rich, dense pastries, sweet red bean paste, lotus seed paste, or salted egg yolk.', description: 'These traditional treats are a symbol of celebration and are as beautiful as they are delicious. Moon cakes are perfect for special occasions, offering a sweet, indulgent bite that is both unique and memorable.', },
    { name: 'Wonton Soup', price: '₹140', image: image38, ingredients: 'Delicate wontons, pork and shrimp, floating in a clear, flavorful broth with hints of ginger, garlic, and scallions.', description: 'A comforting and light dish, Wonton Soup is a heartwarming bowl of deliciousness. The tender wontons and aromatic broth make it a perfect starter or a soothing meal on its own.', },
    { name: 'Hot and Sour Soup', price: '₹120', image: image39, ingredients: ' Rich broth flavored with vinegar and white pepper, tofu, mushrooms, bamboo shoots, and pork strips, scallions.', description: 'This soup is a tantalizing blend of spicy and tangy flavors that wake up your taste buds. Hot and Sour Soup is a perfect appetizer, offering a complex, satisfying experience in every spoonful.', },
    { name: 'Fortune Cookies', price: '₹80', image: image40, ingredients: 'Crisp, golden cookies made fromsugar, flour, vanilla, and sesame oil, each containing a hidden paper fortune.', description: 'A fun and whimsical end to any meal, Fortune Cookies are not just a sweet treat but also a source of entertainment. Crack open the crispy shell to reveal your fortune, adding a delightful touch to your dining experience.', },
  ],
};

function Menu() {
  const [activeCategory, setActiveCategory] = useState('North-Indian');
  const carouselRef = useRef(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleScrollLeft(),
    onSwipedRight: () => handleScrollRight(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="menu">
      <div className="container">
        <h2 id="menu">Our Menu</h2>
        <div className="categories">
          {Object.keys(menuItems).map((category) => (
            <button
              key={category}
              className={category === activeCategory ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="card-carousel" {...handlers}>
          <button className="scroll-button left" onClick={handleScrollLeft}>
            &lt;
          </button>
          <div className="carousel-track" ref={carouselRef}>
            {menuItems[activeCategory].map((item) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </div>
          <button className="scroll-button right" onClick={handleScrollRight}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
export default Menu;
