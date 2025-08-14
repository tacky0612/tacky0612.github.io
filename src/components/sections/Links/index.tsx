import { FaGithub, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Links: React.FC = () => {
  return (
    <section id="links" className="py-16 scroll-mt-20">
      <div className="bg-gray-100 rounded-3xl p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Links</h2>

        <div className="bg-gray-50 rounded-3xl p-6">
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/tacky0612"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <FaGithub size={48} />
            </a>
            <a
              href="https://twitter.com/tacky0612"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              <FaTwitter size={48} />
            </a>
            <a
              href="https://instagram.com/tacky0612"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 transition-colors"
            >
              <FaInstagram size={48} />
            </a>
            <a
              href="https://www.youtube.com/channel/UC2_GzSBKDFw2enGzea7ZZ2w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 transition-colors"
            >
              <FaYoutube size={48} />
            </a>
            <a
              href="http://tacky0612.hatenablog.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/images/hatena-blog-logo-s.png" alt="hatenablog" className="h-12 w-12" />
            </a>
            <a
              href="https://atcoder.jp/users/tacky0612"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/images/atcoder-logo.svg" alt="atcoder" className="h-12 w-12" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;
