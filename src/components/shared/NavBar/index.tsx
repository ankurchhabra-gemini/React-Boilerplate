/* eslint-disable jsx-a11y/alt-text */
import { Resources } from '../../../config/Resources';
import MenuListComposition from '../MenuListComposition';

const NavBar = () => {
  return (
    <nav className="relative top-0 flex justify-between items-center h-[10vh] border-b border-slate-900/10">
      <img
        className="h-10  w-53.5 px-4 flex items-center"
        src={Resources.images.GeminiLogo}
      />
      <div className="absolute right-[35px]">
        <MenuListComposition />
      </div>
    </nav>
  );
};

export default NavBar;
