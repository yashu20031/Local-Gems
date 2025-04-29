const talents = [
  {
    name: "Alice Johnson",
    category: "Music",
    skills: ["Singer", "Guitarist"],
    experience: "5 years",
    averageRating: 4.7,
    location: "New York",
    bio: "Passionate singer and guitarist with experience performing at local events."
  },
  {
    name: "Bob Smith",
    category: "Sports",
    skills: ["Chess Player"],
    experience: "10 years",
    averageRating: 4.9,
    location: "San Francisco",
    bio: "Competitive chess player with multiple tournament wins."
  },
  {
    name: "Cathy Lee",
    category: "Arts",
    skills: ["Painter", "Sculptor"],
    experience: "7 years",
    averageRating: 4.5,
    location: "Chicago",
    bio: "Creative artist specializing in modern painting and sculpture."
  },
  {
    name: "David Kim",
    category: "Music",
    skills: ["Pianist"],
    experience: "8 years",
    averageRating: 4.8,
    location: "Los Angeles",
    bio: "Classically trained pianist available for private lessons and performances."
  }
];

// Function to display talents in the list
function displayTalents(talentArray) {
  const talentList = document.getElementById('talentList');
  talentList.innerHTML = '';

  if (talentArray.length === 0) {
    talentList.innerHTML = '<li>No talents found matching your criteria.</li>';
    return;
  }

  talentArray.forEach(talent => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${talent.name}</h3>
      <p><strong>Category:</strong> ${talent.category}</p>
      <p><strong>Skills:</strong> ${talent.skills.join(', ')}</p>
      <p><strong>Experience:</strong> ${talent.experience}</p>
      <p><strong>Average Rating:</strong> ${talent.averageRating.toFixed(1)}</p>
      <p><strong>Location:</strong> ${talent.location}</p>
      <p><strong>Bio:</strong> ${talent.bio}</p>
    `;
    talentList.appendChild(li);
  });
}

// Function to handle search/filter
function handleSearch() {
  const skillInput = document.getElementById('searchSkill').value.toLowerCase();
  const locationInput = document.getElementById('searchLocation').value.toLowerCase();

  const filteredTalents = talents.filter(talent => {
    const skillMatch = skillInput === '' || talent.skills.some(skill => skill.toLowerCase().includes(skillInput));
    const locationMatch = locationInput === '' || talent.location.toLowerCase().includes(locationInput);
    return skillMatch && locationMatch;
  });

  displayTalents(filteredTalents);
}

// Initial display of all talents
displayTalents(talents);

// Attach event listener to search button
document.getElementById('searchBtn').addEventListener('click', handleSearch);
