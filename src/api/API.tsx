const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; // Securely access token

const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1; // Random user start point
    const response = await fetch(`https://api.github.com/users?since=${start}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("GitHub API Error:", response.status, response.statusText);
      throw new Error("Invalid API response, check the network tab.");
    }

    return data;
  } catch (err) {
    console.error("Error fetching GitHub users:", err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("GitHub API Error:", response.status, response.statusText);
      throw new Error("Invalid API response, check the network tab.");
    }

    return data;
  } catch (err) {
    console.error(`Error fetching GitHub user ${username}:`, err);
    return {};
  }
};

export { searchGithub, searchGithubUser };
