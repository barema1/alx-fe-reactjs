import axios from "axios";


export async function fetchUserData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}

export async function fetchAdvancedUsers(username, location, minRepos) {
  let query = "";

  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>${minRepos}`;

  const url = `https://api.github.com/search/users?q=${query}`;

  const response = await axios.get(url);
  return response.data; 
}
