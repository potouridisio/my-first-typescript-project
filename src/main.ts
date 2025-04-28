import "./style.css";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geolocation;
}

interface Geolocation {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

async function getUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

const users = await getUsers();

for (let user of users) {
  const li = document.createElement("li");

  li.textContent = user.email;

  const userList = document.getElementById("user-list");

  if (userList) {
    userList.appendChild(li);
  }
}
