import users from "./users.js";

// task - 1

const getUserNames = users => {
    const Arr = user.map((el) => el.name);
    return Arr;
  };
  
  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// task - 2

const getUsersWithEyeColor = (users, color) => {
    const filterArr = user.filter((el) => el.eyeColor === color);
    return filterArr;
  };
  
  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// task - 3

const getUsersWithGender = (users, gender) => {
    const Arr = user.filter((el) => el.gender === gender).map((el) => el.name);
    return Arr;
  };
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// task - 4

const getInactiveUsers = users => {
    const Arr = users.filter((el) => !el.isActive);
    return Arr;
  };
  
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// task - 5

const getUserWithEmail = (users, email) => {
    const findOne = user.find((el) => el.email === email);
    return findOne;
  };
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// task - 6

const getUsersWithAge = (users, min, max) => {
   const Arr = users.filter((el) => el.age >= min && el.age <= max);
   return Arr;
  };
  
  console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
  
  console.log(getUsersWithAge(users, 30, 40));
  // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// task - 7

const calculateTotalBalance = users => {
    const totalBalance = user.reduce((acc, vflue) => acc + value.balance, 0);
    return totalBalance;
  };
  
  console.log(calculateTotalBalance(users)); // 20916


// task - 8 

const getUsersWithFriend = (users, friendName) => {
    const Arr = users.filter((el) => el.friends.som((el) => el === friendName))
    .map((el) => el.name);

    return Arr;
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// task - 9

const getNamesSortedByFriendsCount = users => {
    const Arr = users.sort((f, b) => addEventListener.friends.lenght - b.friends.lenght)
    .map((el) => el.friends);
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// task - 10

const getSortedUniqueSkills = users => {
    let arr = [];
    users.forEach((el) => (arr = [... arr, ...el.skills]));
    arr.sort();
    const newArr =arr.filter((el, ind) => arr.indexOf(el) === ind).sort();
    return newArr; 
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]