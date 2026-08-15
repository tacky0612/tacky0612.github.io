import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SectionBackground } from '../../ui/SectionBackground/SectionBackground';
import { Section } from '../../ui/Section/Section';
import { ExternalLink } from '../../ui/ExternalLink/ExternalLink';

const Links: React.FC = () => {
  return (
    <Section id="links">
      <SectionBackground>
        <h2 className="text-3xl font-bold text-center mb-8">Links</h2>

        <div className="bg-gray-50 rounded-3xl p-6">
          <div className="flex flex-wrap justify-center gap-6">
            <ExternalLink
              href="https://github.com/tacky0612"
              variant="unstyled"
              aria-label="GitHub"
              className="text-gray-800 hover:text-gray-600"
            >
              <FaGithub size={48} />
            </ExternalLink>
            <ExternalLink
              href="https://x.com/tacky0612"
              variant="unstyled"
              aria-label="X"
              className="text-gray-900 hover:text-gray-700"
            >
              <FaXTwitter size={48} />
            </ExternalLink>
            <ExternalLink
              href="https://instagram.com/tacky0612"
              variant="unstyled"
              aria-label="Instagram"
              className="text-pink-600 hover:text-pink-700"
            >
              <FaInstagram size={48} />
            </ExternalLink>
            <ExternalLink
              href="https://www.youtube.com/channel/UC2_GzSBKDFw2enGzea7ZZ2w"
              variant="unstyled"
              aria-label="YouTube"
              className="text-red-600 hover:text-red-700"
            >
              <FaYoutube size={48} />
            </ExternalLink>
            <ExternalLink
              href="http://tacky0612.hatenablog.com/"
              variant="unstyled"
              aria-label="はてなブログ"
              className="hover:opacity-80"
            >
              <img src="/images/hatena-blog-logo-s.png" alt="hatenablog" className="h-12 w-12" />
            </ExternalLink>
            <ExternalLink
              href="https://atcoder.jp/users/tacky0612"
              variant="unstyled"
              aria-label="AtCoder"
              className="hover:opacity-80"
            >
              <img src="/images/atcoder-logo.svg" alt="atcoder" className="h-12 w-12" />
            </ExternalLink>
          </div>
        </div>
      </SectionBackground>
    </Section>
  );
};

export default Links;
