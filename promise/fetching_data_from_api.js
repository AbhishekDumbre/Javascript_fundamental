async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const user = await response.json(); // Parse JSON data
    console.log("User Data:", user);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

fetchUserData(1);