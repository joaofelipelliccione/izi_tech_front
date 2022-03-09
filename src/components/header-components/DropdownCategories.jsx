// REF: https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
import React from 'react';
import { Link } from 'react-router-dom';
import categoriesStructure from '../../data/categories-structure';
import '../../styles/DropdownCategories.css';

function DropdownCategories() {
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = React.useState(false);
  const categoriesArray = categoriesStructure
    .map((category) => (category.topCategoryName)); // ['smartphones e telefonia', 'informática', 'games', 'eletrônicos, áudio e vídeo', 'veículos elétricos leves'].

  React.useEffect(() => {
    const pageClickEvent = ({ target }) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive]);

  return (
    <div id="categoriesDropdownContainer">
      <button
        type="button"
        onMouseEnter={ () => setIsActive(true) }
      >
        <span>mais categorias »</span>
      </button>
      <nav
        ref={ dropdownRef }
        className={ `categoriesDropdown ${isActive ? 'active' : 'inactive'}` }
        onMouseLeave={ () => setIsActive(false) }
      >
        <ul>
          {categoriesArray.filter((_cat, index) => index > 2)
            .map((category) => (
              <li key={ category }>
                <Link to="/">{category}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}

export default DropdownCategories;
