import Profile from '../components/sections/Profile/Profile';
import Skills from '../components/sections/Skills/Skills';
import Links from '../components/sections/Links/Links';

export const HomePage = () => {
  return (
    <article className="max-w-7xl mx-auto">
      <Profile />
      <Skills />
      <Links />
    </article>
  );
};

export default HomePage;