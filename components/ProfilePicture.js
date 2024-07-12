// components/ProfilePicture.js
import Image from 'next/image';
import profilePic from '../public/profile.jpg'; // Place the image in the public directory

const ProfilePicture = () => {
  return (
    <Image
      src={profilePic}
      alt="Profile Picture"
      width={150}
      height={150}
    />
  );
};

export default ProfilePicture;
