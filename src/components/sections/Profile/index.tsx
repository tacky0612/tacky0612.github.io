const Profile: React.FC = () => {
  return (
    <section id="profile" className="py-16 scroll-mt-20">
      <div className="bg-gray-100 rounded-3xl p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Profile</h2>
        <div className="flex justify-center space-x-4 mb-6">
          <img
            className="w-32 h-32 rounded-3xl object-cover"
            src="/images/icon1.JPG"
            alt="tacky0612 icon photo"
          />
          <img
            className="w-32 h-32 rounded-3xl object-cover"
            src="/images/icon2.JPG"
            alt="tacky0612 icon image"
          />
        </div>
        <p className="text-center text-lg">
          My name is Yu Takitani. (Please call me tacky0612!)
          <br />
          I'm a software engineer in Tokyo.
          <br />I like sushi.🍣
        </p>
      </div>
    </section>
  );
};

export default Profile;
