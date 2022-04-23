<template>
  <footer class="footer-container">
    <p>Developed by <a href="https://github.com/chapacais" target="_blank">Pedro Chapacais</a></p>
    <div class="footer__icons">
        <a href="https://www.linkedin.com/in/pedro-chapacais/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/chapacais" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: auto;
}

p {
  font-size: 10px;
}

.footer__icons {
  display: flex;
  gap: 15px;
}

.fa-brands {
  font-size: 18px;
  transition: all 0.2s;
}

.fa-brands:hover, a:hover {
  color: #222;
}

@media screen and (max-width: 600px) {
  footer {
    flex-direction: column;
    justify-content: space-evenly;
    padding: 5px 0 0 0;
    gap: 5px;
  }

  p {
    font-size: 9px;
  }

  .footer__icons {
    gap: 10px;
  }

  .fa-brands {
    font-size: 16px;
  }
}
</style>