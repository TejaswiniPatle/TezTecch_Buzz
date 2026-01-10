import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
import '../components/BackToHome.css';

const Categories = () => {
  const allCategories = [
    { name: 'Sustainability', icon: '🌱', count: '150+ Stories', slug: 'sustainability' },
    { name: 'Startup', icon: '🚀', count: '80+ Stories', slug: 'startup' },
    { name: 'Travel', icon: '✈️', count: '60+ Stories', slug: 'travel' },
    { name: 'Farming', icon: '🌾', count: '90+ Stories', slug: 'farming' },
    { name: 'Education', icon: '📚', count: '70+ Stories', slug: 'education' },
    { name: 'Culture', icon: '🎭', count: '50+ Stories', slug: 'culture' },
    { name: 'Health', icon: '💚', count: '85+ Stories', slug: 'health' },
    { name: 'Technology', icon: '💻', count: '95+ Stories', slug: 'technology' },
    { name: 'Environment', icon: '🌍', count: '120+ Stories', slug: 'environment' },
    { name: 'Innovation', icon: '💡', count: '75+ Stories', slug: 'innovation' },
    { name: 'Social Impact', icon: '🤝', count: '100+ Stories', slug: 'social-impact' },
    { name: 'Women Power', icon: '👩', count: '110+ Stories', slug: 'women-power' },
    { name: 'Food', icon: '🍲', count: '65+ Stories', slug: 'food' },
    { name: 'Sports', icon: '⚽', count: '55+ Stories', slug: 'sports' },
    { name: 'Art', icon: '🎨', count: '60+ Stories', slug: 'art' },
    { name: 'Music', icon: '🎵', count: '45+ Stories', slug: 'music' },
    { name: 'Wildlife', icon: '🦁', count: '70+ Stories', slug: 'wildlife' },
    { name: 'Science', icon: '🔬', count: '80+ Stories', slug: 'science' },
    { name: 'Architecture', icon: '🏛️', count: '40+ Stories', slug: 'architecture' },
    { name: 'Heritage', icon: '🏰', count: '55+ Stories', slug: 'heritage' },
    { name: 'Handicraft', icon: '🧵', count: '50+ Stories', slug: 'handicraft' },
    { name: 'Fashion', icon: '👗', count: '45+ Stories', slug: 'fashion' },
    { name: 'Photography', icon: '📷', count: '60+ Stories', slug: 'photography' },
    { name: 'Literature', icon: '📖', count: '65+ Stories', slug: 'literature' },
    { name: 'Community', icon: '👥', count: '90+ Stories', slug: 'community' },
    { name: 'Youth', icon: '🎓', count: '75+ Stories', slug: 'youth' },
    { name: 'Elderly Care', icon: '👴', count: '40+ Stories', slug: 'elderly-care' },
    { name: 'Animal Welfare', icon: '🐕', count: '55+ Stories', slug: 'animal-welfare' },
    { name: 'Wellness', icon: '🧘', count: '70+ Stories', slug: 'wellness' },
    { name: 'Adventure', icon: '🏔️', count: '50+ Stories', slug: 'adventure' }
  ];

  return (
    <div className="categories-page">
      <Link to="/" className="back-to-home-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Home
      </Link>
      <div className="categories-header">
        <div className="container">
          <h1>All Categories</h1>
          <p>Discover inspiring stories across all our categories</p>
        </div>
      </div>

      <section className="all-categories-section">
        <div className="container">
          <div className="all-categories-grid">
            {allCategories.map((category) => (
              <Link 
                to={`/stories?category=${category.slug}`} 
                key={category.name} 
                className="category-card"
              >
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
