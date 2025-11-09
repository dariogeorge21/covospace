import { useState } from 'react';

// Social Media Icon Components
const WhatsAppIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.316 1.363.364 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.316-2.427.364-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.316-1.363-.364-2.427C2.013 14.987 2 14.643 2 12v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.316 2.427-.364C8.93 2.013 9.27 2 12 2h.315zM12 7a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0z" clipRule="evenodd" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
  </svg>
);

// Social media links configuration
const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/cov_space/?hl=en',
    icon: InstagramIcon,
    color: 'hover:bg-pink-600',
  },
  {
    name: 'YouTube',
    href: '#',
    icon: YouTubeIcon,
    color: 'hover:bg-red-600',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61581623110489',
    icon: FacebookIcon,
    color: 'hover:bg-blue-600',
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: LinkedInIcon,
    color: 'hover:bg-blue-700',
  },
];

const FloatingSocialMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  };

  // WhatsApp link - using the phone number from Contact page
  const whatsappNumber = '919188939892'; // +91 918893 9892
  const whatsappMessage = encodeURIComponent('Hello! I would like to know more about Covspace workspace solutions.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded Social Icons */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${
          isExpanded
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${social.color} hover:text-white`}
            style={{
              animationDelay: `${index * 50}ms`,
              animation: isExpanded ? 'slideUp 0.3s ease-out forwards' : 'none',
            }}
            aria-label={`Visit our ${social.name} page`}
          >
            <social.icon />
          </a>
        ))}
      </div>

      {/* WhatsApp Button with Toggle Arrow */}
      <div className="relative">
        {/* Toggle Arrow Button */}
        <button
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          className={`absolute -top-2 -left-2 w-8 h-8 bg-lime-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center z-10 ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}
          aria-label={isExpanded ? 'Close social menu' : 'Open social menu'}
          aria-expanded={isExpanded}
        >
          <ChevronUpIcon />
        </button>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-lime-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-lime-700 group"
          aria-label="Contact us on WhatsApp"
        >
          <WhatsAppIcon />
          
          {/* Pulse animation ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75 animate-ping"></span>
        </a>
      </div>

      {/* Inline keyframe animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingSocialMenu;

