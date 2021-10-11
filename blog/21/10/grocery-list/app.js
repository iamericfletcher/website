const app = Vue.createApp({
  data() {
    return {
      enteredItemValue: '',
      items: []
    };
  },
  methods: {
    addItem() {
        this.items.push(this.enteredItemValue);
    },
    removeItem(index) {
      this.items.splice(index, 1);

    }
  }
});

app.mount('#user-items');
