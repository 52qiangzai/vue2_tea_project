export const loginNavBar = {
  methods: {
    // 左箭头点击事件
    leftClick() {
      this.$router.go(-1);
    },
  },
};

export const myNavBar = {
  methods:{
    // 左箭头点击事件
    leftClick() {
      this.$router.go(-1);
    },
    // 右箭头点击事件
    rightClick() {
      this.$router.push({ name: "home" });
    },
  }
}