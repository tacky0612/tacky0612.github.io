import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ExternalLink } from '../../ui/ExternalLink/ExternalLink';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-6 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-end">
          <div className="flex space-x-4 mb-4">
            <ExternalLink
              href="https://github.com/tacky0612"
              variant="primary"
              aria-label="GitHub"
              className="text-2xl"
            >
              <FaGithub />
            </ExternalLink>
            <ExternalLink
              href="https://x.com/tacky0612"
              variant="primary"
              aria-label="X"
              className="text-2xl"
            >
              <FaXTwitter />
            </ExternalLink>
          </div>
          <p className="text-white">
            Created by{' '}
            <ExternalLink
              href="https://github.com/tacky0612"
              variant="primary"
              className="underline"
            >
              @tacky0612
            </ExternalLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
