import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService.js";
import { fetchUserData } from "../services/githubService.js";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

await fetchUserData(username);


    try {
      const data = await fetchAdvancedUsers(username, location, minRepos);
      setResults(data.items);
    } catch (err) {
      setError("Looks like we cant find the user");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-4 rounded-md space-y-4"
      >
        <h2 className="text-xl font-bold">Advanced GitHub User Search</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border px-3 py-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location (optional)"
          className="w-full border px-3 py-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          className="w-full border px-3 py-2 rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-gray-700">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {results.length > 0 &&
          results.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 bg-gray-100 p-3 rounded mt-3"
            >
              <img
                src={user.avatar_url}
                alt="avatar"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{user.login}</h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
