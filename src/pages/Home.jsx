import ImageSlider from '../components/ImageSlider';

// In your Home component's return statement, add ImageSlider before other sections:
function Home({ darkMode }) {
  return (
    <div className="home-page">
      <ImageSlider darkMode={darkMode} />
      {/* ...existing sections... */}
    </div>
  );
}
