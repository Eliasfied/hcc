<template>
  <header>
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
</template>

<!-- <img src="../../assets/hcclogo.png" class="header-image" / -->

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
</style>
