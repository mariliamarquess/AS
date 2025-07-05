import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useUserContext } from '@/hooks/useUserContext';

const Topbar = () => {
  const { user, logout } = useUserContext();

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img 
            src="/logo.svg"
            alt="logo"
            width={100}
            height={325}
          />
        </Link>

        <div className="flex gap-4">
          <Button 
            variant="ghost" 
            className="shad-button_ghost" 
            onClick={logout}
          >
            <img src="/logout.svg" alt="logout" />
          </Button>
          <Link to={`/profile/${user?.id}`} className="flex-center gap-3">
            <img 
              src={user?.imageUrl || '/profile-placeholder.svg'}
              alt="profile"
              className='h-8 w-8 rounded-full'
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;