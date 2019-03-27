const data = [
  {
    name: 'John Doe',
    age: 37,
    gender: 'Man',
    lookingfor: 'Women',
    location: 'Sioux Falls, SD',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 29,
    gender: 'Woman',
    lookingfor: 'Men and Women',
    location: 'New York, NY',
    image: 'https://randomuser.me/api/portraits/women/52.jpg'
  },
  {
    name: 'William Jones',
    age: 26,
    gender: 'Man',
    lookingfor: 'Men',
    location: 'Boston, MA',
    image: 'https://randomuser.me/api/portraits/men/70.jpg'
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
  document.getElementById('profileDisplay').innerHTML = `
  <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">${currentProfile.gender} looking for: ${currentProfile.lookingfor}</li>
  </ul>
  `;

  document.getElementById('imageDisplay').innerHTML = `
  <img style="border-radius: 7%;" src="${currentProfile.image}">
  `
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
      ? { value: profiles[nextIndex++], done: false }
      : { done: true }
    }
  }
}
