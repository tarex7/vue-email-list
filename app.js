const app = new Vue({
  el: "#root",
  data: {
    emailList: [],
  },
  created() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res) => {
          this.emailList.push(res.data.response);
        });
    }
  },
});
