import { Link } from 'react-router-dom';
import assets from '../../../../assets';

const Search = () => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('do validate');
    }
  };
  // fixed Header
  window.addEventListener('scroll', function () {
    const search = document.querySelector('.search');
    search.classList.toggle('active', window.scrollY > 100);
  });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={assets?.images?.logo} alt="" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search" />
            <input
              type="text"
              placeholder="Search and hit enter..."
              onKeyDown={handleKeyDown}
            />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <div className="cart">
              <Link to="/carts">
                <i className="fa fa-shopping-bag icon-circle" />
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
