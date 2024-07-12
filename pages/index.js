// pages/index.js
import Header from '../components/Header';
import ProfilePicture from '../components/ProfilePicture';

const HomePage = () => {
  return (
    <div>
      <Header />
      <ProfilePicture />
      <p>Welcome to my portfolio!</p>
    </div>
  );
};

export default HomePage;
