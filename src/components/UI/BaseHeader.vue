<template>
    <header>
        <nav>
            <h1><router-link to="/">Honor Cost Calculator</router-link></h1>
            <ul>
<h1><li><router-link to ="/info">Info</router-link></li></h1>
<h1><li><router-link to ="/contact">Contact</router-link></li></h1>
            </ul>
        </nav>
    </header>
</template>
 
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color:chocolate;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border: 2px solid black;
}
 
header a {
  text-decoration: none;
  color: black;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}
 
a:active,
a:hover,
a.router-link-active {
  border: 1px solid black;
}
 
h1 {
  margin: 0;
}
 
h1 a {
  color: white;
  margin: 0;
}
 
h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}
 
header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
 
header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
 
li {
  margin: 0 1rem;
}
</style>