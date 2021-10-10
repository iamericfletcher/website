const app = Vue.createApp({
  data() {
    return {
      enteredItemValue: '',
      items: []
    };
  },
  methods: {
    addItem() {

      if (this.enteredItemValue === 'cheese' || this.enteredItemValue === 'bread' || this.enteredItemValue === 'eggs') {
        this.items.push(this.enteredItemValue);
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);

    }
  }
});

app.mount('#user-items');
