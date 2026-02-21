export const CITY_DATA: Record<string, any> = {
  hyderabad: {
    name: "Hyderabad",
    tagline: "The Heart of South India",
    description: "A city where historical grandeur meets modern-day tech. Famous for its world-class biryani, heritage monuments, and warm hospitality.",
    experiences: [
      { title: 'Charminar', info: 'Built in 1591, this mosque and monument is the global icon of Hyderabad, surrounded by bustling bazaars.', image: 'https://images.unsplash.com/photo-1741545979534-02f59c742730?q=80' },
      { title: 'Golconda Fort', info: 'A massive citadel and former capital of the Qutb Shahi dynasty, famous for its incredible acoustic effects.', image: 'https://images.unsplash.com/photo-1646818550233-4c033f82399c?q=80' },
      { title: 'Salar Jung Museum', info: 'One of the three National Museums of India, containing a massive collection of antiques from across the globe.', image: 'https://3.bp.blogspot.com/-0ipEGckWQaI/UmOMMcEhCGI/AAAAAAAAT6E/-EAIcIS819w/s1600/Salar_Jung_Museum.jpg' },
      { title: 'Chowmahalla Palace', info: 'The seat of the Asaf Jahi dynasty, known for its unique style and elegance, once the center of Hyderabad.', image: 'https://images.unsplash.com/photo-1681039648731-dd8931271ec1?q=80' },
      { title: 'Hussain Sagar Lake', info: 'A large heart-shaped lake with a giant monolithic statue of Gautama Buddha in the center.', image: 'https://images.unsplash.com/photo-1712422813106-dfb845a8a7ed?q=80' },
      { title: 'Ramoji Film City', info: 'The largest integrated film city in the world, a massive destination for tourism and filmmaking.', image: 'https://static2.tripoto.com/media/filter/nl/img/189328/TripDocument/1449996535_dsc_3808.jpg' },
      { title: 'Birla Mandir', info: 'A magnificent Hindu temple built of 2000 tons of pure white Rajasthani marble atop a hill.', image: 'https://images.unsplash.com/photo-1597109216022-71b4810ed4c0?q=80' }
    ],
    weather: { summer: "35-42°C", winter: "15-22°C", best: "October to March" }
  },
  bangalore: {
    name: "Bangalore",
    tagline: "The Silicon Valley of India",
    description: "A vibrant metropolis known for its lush parks, buzzing craft beer scene, and pleasant year-round weather.",
    experiences: [
      { title: 'Lalbagh Botanical Garden', info: 'A 240-acre garden famous for its glass house modeled after London’s Crystal Palace.', image: 'https://www.explorebees.com/uploads/Lalbagh%20Botanical%20Garden.jpg' },
      { title: 'Bangalore Palace', info: 'A Tudor-style architectural marvel featuring fortified towers, battlements, and turrets.', image: 'https://plus.unsplash.com/premium_photo-1697729606469-027395aadb6f?q=80' },
      { title: 'Cubbon Park', info: 'The "Lung" of the city center, perfect for morning walks amidst bamboo groves and flowering trees.', image: 'https://dynamicvisit.com/wp-content/uploads/2025/09/Untitled-design-2023-03-06T174303.322.png' },
      { title: 'Bannerghatta Biological Park', info: 'A destination for wildlife enthusiasts, featuring a tiger and lion safari and a butterfly park.', image: 'https://bannerghattanationalpark.in/wp-content/uploads/2025/04/converted_image-2025-04-27T000340.397-1024x576.webp' },
      { title: 'Vidhana Soudha', info: 'The seat of the state legislature of Karnataka, a magnificent Neo-Dravidian building.', image: 'https://assets-news.housing.com/news/wp-content/uploads/2020/12/01163300/Bengaluru%E2%80%99s-Vidhana-Soudha-could-be-worth-over-Rs-3900-crores-FB-1200x700-compressed.jpg' },
      { title: 'Commercial Street', info: 'The ultimate shopping destination in Bangalore for clothes, footwear, and jewelry.', image: 'https://yometro.com/images/places/commercial-street.jpg' },
      { title: 'ISKCON Temple Bangalore', info: 'One of the largest ISKCON temples in the world, known for its spiritual atmosphere and grand architecture.', image: 'https://www.astroved.com/astropedia/assets/images/temples/Iskcon-bengalore.jpg' }
    ],
    weather: { summer: "28-34°C", winter: "15-25°C", best: "September to February" }
  },
  munnar: {
    name: "Munnar",
    tagline: "The Kashmir of South India",
    description: "A serene hill station famous for its rolling tea plantations, misty mountains, and exotic flora and fauna.",
    experiences: [
      { title: 'Eravikulam National Park', info: 'Home to the endangered Nilgiri Tahr and the Neelakurinji flowers that bloom once in 12 years.', image: 'https://fastly.4sqi.net/img/general/600x600/33363688_5jJ-GgzBphu1d8jC26C95KZTmNqq7faDIgZoamayDmw.jpg' },
      { title: 'Tea Museum', info: 'Learn about the evolution of tea processing in the region, from the primitive tea roller to modern factories.', image: 'https://munnartravelguide.com/wp-content/uploads/2018/11/tea-museum.jpg' },
      { title: 'Mattupetty Dam', info: 'A beautiful storage masonry dam and lake offering boat rides and views of the surrounding hills.', image: 'https://www.seasonzindia.com/images/blogs/20200127093417_1580117657.png' },
      { title: 'Anamudi Peak', info: 'The highest peak in South India, offering trekking trails and panoramic views of the Western Ghats.', image: 'https://www.munnar.holiday/munnartourism/wp-content/uploads/2019/06/anamudi-peak-munnar-kerala.jpg' },
      { title: 'Attukad Waterfalls', info: 'A scenic waterfall located between Munnar and Pallivasal, surrounded by hills and jungle.', image: 'https://media1.thrillophilia.com/filestore/84m7j1zeg8dje99m3a0wlpijl250_sbu6e1s5rnmqui6wgpi4hwa9czze_shutterstock_1313534930.webp?w=1440&dpr=2' },
      { title: 'Top Station', info: 'The highest point on the Munnar-Kodaikanal road, offering a breathtaking view of the neighboring state of Tamil Nadu.', image: 'https://www.munnartouristplaces.com/images/top-station/munnar-top-station-cloudy-morning.jpg' },
      { title: 'Pothamedu View Point', info: 'A spot that provides a wide view of tea, coffee, and cardamom plantations and misty valleys.', image: 'https://experiencekerala.in/image-uploads/1472034161.DP2M0116a.jpg' }
    ],
    weather: { summer: "19-25°C", winter: "10-18°C", best: "December to May" }
  },
  jaipur: {
    name: "Jaipur",
    tagline: "The Royal Pink City",
    description: "Rajasthan’s capital is a treasure trove of culture, featuring massive forts, intricate palaces, and vibrant local crafts.",
    experiences: [
      { title: 'Amer Fort', info: 'A stunning marble and red sandstone palace complex overlooking Maota Lake.', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800' },
      { title: 'Hawa Mahal', info: 'The "Palace of Breeze" built with 953 small windows (jharokhas) for royal ladies to observe the street.', image: 'https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?q=80&w=800' },
      { title: 'City Palace', info: 'A complex of courtyards, gardens, and buildings that serves as the seat of the Maharaja of Jaipur.', image: 'https://tse2.mm.bing.net/th/id/OIP.UD1frhI2t2RuvTXKscPu2wHaE8?pid=Api&P=0&h=180' },
      { title: 'Jantar Mantar', info: 'A UNESCO World Heritage site featuring the world\'s largest stone sundial and astronomical instruments.', image: 'https://www.trawell.in/admin/images/upload/151648398Jaipur_Jantar_Mantar_Main.jpg' },
      { title: 'Nahargarh Fort', info: 'Standing on the edge of the Aravalli Hills, it offers the best panoramic view of Jaipur city.', image: 'https://tse4.mm.bing.net/th/id/OIP.05-_2FW3nMw3uEe_kHxL6AHaE7?pid=Api&P=0&h=180' },
      { title: 'Albert Hall Museum', info: 'The oldest museum of the state, serving as the state museum of Rajasthan, showcasing Indo-Saracenic architecture.', image: 'https://www.trawell.in/admin/images/upload/151648559Jaipur_Albert_Hall_Museum_Main.jpg' },
      { title: 'Jaigarh Fort', info: 'Known as the Fort of Victory, it houses the Jaivana Cannon, once the world\'s largest cannon on wheels.', image: 'https://static.toiimg.com/photo/65755679/jaigarh-fort.jpg?width=748&resize=4' }
    ],
    weather: { summer: "38-45°C", winter: "8-22°C", best: "November to February" }
  },
  goa: {
    name: "Goa",
    tagline: "The Sunshine State",
    description: "Famous for its stunning coastline, Portuguese architecture, and laid-back lifestyle that blends Indian and Mediterranean vibes.",
    experiences: [
      { title: 'Basilica of Bom Jesus', info: 'A UNESCO World Heritage site containing the mortal remains of St. Francis Xavier.', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800' },
      { title: 'Baga Beach', info: 'One of Goas most famous beaches, known for its nightlife, water sports, and seafood shacks.', image: 'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=800' },
      { title: 'Dudhsagar Falls', info: 'A four-tiered waterfall located on the Mandovi River, looking like a "Sea of Milk" during monsoon.', image: 'https://indiator.com/tourist-places/wp-content/uploads/2016/11/Awsome-View-Of-Falls-Dudhsagar-Falls.jpeg' },
      { title: 'Aguada Fort', info: 'A well-preserved seventeenth-century Portuguese fort standing on Sinquerim Beach.', image: 'https://tse3.mm.bing.net/th/id/OIP.zaZSURb2KEgZz4YDd_GH1wHaDt?pid=Api&P=0&h=180' },
      { title: 'Anjuna Flea Market', info: 'A vibrant market offering everything from handicrafts to spices, capturing the bohemian spirit of Goa.', image: 'https://pavancab.com/img/nightlife/anjuna/1.webp' },
      { title: 'Chapora Fort', info: 'Rising high above the Chapora River, famous as the "Dil Chahta Hai" fort with great sunset views.', image: 'https://www.tusktravel.com/blog/wp-content/uploads/2019/11/Chapora-Fort-Goa.jpg' },
      { title: 'Palolem Beach', info: 'A semi-circle shaped quiet beach in South Goa known for its calm waters and cozy beach huts.', image: 'https://www.acroncandolimresortgoa.com/explore-goa/beaches-in-goa/palolem-beach/images/palolem-beach.jpg' }
    ],
    weather: { summer: "30-35°C", winter: "20-28°C", best: "November to February" }
  }
};