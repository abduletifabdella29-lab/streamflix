import {useState} from 'react';
import logo from '../../assets/Images/logo.png';
import {Link} from 'react-router-dom';
import {Search, Bell, User, ChevronDown} from 'lucide-react';
import styles from './Header.module.css'

function Header() {

    const [isSearchOpen, setSearchOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)

return (
<header className={styles.header}>
    <div className={styles.container}>
        {/* logo */}
        <img className={styles.logo} src={logo} alt="" />

        {/* nav links */}
        <nav className={styles.nav}>
            <Link className={styles.navLink} href="">Home</Link>
            <Link className={styles.navLink} href="">Tv Shows</Link>
            <Link className={styles.navLink} href="">Movies</Link>
            <Link className={styles.navLink} href="">New & Popular</Link>
            <Link className={styles.navLink} href="">My List</Link>
            <Link className={styles.navLink} href="">Browse by Language</Link>
        </nav>

        
        {/* right side section */}
        <div className={styles.rightSection}>
            {/* search */}
            <div className={styles.SearchContainer}>
                <button onClick={() => setSearchOpen(!isSearchOpen)}
                className={styles.SearchButton}>
                    <Search size={20}/>
                </button>

                {
                    isSearchOpen && (
                        <input type="text" placeholder='Search movie title' className={styles.searchInput} />
                    )
                }

            </div>

                {/* notification */}
            <button className={styles.iconButton}>
                {/* notification icon */}
                <Bell size={20}/>
                <span className={styles.notificationBadge}>3</span>
            </button>

            {/* profile */}
            <div className={styles.profileContainer}>
                <button onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={styles.profilebutton}>
                    <div className={styles.profileAvatar}>
                        {/* user icon */}
                        <User size={20}/>
                    </div>
                        {/* dropdown icon */}
                        <ChevronDown size={20}/>
                </button>

                {
                    isProfileOpen && (
                        <div className={styles.profileMenu}>
                            <Link className={styles.profileMenuItem}>Account</Link>
                            <Link className={styles.profileMenuItem}>help Center</Link>
                            <hr className={styles.profileMenuDivider} />
                            <button className={styles.profileMenuItem}>sign out</button>
                        </div>
                    )
                }

            </div>
        </div>
    </div>
</header>
)
}

export default Header