import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllTrending, setShowAllTrending] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const heroSlides = [
    {
      id: 1,
      category: "FARMING",
      title: "Monsoon Gardening: Grow Tangy Karonda (Indian Cranberry) in 6 Easy Steps",
      description: "Learn how to cultivate this nutritious berry in your garden",
      author: "Natasha Doshi",
      date: "20 Jul, 2025",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200",
      slug: "karonda-gardening"
    },
    {
      id: 2,
      category: "SUSTAINABILITY",
      title: "Meet the Changemakers: Stories of Social Impact",
      description: "Inspiring individuals making a difference in their communities",
      author: "Rashi Gupta",
      date: "20 Jul, 2025",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200",
      slug: "tree-planting-legacy"
    },
    {
      id: 3,
      category: "STARTUP",
      title: "From Village to Valley: The Startup Journey",
      description: "How rural entrepreneurs are revolutionizing Indian business",
      author: "Anamika Roy",
      date: "19 Jul, 2025",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200",
      slug: "startup-success-story"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // All 30 categories
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

  // Show only first 8 categories on home page
  const displayedCategories = allCategories.slice(0, 8);

  // All 10 trending stories (5 displayed + 5 more)
  const allTrendingStories = [
    {
      id: 1,
      title: "Monsoon Gardening: Grow Tangy Karonda (Indian Cranberry) in 6 Easy Steps",
      category: "Farming",
      author: "Natasha Doshi",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600",
      slug: "karonda-gardening"
    },
    {
      id: 2,
      title: "Meet the Changemakers: Stories of Social Impact",
      category: "Sustainability",
      author: "Rashi Gupta",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600",
      slug: "tree-planting-legacy"
    },
    {
      id: 3,
      title: "From Village to Valley: The Startup Journey",
      category: "Startup",
      author: "Anamika Roy",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600",
      slug: "startup-success-story"
    },
    {
      id: 4,
      title: "Hidden Gems: Unexplored Travel Destinations in India",
      category: "Travel",
      author: "Vikram Singh",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600",
      slug: "northeast-travel"
    },
    {
      id: 5,
      title: "Revolutionizing Education: Digital Learning in Rural Areas",
      category: "Education",
      author: "Priya Sharma",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
      slug: "digital-education-tribal"
    },
    {
      id: 6,
      title: "Organic Farming: The Future of Agriculture",
      category: "Farming",
      author: "Rajesh Kumar",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad649?w=600",
      slug: "ayurvedic-farming"
    },
    {
      id: 7,
      title: "Women Entrepreneurs Breaking Barriers in Rural India",
      category: "Women Power",
      author: "Meera Iyer",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600",
      slug: "women-entrepreneurs"
    },
    {
      id: 8,
      title: "Tech Innovations Transforming Healthcare Access",
      category: "Health",
      author: "Dr. Arvind Patil",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
      slug: "healthcare-tech"
    },
    {
      id: 9,
      title: "Wildlife Conservation: Success Stories from India",
      category: "Wildlife",
      author: "Rohit Bhargava",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600",
      slug: "wildlife-conservation"
    },
    {
      id: 10,
      title: "Traditional Crafts Revival: Artisans Making a Comeback",
      category: "Handicraft",
      author: "Sunita Reddy",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600",
      slug: "handicraft-revival"
    }
  ];

  // Show only first 3 trending stories on home page
  const trendingStories = allTrendingStories.slice(0, 3);

  // Determine which trending stories to display
  const displayedTrendingStories = showAllTrending ? allTrendingStories : trendingStories;

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribeMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');
      setTimeout(() => setSubscribeMessage(''), 5000);
    } else {
      setSubscribeMessage('Please enter a valid email address.');
      setTimeout(() => setSubscribeMessage(''), 3000);
    }
  };

  const featuredVideos = [
    {
      id: 1,
      title: "Solar Power Revolution in Remote Indian Villages",
      description: "How renewable energy is transforming rural communities",
      duration: "8:45",
      views: "125K",
      thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
      slug: "solar-power-villages"
    },
    {
      id: 2,
      title: "Crafting Success: Revival of Traditional Indian Handicrafts",
      description: "Master artisans keeping ancient crafts alive",
      duration: "12:30",
      views: "98K",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      slug: "handicraft-revival"
    },
    {
      id: 3,
      title: "From Garage to Glory: India's Startup Success Stories",
      description: "Young entrepreneurs building tomorrow's unicorns",
      duration: "15:20",
      views: "156K",
      thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
      slug: "startup-success"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <section className="hero-carousel">
        <div className="carousel-container">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <div className="container">
                  <span className="hero-category">{slide.category}</span>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <div className="hero-meta">
                    <span>{slide.author}</span>
                    <span>•</span>
                    <span>{slide.date}</span>
                  </div>
                  <Link to={`/story/${slide.slug}`} className="hero-btn">
                    Read Story
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title" style={{ color: '#00BFA5', textAlign: 'center' }}>Explore by Category</h2>
          <div className="categories-grid">
            {displayedCategories.map((category) => (
              <Link to={`/stories?category=${category.slug}`} key={category.name} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.count}</p>
              </Link>
            ))}
          </div>
          <div className="explore-all-wrapper">
            <Link to="/categories" className="explore-all-btn">
              Explore All Categories
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Stories Section */}
      <section className="trending-stories">
        <div className="container">
          <h2 className="section-title">Trending Stories</h2>
          <div className="stories-grid">
            {displayedTrendingStories.map((story) => (
              <Link to={`/story/${story.slug}`} key={story.id} className="story-card">
                <div className="story-image">
                  <img src={story.image} alt={story.title} />
                  <span className="story-category">{story.category}</span>
                </div>
                <div className="story-content">
                  <h3>{story.title}</h3>
                  <div className="story-meta">
                    <span className="author">{story.author}</span>
                    <span>•</span>
                    <span>{story.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="explore-all-wrapper">
            {!showAllTrending ? (
              <button onClick={() => setShowAllTrending(true)} className="explore-all-btn">
                View More Trending Stories
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            ) : (
              <button onClick={() => setShowAllTrending(false)} className="explore-all-btn">
                Show Less
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 19l-7-7 7-7"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Watch Videos Section */}
      <section className="video-stories-section">
        <div className="container">
          <div className="section-header-with-description">
            <h2 className="section-title">Watch Inspiring Videos</h2>
            <p className="section-description">Discover powerful stories through our curated video collection</p>
          </div>
          <div className="videos-grid">
            {featuredVideos.map((video) => (
              <Link to={`/video/${video.slug}`} key={video.id} className="video-card">
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-overlay">
                    <div className="play-button">
                      <svg viewBox="0 0 24 24" fill="white" width="60" height="60">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <span className="video-duration">{video.duration}</span>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p className="video-description">{video.description}</p>
                  <div className="video-meta">
                    <span className="views">{video.views} views</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="explore-all-wrapper">
            <Link to="/watch-videos" className="explore-all-btn watch-all-btn">
              <span>WATCH ALL VIDEOS</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Get Inspired Daily</h2>
              <p>Subscribe to receive positive stories and news directly in your inbox</p>
            </div>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit">Subscribe</button>
            </form>
            {subscribeMessage && (
              <div className={`subscribe-message ${subscribeMessage.includes('Thank') ? 'success' : 'error'}`}>
                {subscribeMessage}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title stats-title">Impact by Numbers</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Stories Published</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Monthly Readers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">200+</div>
              <div className="stat-label">Changemakers Featured</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Videos Created</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
