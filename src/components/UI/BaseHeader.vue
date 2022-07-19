<template>
  <header>
    <div>
      <button class="toggle-button" @click="toggleNavbar">
        <span class="toggle-button-bar"></span>
        <span class="toggle-button-bar"></span>
        <span class="toggle-button-bar"></span>
      </button>
    </div>
    <nav>
      <img src="../../assets/hcclogo.png" class="header-image" />
      <ul>
        <h1>
          <li><router-link to="/hcc">Home</router-link></li>
        </h1>
        <h1>
          <li><router-link to="/info">Info</router-link></li>
        </h1>
        <h1>
          <li><router-link to="/contact">Contact</router-link></li>
        </h1>
      </ul>
    </nav>
  </header>

  <nav class="mobile-nav" v-if="isToggled">
    <ul class="mobile-nav-items">
      <li class="mobile-nav-item">
        <router-link to="/hcc" @click="clickLink">Home</router-link>
      </li>
      <li class="mobile-nav-item">
        <router-link to="/info" @click="clickLink">Info</router-link>
      </li>
      <li class="mobile-nav-item">
        <router-link to="/contact" @click="clickLink">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<!-- <img src="../../assets/hcclogo.png" class="header-image" / -->

<script>
export default {
  data() {
    return {
      isToggled: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isToggled = true;
    },
    clickLink() {
      this.isToggled = false;
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 4rem;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border-bottom: 4px solid rgb(0, 98, 128);
}

header a {
  text-decoration: none;
  color: black;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

.header-image {
  height: 50px;
  margin-left: 85px;
}

h1 {
  margin: 0;
}

h1 a {
  color: rgb(0, 98, 128);
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  color: white;
}

header nav {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  margin-right: 50px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 1rem;
}

.toggle-button {
  width: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding-top: 0;
  padding-bottom: 0;
}
.toggle-button-bar {
  width: 100%;
  height: 0.2rem;
  background: white;
  display: block;
  margin: 0.6rem 0;
}

.mobile-nav {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  background: rgb(0, 98, 128);
  width: 10%;
  height: 100vh;
  list-style: none;
}

.mobile-nav a {
  color: black;
  font-size: 20px;
}

.mobile-nav-items {
  width: 90%;
  height: 100%;
  list-style: none;
  margin: 10% auto;
  padding: 0;
  text-align: center;
}
.mobile-nav-item {
  margin: 1rem 0;
}

@media (max-width: 375px) {
  .header-image {
    height: 50px;
    margin-left: 25px;
  }

  header ul {
    margin: auto;
    width: 50%;
  }

  h1 {
    width: 20%;
  }

  header nav {
    visibility: hidden;
  }

  .toggle-button {
    margin-left: 35px;
  }
  .mobile-nav a {
    color: black;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 375px) {
  .toggle-button {
    display: none;
  }
}
</style>
