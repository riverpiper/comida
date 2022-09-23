const menu = [
  {
    names: "Paneer Tikka Masala",
    price: "270",
    category: "Recommended",
  },
  {
    names: "Chef Special Veg",
    price: "310",
    category: "Recommended",
  },
  {
    names: "Veg Shaam Savera",
    price: "300",
    category: "Recommended",
  },
  {
    names: "Paneer Pasanda",
    price: "310",
    category: "Recommended",
  },
  {
    names: "Paneer Ball Rangeela",
    price: "300",
    category: "Recommended",
  },
  {
    names: "Chapati",
    price: "25",
    category: "Recommended",
  },
  {
    names: "Jeera Rice",
    price: "150",
    category: "Recommended",
  },
  {
    names: "Dal Khichdi",
    price: "190",
    category: "Recommended",
  },
  {
    names: "Dal Khichdi Tadaka",
    price: "170",
    category: "Recommended",
  },
  {
    names: "Veg Biryani",
    price: "220",
    category: "Recommended",
  },
  {
    names: "Paneer Biryani",
    price: "270",
    category: "Recommended",
  },
  {
    names: "Idli Fried",
    price: "80",
    category: "Recommended",
  },
  {
    names: "Butter Idli",
    price: "80",
    category: "Recommended",
  },
  {
    names: "Masala Dosa",
    price: "130",
    category: "Recommended",
  },
  {
    names: "Paper Masala Dosa",
    price: "170",
    category: "Recommended",
  },
  {
    names: "Rava Masala Dosa",
    price: "130",
    category: "Recommended",
  },
  {
    names: "Mysore Masala Dosa",
    price: "150",
    category: "Recommended",
  },
  {
    names: "Idli Chilli",
    price: "200",
    category: "Recommended",
  },
  {
    names: "Veg Crispy",
    price: "200",
    category: "Recommended",
  },
  {
    names: "Paneer Crispy",
    price: "220",
    category: "Recommended",
  },
  {
    names: "Paneer Satay",
    price: "260",
    category: "Recommended",
  },
  {
    names: "Veg Fried Rice",
    price: "190",
    category: "Recommended",
  },
  {
    names: "Veg Schezwan Fried Rice",
    price: "210",
    category: "Recommended",
  },
  {
    names: "Triple Schezwan Rice",
    price: "270",
    category: "Recommended",
  },
  {
    names: "Butter Pav Bhaji [ 350 gms 2 pav]",
    price: "150",
    category: "Recommended",
  },
  {
    names: "Khada Pav Bhaji",
    price: "160",
    category: "Recommended",
  },
  {
    names: "Paneer Pav Bhaji",
    price: "160",
    category: "Recommended",
  },
  {
    names: "Comida Special Pav Bhaji",
    price: "210",
    category: "Recommended",
  },
  {
    names: "Royal Falooda",
    price: "150",
    category: "Recommended",
  },
  {
    names: "Dry Fruit Falooda",
    price: "160",
    category: "Recommended",
  },
  {
    names: "Fresh Lime Soda",
    price: "100",
    category: "Recommended",
  },
  {
    names: "Fresh Lime Water",
    price: "100",
    category: "Recommended",
  },
  {
    names: "Pav Bhaji + Paneer Fried Rice + Paneer Chilli Dry",
    price: "510",
    category: "Family Binge Combos",
  },
  {
    names: "Paneer Crispy + Hyderabadi Biryani",
    price: "400",
    category: "Family Binge Combos",
  },
  {
    names: "2 Veg Spring Roll + Triple Schezwan Rice",
    price: "540",
    category: "Family Binge Combos",
  },
  {
    names: "Manchurian Fried Rice + Veg Schezwan Noodles + Boondi Raita",
    price: "490",
    category: "Family Binge Combos",
  },
  {
    names: "Paneer Biryani + Hong Kong Noodles",
    price: "440",
    category: "Family Binge Combos",
  },
  {
    names: "8'' Executive Italian Pizza",
    price: "250",
    category: "Pizza",
  },
  {
    names: "8'' Farm House Pizza",
    price: "250",
    category: "Pizza",
  },
  {
    names: "8'' Veg Assorted Pizza",
    price: "270",
    category: "Pizza",
  },
  {
    names: "8'' Lovely Pizza",
    price: "280",
    category: "Pizza",
  },
  {
    names: "8'' Indian Spicy Pizza",
    price: "230",
    category: "Pizza",
  },
  {
    names: "8'' Garlic Bread Pizza",
    price: "150",
    category: "Pizza",
  },
  {
    names: "8'' Veg Cheese Pizza",
    price: "210",
    category: "Pizza",
  },
  {
    names: "8'' Margherita Pizza",
    price: "200",
    category: "Pizza",
  },
  {
    names: "8'' Paneer Cheese Pizza",
    price: "220",
    category: "Pizza",
  },
  {
    names: "8'' Italian Treat Pizza",
    price: "210",
    category: "Pizza",
  },
  {
    names: "Manchow Soup",
    price: "150",
    category: "Soups and Salads",
  },
  {
    names: "Cream Of Tomato Soup",
    price: "160",
    category: "Soups and Salads",
  },
  {
    names: "Cream Of Palak Soup",
    price: "160",
    category: "Soups and Salads",
  },
  {
    names: "Cream Of Mushroom Soup",
    price: "170",
    category: "Soups and Salads",
  },
  {
    names: "Sweet Com Soup",
    price: "150",
    category: "Soups and Salads",
  },
  {
    names: "Sweet Corn Mushroom Soup",
    price: "170",
    category: "Soups and Salads",
  },
  {
    names: "Clear Soup",
    price: "150",
    category: "Soups and Salads",
  },
  {
    names: "Lemon Coriander Soup",
    price: "160",
    category: "Soups and Salads",
  },
  {
    names: "Noodle Soup",
    price: "160",
    category: "Soups and Salads",
  },
  {
    names: "Pineapple Soup",
    price: "170",
    category: "Soups and Salads",
  },
  {
    names: "Tomato Coriander Shorba",
    price: "170",
    category: "Soups and Salads",
  },
  {
    names: "Dal Coriander Shorba",
    price: "170",
    category: "Soups and Salads",
  },
  {
    names: "Greek Salad",
    price: "160",
    category: "Soups and Salads",
  },
  {
    names: "Caesar Salad",
    price: "160",
    category: "Soups and Salads",
  },
  {
    names: "American Pasta Salad",
    price: "200",
    category: "Soups and Salads",
  },
  {
    names: "Green Salad",
    price: "100",
    category: "Soups and Salads",
  },
  {
    names: "Veg Seekh Kebab",
    price: "220",
    category: "Starters",
  },
  {
    names: "Paneer Pahadi Kebab",
    price: "240",
    category: "Starters",
  },
  {
    names: "Paneer Tikka",
    price: "260",
    category: "Starters",
  },
  {
    names: "Paneer Pudina Kebab",
    price: "260",
    category: "Starters",
  },
  {
    names: "Paneer Achari Kebab",
    price: "260",
    category: "Starters",
  },
  {
    names: "Paneer Kurkure",
    price: "260",
    category: "Starters",
  },
  {
    names: "Paneer Malai Kebab",
    price: "260",
    category: "Starters",
  },
  {
    names: "Mushroom Rangeela",
    price: "270",
    category: "Starters",
  },
  {
    names: "Mushroom Tikka [ 4pcs]",
    price: "270",
    category: "Starters",
  },
  {
    names: "Hara Bhara Kebab",
    price: "230",
    category: "Starters",
  },
  {
    names: "Baby Corn Tandoori",
    price: "230",
    category: "Starters",
  },
  {
    names: "Bhindi Sunehari",
    price: "210",
    category: "Starters",
  },
  {
    names: "Dal Fry",
    price: "130",
    category: "Main Course",
  },
  {
    names: "Dal Kolhapuri",
    price: "150",
    category: "Main Course",
  },
  {
    names: "Dal Tadka",
    price: "150",
    category: "Main Course",
  },
  {
    names: "Dal Palak",
    price: "170",
    category: "Main Course",
  },
  {
    names: "Butter Dal Fry",
    price: "150",
    category: "Main Course",
  },
  {
    names: "Veg Kolhapuri",
    price: "210",
    category: "Main Course",
  },
  {
    names: "Veg Tawa",
    price: "210",
    category: "Main Course",
  },
  {
    names: "Badam Handi",
    price: "290",
    category: "Main Course",
  },
  {
    names: "Deewani Handi",
    price: "250",
    category: "Main Course",
  },
  {
    names: "Veg Malvani",
    price: "240",
    category: "Main Course",
  },
  {
    names: "Veg Amritsari",
    price: "240",
    category: "Main Course",
  },
  {
    names: "Veg Lahori",
    price: "240",
    category: "Main Course",
  },
  {
    names: "Veg Lazeez",
    price: "240",
    category: "Main Course",
  },
  {
    names: "Veg Seekh Kebab Masala",
    price: "260",
    category: "Main Course",
  },
  {
    names: "Hara Bhara Kebab Masala",
    price: "260",
    category: "Main Course",
  },
  {
    names: "Methi Masala",
    price: "200",
    category: "Main Course",
  },
  {
    names: "Methi Mattar",
    price: "210",
    category: "Main Course",
  },
  {
    names: "Kaju Methi Masala",
    price: "270",
    category: "Main Course",
  },
  {
    names: "Paneer Methi Masala",
    price: "250",
    category: "Main Course",
  },
  {
    names: "Methi Malai Masala",
    price: "230",
    category: "Main Course",
  },
  {
    names: "Baby Com Tawa Masala",
    price: "240",
    category: "Main Course",
  },
  {
    names: "Baby Corn Handi",
    price: "240",
    category: "Main Course",
  },
  {
    names: "Baby Corn Kadai",
    price: "240",
    category: "Main Course",
  },
  {
    names: "Mushroom Tawa",
    price: "240",
    category: "Main Course",
  },
  {
    names: "Mushroom Handi",
    price: "240",
    category: "Main Course",
  },
  {
    names: "Mushroom Kadai",
    price: "250",
    category: "Main Course",
  },
  {
    names: "Mushroom Butter Masala",
    price: "250",
    category: "Main Course",
  },
  {
    names: "Mushroom Makhanwala",
    price: "260",
    category: "Main Course",
  },
  {
    names: "Paneer Achari Masala",
    price: "270",
    category: "Main Course",
  },
  {
    names: "Paneer Malvani",
    price: "250",
    category: "Main Course",
  },
  {
    names: "Paneer Lahori",
    price: "260",
    category: "Main Course",
  },
  {
    names: "Paneer Methi",
    price: "260",
    category: "Main Course",
  },
  {
    names: "Palak Paneer",
    price: "260",
    category: "Main Course",
  },
  {
    names: "Paneer Mattar",
    price: "260",
    category: "Main Course",
  },
  {
    names: "Paneer Kadai",
    price: "260",
    category: "Main Course",
  },
  {
    names: "Paneer Handi",
    price: "260",
    category: "Main Course",
  },
  {
    names: "Paneer Hyderabadi",
    price: "260",
    category: "Main Course",
  },
  {
    names: "Paneer Makhanwala",
    price: "260",
    category: "Main Course",
  },
  {
    names: "Paneer Tikka Masala",
    price: "270",
    category: "Main Course",
  },
  {
    names: "Paneer Masala",
    price: "250",
    category: "Main Course",
  },
  {
    names: "Paneer Bhurji",
    price: "250",
    category: "Main Course",
  },
  {
    names: "Paneer Chatpata",
    price: "260",
    category: "Main Course",
  },
  {
    names: "Paneer Do Pyaza",
    price: "260",
    category: "Main Course",
  },
  {
    names: "Paneer Lehsuni",
    price: "260",
    category: "Main Course",
  },
  {
    names: "Veg Kofta",
    price: "240",
    category: "Main Course",
  },
  {
    names: "Malai Kofta",
    price: "250",
    category: "Main Course",
  },
  {
    names: "Nargish Kofta",
    price: "250",
    category: "Main Course",
  },
  {
    names: "Kashmiri Kofta",
    price: "250",
    category: "Main Course",
  },
  {
    names: "Dum Aloo Punjabi",
    price: "200",
    category: "Main Course",
  },
  {
    names: "Dum Aloo Kashmiri",
    price: "230",
    category: "Main Course",
  },
  {
    names: "Stuffed Tomato",
    price: "210",
    category: "Main Course",
  },
  {
    names: "Stuffed Capsicum",
    price: "210",
    category: "Main Course",
  },
  {
    names: "Kaju Masala",
    price: "290",
    category: "Main Course",
  },
  {
    names: "Kaju Curry",
    price: "290",
    category: "Main Course",
  },
  {
    names: "Kaju Khoya Masala",
    price: "290",
    category: "Main Course",
  },
  {
    names: "Paneer Butter Masala",
    price: "260",
    category: "Main Course",
  },
  {
    names: "Bhindi Masala",
    price: "180",
    category: "Main Course",
  },
  {
    names: "Bhindi Fried",
    price: "190",
    category: "Main Course",
  },
  {
    names: "Papad Ki Sabzi",
    price: "200",
    category: "Main Course",
  },
  {
    names: "Corn Capsicum Masala",
    price: "210",
    category: "Main Course",
  },
  {
    names: "Chef Special Veg",
    price: "310",
    category: "Main Course",
  },
  {
    names: "Veg Haweli",
    price: "300",
    category: "Main Course",
  },
  {
    names: "Veg Mansuri",
    price: "300",
    category: "Main Course",
  },
  {
    names: "Veg Shaam Savera",
    price: "300",
    category: "Main Course",
  },
  {
    names: "Paneer Dhaniya",
    price: "300",
    category: "Main Course",
  },
  {
    names: "Paneer Pasanda",
    price: "310",
    category: "Main Course",
  },
  {
    names: "Paneer Ball Rangeela",
    price: "300",
    category: "Main Course",
  },
  {
    names: "Tez Guncha",
    price: "350",
    category: "Main Course",
  },
  {
    names: "Aloo Gobhi",
    price: "180",
    category: "Main Course",
  },
  {
    names: "Mixed Veg",
    price: "180",
    category: "Main Course",
  },
  {
    names: "Veg Kadai",
    price: "210",
    category: "Main Course",
  },
  {
    names: "Veg Chilli Milli",
    price: "220",
    category: "Main Course",
  },
  {
    names: "Veg Peshawari",
    price: "220",
    category: "Main Course",
  },
  {
    names: "Green Peas Masala",
    price: "190",
    category: "Main Course",
  },
  {
    names: "Green Peas Tomato",
    price: "200",
    category: "Main Course",
  },
  {
    names: "Green Peas Mushroom",
    price: "210",
    category: "Main Course",
  },
  {
    names: "Roti",
    price: "30",
    category: "Breads",
  },
  {
    names: "Butter Roti",
    price: "40",
    category: "Breads",
  },
  {
    names: "Missi Roti",
    price: "50",
    category: "Breads",
  },
  {
    names: "Butter Missi Roti",
    price: "55",
    category: "Breads",
  },
  {
    names: "Paratha",
    price: "45",
    category: "Breads",
  },
  {
    names: "Butter Paratha",
    price: "55",
    category: "Breads",
  },
  {
    names: "Paneer Paratha",
    price: "140",
    category: "Breads",
  },
  {
    names: "Stuffed Paratha",
    price: "160",
    category: "Breads",
  },
  {
    names: "Lacha Paratha",
    price: "55",
    category: "Breads",
  },
  {
    names: "Butter Lacha Paratha",
    price: "65",
    category: "Breads",
  },
  {
    names: "Naan",
    price: "50",
    category: "Breads",
  },
  {
    names: "Butter Naan",
    price: "60",
    category: "Breads",
  },
  {
    names: "Garlic Naan",
    price: "65",
    category: "Breads",
  },
  {
    names: "Cheese Garlic Naan [ 4pcs]",
    price: "65",
    category: "Breads",
  },
  {
    names: "Butter Garlic Naan [ 3 pcs]",
    price: "40",
    category: "Breads",
  },
  {
    names: "Kulcha",
    price: "40",
    category: "Breads",
  },
  {
    names: "Butter Kulcha",
    price: "50",
    category: "Breads",
  },
  {
    names: "Chapati",
    price: "25",
    category: "Breads",
  },
  {
    names: "Roti Ki Tokri",
    price: "260",
    category: "Breads",
  },
  {
    names: "Stuffed Kulcha",
    price: "100",
    category: "Breads",
  },
  {
    names: "Garlic Bread",
    price: "150",
    category: "Breads",
  },
  {
    names: "Steam Rice",
    price: "120",
    category: "Rice and Biryani",
  },
  {
    names: "Jeera Rice",
    price: "150",
    category: "Rice and Biryani",
  },
  {
    names: "Dal Khichdi",
    price: "190",
    category: "Rice and Biryani",
  },
  {
    names: "Dal Khichdi Tadaka",
    price: "170",
    category: "Rice and Biryani",
  },
  {
    names: "Palak Khichdi",
    price: "170",
    category: "Rice and Biryani",
  },
  {
    names: "Curd Rice",
    price: "170",
    category: "Rice and Biryani",
  },
  {
    names: "Ghee Rice",
    price: "170",
    category: "Rice and Biryani",
  },
  {
    names: "Veg Pulao",
    price: "200",
    category: "Rice and Biryani",
  },
  {
    names: "Paneer Pulao",
    price: "210",
    category: "Rice and Biryani",
  },
  {
    names: "Kashmiri Pulao",
    price: "220",
    category: "Rice and Biryani",
  },
  {
    names: "Tawa Pulao",
    price: "210",
    category: "Rice and Biryani",
  },
  {
    names: "Paneer Dum Biryani",
    price: "260",
    category: "Rice and Biryani",
  },
  {
    names: "Veg Biryani",
    price: "220",
    category: "Rice and Biryani",
  },
  {
    names: "Paneer Biryani",
    price: "270",
    category: "Rice and Biryani",
  },
  {
    names: "Hyderabadi Biryani",
    price: "250",
    category: "Rice and Biryani",
  },
  {
    names: "Mushroom Biryani",
    price: "270",
    category: "Rice and Biryani",
  },
  {
    names: "Veg Dum Biryani",
    price: "250",
    category: "Rice and Biryani",
  },
  {
    names: "Paneer Hyderabadi Biryani",
    price: "260",
    category: "Rice and Biryani",
  },
  {
    names: "Paneer Tikka Biryani",
    price: "260",
    category: "Rice and Biryani",
  },
  {
    names: "Idli Sambar",
    price: "70",
    category: "South Indian",
  },
  {
    names: "Idli Fried",
    price: "80",
    category: "South Indian",
  },
  {
    names: "Butter Idli",
    price: "80",
    category: "South Indian",
  },
  {
    names: "Medu Vada",
    price: "80",
    category: "South Indian",
  },
  {
    names: "Idli Vada Sambar",
    price: "80",
    category: "South Indian",
  },
  {
    names: "Sada Dosa",
    price: "90",
    category: "South Indian",
  },
  {
    names: "Paper Sada Dosa",
    price: "140",
    category: "South Indian",
  },
  {
    names: "Masala Dosa",
    price: "130",
    category: "South Indian",
  },
  {
    names: "Paper Masala Dosa",
    price: "170",
    category: "South Indian",
  },
  {
    names: "Dosa Palak Sada",
    price: "110",
    category: "South Indian",
  },
  {
    names: "Dosa Palak Masala",
    price: "130",
    category: "South Indian",
  },
  {
    names: "Rava Sada Dosa",
    price: "100",
    category: "South Indian",
  },
  {
    names: "Rava Masala Dosa",
    price: "130",
    category: "South Indian",
  },
  {
    names: "Mysore Sada Dosa",
    price: "120",
    category: "South Indian",
  },
  {
    names: "Mysore Masala Dosa",
    price: "150",
    category: "South Indian",
  },
  {
    names: "Spring Roll Dosa",
    price: "160",
    category: "South Indian",
  },
  {
    names: "Sada Uttapam",
    price: "90",
    category: "South Indian",
  },
  {
    names: "Masala Uttapam",
    price: "120",
    category: "South Indian",
  },
  {
    names: "Onion Uttapam",
    price: "120",
    category: "South Indian",
  },
  {
    names: "Tomato Uttapam",
    price: "120",
    category: "South Indian",
  },
  {
    names: "Baked Nachos",
    price: "140",
    category: "Continental",
  },
  {
    names: "Mexican Baked Nachos",
    price: "170",
    category: "Continental",
  },
  {
    names: "Alfredo Pasta",
    price: "220",
    category: "Continental",
  },
  {
    names: "Pesto Pasta",
    price: "220",
    category: "Continental",
  },
  {
    names: "Arabica Pasta",
    price: "230",
    category: "Continental",
  },
  {
    names: "Mixed Sauce Pasta",
    price: "240",
    category: "Continental",
  },
  {
    names: "Pahadi Pasta",
    price: "260",
    category: "Continental",
  },
  {
    names: "Jalapeno Peppers",
    price: "260",
    category: "Continental",
  },
  {
    names: "Veg Manchurian Dry",
    price: "150",
    category: "Chinese",
  },
  {
    names: "Veg 65",
    price: "180",
    category: "Chinese",
  },
  {
    names: "Idli Chilli",
    price: "200",
    category: "Chinese",
  },
  {
    names: "Paneer Manchurian Dry",
    price: "220",
    category: "Chinese",
  },
  {
    names: "Paneer Chilli Dry [ 5 pcs]",
    price: "220",
    category: "Chinese",
  },
  {
    names: "Paneer Hot Garlic",
    price: "240",
    category: "Chinese",
  },
  {
    names: "Baby Corn Golden Fry",
    price: "220",
    category: "Chinese",
  },
  {
    names: "Veg Crispy",
    price: "200",
    category: "Chinese",
  },
  {
    names: "Paneer Crispy",
    price: "220",
    category: "Chinese",
  },
  {
    names: "Paneer Satay",
    price: "260",
    category: "Chinese",
  },
  {
    names: "Mushroom Manchurian",
    price: "230",
    category: "Chinese",
  },
  {
    names: "Mushroom 65",
    price: "230",
    category: "Chinese",
  },
  {
    names: "Paneer 65",
    price: "230",
    category: "Chinese",
  },
  {
    names: "Paneer Pepper Dry",
    price: "240",
    category: "Chinese",
  },
  {
    names: "Veg Manchurian Gravy",
    price: "181",
    category: "Chinese",
  },
  {
    names: "Baby Corn Manchurian Dry",
    price: "230",
    category: "Chinese",
  },
  {
    names: "Paneer Manchurian Gravy",
    price: "220",
    category: "Chinese",
  },
  {
    names: "Baby Corn Pepper Dry",
    price: "230",
    category: "Chinese",
  },
  {
    names: "Paneer Chilli Gravy",
    price: "220",
    category: "Chinese",
  },
  {
    names: "Baby Corn Chilli Dry",
    price: "230",
    category: "Chinese",
  },
  {
    names: "Atishah Aloo",
    price: "180",
    category: "Chinese",
  },
  {
    names: "Mushroom Chilli",
    price: "230",
    category: "Chinese",
  },
  {
    names: "Veg Spring Roll [ 6 pcs]",
    price: "200",
    category: "Chinese",
  },
  {
    names: "Veg Fried Rice",
    price: "190",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Veg Schezwan Fried Rice",
    price: "210",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Ginger Fried Rice",
    price: "200",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Mushroom Fried Rice",
    price: "220",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Paneer Fried Rice",
    price: "220",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Paneer Mushroom Fried Rice",
    price: "240",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Veg Singapore Fried Rice",
    price: "240",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Hong Kong Fried Rice",
    price: "240",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Lemon Fried Rice",
    price: "200",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Veg Combination Rice",
    price: "220",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Triple Schezwan Rice",
    price: "270",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Veg Manchurian Fried Rice",
    price: "260",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Pot Rice [ 350gms ]",
    price: "300",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Paneer Manchurian Fried Rice",
    price: "300",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Hakka Noodles",
    price: "200",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Veg Schezwan Noodles",
    price: "220",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Mushroom Noodles",
    price: "240",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Veg Singapore Noodles",
    price: "240",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Hong Kong Noodles",
    price: "240",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Triple Schezwan Noodles",
    price: "260",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Veg Manchurian Noodles [ 450gms]",
    price: "250",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Veg American Chop Suey",
    price: "230",
    category: "Fried Rice and Noodles",
  },
  {
    names: "Veg Sandwich",
    price: "70",
    category: "Sandwiches",
  },
  {
    names: "Veg Club Sandwich",
    price: "160",
    category: "Sandwiches",
  },
  {
    names: "Veg Grill Sandwich",
    price: "170",
    category: "Sandwiches",
  },
  {
    names: "Paneer Grill Sandwich",
    price: "170",
    category: "Sandwiches",
  },
  {
    names: "Veg Toast Sandwich",
    price: "90",
    category: "Sandwiches",
  },
  {
    names: "Cheese Chilli Toast Sandwich",
    price: "130",
    category: "Sandwiches",
  },
  {
    names: "Masala Toast Sandwih",
    price: "130",
    category: "Sandwiches",
  },
  {
    names: "Coleslaw Sandwich",
    price: "210",
    category: "Sandwiches",
  },
  {
    names: "Bread Butter Sandwich",
    price: "50",
    category: "Sandwiches",
  },
  {
    names: "Bread Butter Toast Sandwich",
    price: "60",
    category: "Sandwiches",
  },
  {
    names: "French Fries",
    price: "120",
    category: "Sandwiches",
  },
  {
    names: "Butter Pav Bhaji [ 350 gms 2 pav]",
    price: "150",
    category: "Pav Bhaji",
  },
  {
    names: "Khada Pav Bhaji",
    price: "160",
    category: "Pav Bhaji",
  },
  {
    names: "Masala Pav [ 350 gms 2 pav]",
    price: "160",
    category: "Pav Bhaji",
  },
  {
    names: "Paneer Pav Bhaji",
    price: "160",
    category: "Pav Bhaji",
  },
  {
    names: "Comida Special Pav Bhaji",
    price: "210",
    category: "Pav Bhaji",
  },
  {
    names: "Upma",
    price: "60",
    category: "Snacks",
  },
  {
    names: "Poha",
    price: "60",
    category: "Snacks",
  },
  {
    names: "Misal Pav",
    price: "90",
    category: "Snacks",
  },
  {
    names: "Tomato Omelette",
    price: "130",
    category: "Snacks",
  },
  {
    names: "Fried Papad",
    price: "40",
    category: "Accompaniments",
  },
  {
    names: "Masala Papad",
    price: "45",
    category: "Accompaniments",
  },
  {
    names: "Roasted Papad",
    price: "35",
    category: "Accompaniments",
  },
  {
    names: "Boondi Raita",
    price: "100",
    category: "Accompaniments",
  },
  {
    names: "Veg Raita",
    price: "80",
    category: "Accompaniments",
  },
  {
    names: "Pineapple Raita",
    price: "140",
    category: "Accompaniments",
  },
  {
    names: "Plain Curd",
    price: "70",
    category: "Accompaniments",
  },
  {
    names: "Royal Falooda",
    price: "150",
    category: "Desserts and Beverages",
  },
  {
    names: "Kesar Falooda",
    price: "150",
    category: "Desserts and Beverages",
  },
  {
    names: "Pista Falooda",
    price: "150",
    category: "Desserts and Beverages",
  },
  {
    names: "Dry Fruit Falooda",
    price: "160",
    category: "Desserts and Beverages",
  },
  {
    names: "Chocolate Falooda",
    price: "160",
    category: "Desserts and Beverages",
  },
  {
    names: "Fresh Fruit Salad",
    price: "150",
    category: "Desserts and Beverages",
  },
  {
    names: "Tea",
    price: "40",
    category: "Desserts and Beverages",
  },
  {
    names: "Nescafe",
    price: "60",
    category: "Desserts and Beverages",
  },
  {
    names: "Watermelon Juice",
    price: "110",
    category: "Desserts and Beverages",
  },
  {
    names: "Pineapple Juice",
    price: "110",
    category: "Desserts and Beverages",
  },
  {
    names: "Orange Juice",
    price: "110",
    category: "Desserts and Beverages",
  },
  {
    names: "Apple Juice",
    price: "120",
    category: "Desserts and Beverages",
  },
  {
    names: "Mixed Fruit Juice",
    price: "150",
    category: "Desserts and Beverages",
  },
  {
    names: "Virgin Mojito",
    price: "190",
    category: "Desserts and Beverages",
  },
  {
    names: "Strawberry Surprise Mocktail",
    price: "190",
    category: "Desserts and Beverages",
  },
  {
    names: "Blue Lagoon Mocktail",
    price: "190",
    category: "Desserts and Beverages",
  },
  {
    names: "Virgin Pincolada Mint Mocktail",
    price: "220",
    category: "Desserts and Beverages",
  },
  {
    names: "Refreshing Orange Mint Mocktail",
    price: "190",
    category: "Desserts and Beverages",
  },
  {
    names: "Fresh Lime Soda",
    price: "100",
    category: "Desserts and Beverages",
  },
  {
    names: "Fresh Lime Water",
    price: "100",
    category: "Desserts and Beverages",
  },
  {
    names: "Buttermilk",
    price: "65",
    category: "Desserts and Beverages",
  },
  {
    names: "Salted Lassi",
    price: "120",
    category: "Desserts and Beverages",
  },
  {
    names: "Sweet Lassi",
    price: "120",
    category: "Desserts and Beverages",
  },
  {
    names: "Kitkat Milk Shake",
    price: "140",
    category: "Desserts and Beverages",
  },
  {
    names: "Oreo Milk Shake",
    price: "140",
    category: "Desserts and Beverages",
  },
  {
    names: "Strawberry Milk Shake",
    price: "130",
    category: "Desserts and Beverages",
  },
  {
    names: "Chocolate Milk Shake",
    price: "130",
    category: "Desserts and Beverages",
  },
  {
    names: "Vanilla Milk Shake",
    price: "130",
    category: "Desserts and Beverages",
  },
  {
    names: "Pista Milk Shake",
    price: "130",
    category: "Desserts and Beverages",
  },
  {
    names: "Cold Coffee",
    price: "130",
    category: "Desserts and Beverages",
  },
  {
    names: "Deluxe Thali",
    price: "250",
    category: "Thali",
  },
  {
    names: "Comida Special Thali",
    price: "310",
    category: "Thali",
  },
];

const map = new Map();

const arr = [];
// const mySet = new Set()
for (let i = 0; i < menu.length; i++) {
  if (map.has(menu[i].names)) {
    arr[map.get(menu[i].names)].categories.push(menu[i].category);
  } else {
    arr.push({
      name: menu[i].names,
      price: menu[i].price,
      categories: [menu[i].category],
    });
    map.set(menu[i].names, i);
  }
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], ",");
}
