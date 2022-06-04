<template>
  <menu class="menu_wrapper">
    <div class="menu_item">
      <img src="../../../assets/images/main.png" alt="" />
      <p class="menu_text">Главная</p>
    </div>

    <div class="menu_item">
      <img src="../../../assets/images/catalog.png" alt="" />
      <p class="menu_text">Каталог</p>
    </div>
    <div class="menu_item">
      <img src="../../../assets/images/box.png" alt="" />
      <p class="menu_text">Корзина</p>
    </div>
    <div class="menu_item">
      <img src="../../../assets/images/profile.png" alt="" />
      <p class="menu_text">Профиль</p>
    </div>
    <div class="menu_item">
      <img src="../../../assets/images/contact.png" alt="" />
      <p class="menu_text">Контакт</p>
    </div>
  </menu>
</template>

<script>
export default {
  name: "MenuSection",
  components: {},
  computed: {},
  data() {},
};
</script>

<style lang="scss">
.menu_wrapper {
  font-family: "Gilroy";
  font-style: normal;
  display: flex;
  margin-top: 2rem;
  margin-bottom: 0.375rem;
  justify-content: space-around;
  align-items: center;
  .menu_item {
    .menu_text {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #282828;
    }
  }
}
</style>
