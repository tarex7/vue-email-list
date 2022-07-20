const app = new Vue({
  el: "#root",
  data: {
    email: "",
    emailList: [],
  },
  created() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res) => {
          this.email = res.data.response;
          this.emailList.push(this.email);
        });
    }
  },
});
