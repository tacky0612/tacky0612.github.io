import { SectionBackground } from '../../ui/SectionBackground/SectionBackground';
import { Section } from '../../ui/Section/Section';

const Profile: React.FC = () => {
  return (
    <Section id="profile">
      <SectionBackground>
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
      </SectionBackground>
    </Section>
  );
};

export default Profile;
