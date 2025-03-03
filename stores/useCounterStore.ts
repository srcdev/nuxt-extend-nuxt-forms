const delay = (t: number) => new Promise((r) => setTimeout(r, t));

export const useCounterStore = defineStore('counterStore', () => {
  // State
  const count = ref(2);
  const incrementedTimes = ref(0);
  const decrementedTimes = ref(0);
  const numbers = ref<number[]>([]);

  // Getters
  const counter = computed(() => count.value);
  const double = computed(() => count.value * 2);

  // actions: {
  const increment = (amount = 1) => {
    incrementedTimes.value++;
    count.value += amount;
  };

  const changeMe = () => {
    console.log('change me to test HMR');
  };

  const fail = async () => {
    const n = count.value;
    await delay(1000);
    numbers.value.push(n);
    await delay(1000);
    if (count.value !== n) {
      throw new Error('Someone changed n!');
    }

    return n;
  };

  const decrementToZero = async (interval: number = 300) => {
    if (count.value <= 0) return;

    while (count.value > 0) {
      count.value--;
      decrementedTimes.value++;
      await delay(interval);
    }
  };

  return {
    counter,
    incrementedTimes,
    decrementedTimes,
    numbers,
    double,
    increment,
    changeMe,
    fail,
    decrementToZero,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
