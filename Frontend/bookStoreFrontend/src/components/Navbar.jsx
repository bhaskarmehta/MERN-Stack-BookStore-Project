import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = ()=>{
    const [scrolled,setScrolled]=useState(false);

    useEffect(()=>{
     const handleScroll = ()=>{
     if(window.scrollY>0){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
      window.addEventListener('scroll', handleScroll) // Whenever someone scrolls the window in Y axis direction then ScrollY event occurs
      // and then handleScroll method gets called.

      return ()=>{
        window.removeEventListener('scroll',handleScroll);
      }

    },[scrolled]);



    return (<>
    {/* <nav className={`navbar navbar-expand-lg ${scrolled ? styles.scrolled : ''}`}></nav> */}
  <nav className={`navbar navbar-expand-lg ${styles.sticky} ${scrolled ? styles.scrolled : ''}`}>
  <div class="container-fluid">
    <a class={`navbar-brand ${styles.bookStore}`} href="#">BookStore</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 ms-auto me-5">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Course</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
      <input class={`form-control me-2 ${styles.input}`} type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
    </>)
}

export default Navbar;