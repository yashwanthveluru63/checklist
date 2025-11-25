const CONTENT_KEY = 'checklist_content';
const USER_KEY = 'checklist_user';

// Sample data for new users
const sampleData = [
  {
    id: '1',
    title: 'Oppenheimer',
    type: 'movie',
    status: 'finished',
    poster_url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400',
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    rating: 9,
    imdb_rating: 8.4,
    year: 2023,
    genre: ['Biography', 'Drama', 'History'],
    cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon'],
    director: 'Christopher Nolan',
    streaming_platforms: ['Prime Video', 'Apple TV+'],
    runtime: 180,
    date_added: '2024-01-15',
    date_finished: '2024-01-20',
    notes: 'Incredible cinematography and storytelling'
  },
  {
    id: '2',
    title: 'Stranger Things',
    type: 'series',
    status: 'watching',
    poster_url: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400',
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments.',
    rating: null,
    imdb_rating: 8.7,
    year: 2016,
    genre: ['Drama', 'Fantasy', 'Horror'],
    cast: ['Millie Bobby Brown', 'Finn Wolfhard', 'Winona Ryder'],
    director: null,
    streaming_platforms: ['Netflix'],
    seasons: 4,
    episodes_watched: 25,
    total_episodes: 34,
    runtime: null,
    date_added: '2024-02-05',
    notes: ''
  }
];

export const getStoredContent = () => {
  const stored = localStorage.getItem(CONTENT_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  saveContent(sampleData);
  return sampleData;
};

export const saveContent = (content) => {
  localStorage.setItem(CONTENT_KEY, JSON.stringify(content));
};

export const getStoredUser = () => {
  const stored = localStorage.getItem(USER_KEY);
  return stored ? JSON.parse(stored) : null;
};

export const saveUser = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const clearUser = () => {
  localStorage.removeItem(USER_KEY);
};
