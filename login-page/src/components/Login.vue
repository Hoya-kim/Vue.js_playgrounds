<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="onSubmit">
      <input name="uid" placeholder="Enter your ID" v-model="uid" v-validate="'required'">
      <input
        name="password"
        placeholder="Enter your password"
        v-model="password"
        type="password"
        v-validate="'required|min:6'"
      >
      <button type="submit">Login</button>
      <div class="alert-danger" v-if="errors.has('password')"></div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"; // mapGetters를 추가한다

export default {
  name: "Login",
  data: () => ({
    uid: "",
    password: ""
  }),
  methods: {
    ...mapActions(["login"]),
    async onSubmit() {
      this.$validator.validateAll(); // validation check
      if (!this.errors.any()) {
        try {
          let loginResult = await this.login({
            uid: this.uid,
            password: this.password
          });
          console.log(loginResult); // 로그인 성공하면 true, 아니면 false
          if (loginResult) this.goToPages(); // 페이지 이동
        } catch (err) {
          console.error(err);
        }
      } else {
        console.log("validate err");
      }
    },
    goToPages() {
      this.$router.push({
        name: "HelloWorld"
      });
    }
  },
  computed: {
    ...mapGetters({
      errorState: "getErrorState" // getter로 errorState를 받는다
    })
  }
};
</script>

<style scoped>
.alert-danger p {
  color: red;
}
</style>