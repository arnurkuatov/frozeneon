<template>
  <div class="wrapper">
    <footer>
      <h2>Kuatov Arnur</h2>
      <p>
        from Almaty City, frontend developer, 23 y.o. <br />
        Master degree IT Project Management <br />
        but now what a miracle the developer
      </p>
      <div class="author-info">
        <a href="https://t.me/ArnuRRK" target="_blank">
          <img
            src="https://img.icons8.com/color/48/000000/telegram-app--v1.png"
            alt="tg"
          />
        </a>
        <a href="https://github.com/arnurkuatov" target="_blank">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/github.png"
            alt="gh"
          />
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
footer {
  border: 1px solid hotpink;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  h2 {
    color: #e91e63;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    color: #315495;
  }
}
</style>
