import styles from '../NavBar/NavBar.module.css'

const NavBarForm = () => {
  return (
    <form className="d-flex">
      <input
        className={`form-control me-2 ${styles['search-input']}`}
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        className={`btn btn-light ${styles['search-button']}`}
        type="submit"
      >
        Search
      </button>
    </form>
  )
}

export default NavBarForm
