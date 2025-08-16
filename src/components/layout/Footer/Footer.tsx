import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-6 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-end">
          <div className="flex space-x-4 mb-4">
            <a
              href="https://github.com/tacky0612"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/tacky0612"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
          <p className="text-white">
            Create by{' '}
            <a
              href="https://github.com/tacky0612"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 underline"
            >
              @tacky0612
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
