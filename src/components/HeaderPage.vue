<!-- <template>
  <nav class="navbar">
    <div class="logo">
      <div class="footer-left">
        <p>Rabbitlala</p>
        <div class="image_container">
          <img :src="require('@/assets/White Rabbitlala Logo.png')" alt="" style="width:20px;height:15px;"/>
        </div>
      </div>
    </div>
    <input type="checkbox" id="menu-toggle" ref="menuToggle" />
    <label for="menu-toggle" class="menu-icon">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <div class="nav-links" ref="navLinks">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderPage",
  mounted() {
    this.$refs.menuToggle.addEventListener("change", () => {
      this.$refs.navLinks.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (
        !this.$refs.navLinks.contains(e.target) &&
        !e.target.classList.contains("menu-icon")
      ) {
        this.$refs.navLinks.classList.remove("show");
        this.$refs.menuToggle.checked = false;
      }
    });
  },
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem 2rem;
  position: relative;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 1rem;
}

.logo a {
  color: #fff;
  text-decoration: none;
}

.logo span {
  color: #007bff;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-links li {
  margin-right: 2rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #007bff;
}

/* Menu toggle */
#menu-toggle {
  display: none;
}

.menu-icon {
  display: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.menu-icon span {
  display: block;
  width: 20px;
  height: 3px;
  background-color: #fff;
  margin-bottom: 5px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

/* Responsive design */
@media only screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 1rem;
  }
  
  .logo {
    margin-bottom: 1rem;
  }
  
  .nav-links {
    flex-direction: column;
    display: none;
  }
  
  .nav-links li {
    margin-bottom: 1rem;
  }

  .nav-links.show {
    display: block;
  }
  
  .menu-icon {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  
  /* #menu-toggle:checked + .menu-icon + .nav-links {
    display: block;
  }
  
  #menu-toggle:checked + .menu-icon span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  #menu-toggle:checked + .menu-icon span:nth-child(2) {
    opacity: 0;
  }
  
  #menu-toggle:checked + .menu-icon span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  } */
}
/* Responsive */
</style> -->
