import { Link, useLocation } from 'react-router-dom';
import { useUserContext } from '@/hooks/useUserContext';
import { bottombarLinks } from '@/constants';

const Bottombar = () => {
  const { pathname } = useLocation();
  const { isAuthenticated } = useUserContext();

  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link) => {
        // Pula links que requerem autenticação se o usuário não estiver logado
        if (link.requiresAuth && !isAuthenticated) return null;

        const isActive = pathname === link.route;
        const activeIcon = link.imgURL.replace('.svg', '-active.svg');
        const iconSrc = isActive ? activeIcon : link.imgURL;

        return (
          <Link
            to={link.route}
            key={link.label}
            className={`${isActive ? 'bg-primary-500 rounded-[10px]' : ''} flex-center flex-col gap-1 p-2 transition`}
          >
            <img
              src={iconSrc}
              alt={link.label}
              width={16}
              height={16}
              className={`${isActive ? 'invert-white' : ''}`}
            />
            <p className="tiny-medium text-light-2">{link.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;