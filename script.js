const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
	let ans = 0;
  for (let key in library) {
  if(library[key].readingStatus)ans++;
}
	return ans;
};

// Do not change the code below

alert(numberOfBooksRead());
