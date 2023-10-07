<template>
<div class="h-screen">
    <div class="mx-auto m-10 max-w-7xl justify-center px-6 md:space-x-6 xl:px-0">
        <!-- title page -->
        <div class="flex items-center p-5">
            <svg class="w-6 h-6 text-gray-800 dark:text-white mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm1-4H5m0 0L3 4m0 0h5.501M3 4l-.792-3H1m11 3h6m-3 3V1"/>
            </svg>
            <h1 class="text-2xl text-[#112D4E] font-bold">Cart</h1>
        </div>

        <div class="rounded-lg md:w-full p-5 bg-[#DBE2EF]">
            <!-- Select All -->
            <div class="flex items-center m-5">
                <input class="w-7 h-7 mr-5 rounded-lg border-2 border-[#112D4E] "
                    type="checkbox" v-model="selectAll" @change="selectAllItems"/>
                <label for="selectAll" class="text-xl font-bold text-[#112D4E]">Select All</label>
            </div>

            <ul class="">
                <!--Order Item-->
                <li class="w-full sm:h-52 items-center justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex"
                    v-for="(item, index) in items" :key="index">
                    <div class="flex justify-center items-center m-5">
                        <input class="w-7 h-7 mr-5 rounded-lg border-2 border-[#112D4E] "
                            type="checkbox" v-model="selectedItems" :value="item" />
                        <img class="w-96 rounded-lg sm:w-44 sm:h-44" src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image"/>
                    </div>
                    <div class="ml-10 mr-5 mt-5 sm:mt-0 sm:w-full">
                            <div class="flex justify-between mb-12">
                                <h2 class="text-lg font-bold text-[#112D4E] mb-5">Nike Air Max 2019</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div class="sm:flex justify-between items-center border-gray-100">
                                <div class="flex w-2/3">
                                    <div class="flex items-center justify-center mr-3">
                                    <button id="decrement-btn"
                                    class="flex justify-center items-center w-8 h-8 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                                        </svg>
                                    </button>
                                    <span id="counter" class="text-xl font-bold mx-4">1</span>
                                    <button id="increment-btn"
                                    class="flex justify-center items-center w-8 h-8 rounded-full text-white focus:outline-none bg-[#0075FF] hover:opacity-80">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12M6 12h12"></path>
                                        </svg>
                                    </button>
                                </div>
                                <select name="" id="" class="mr-3 border-[#DBE2EF] text-[#0074FF] rounded-lg">
                                    <option value="" selected disabled>Color</option>
                                </select>
                                <select name="" id="" class="border-[#DBE2EF] text-[#0074FF] rounded-lg">
                                    <option value="" selected disabled>Size</option>
                                </select>
                                </div>
                                <div class="sm:mt-0 mt-5">
                                    <p class="text-sm text-[#112D4E]">2000.00 Bath</p>
                                </div>
                            </div>
                    </div>

                </li>
            </ul>
            
            <!--Total Order-->
            <div class="flex justify-between items-center">
                <div class="flex m-5">
                    <h2 class="text-xl mr-5 text-[#112D4E] font-bold">Total</h2>
                    <p class="text-xltext-[#112D4E]">2000.00 Bath</p>
                </div>
                <div class="flex items-center">
                    <button @click="addToOrder" class="px-10 py-2 bg-[#0074FF] text-white font-semibold rounded-lg">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</div>
  </template>
<script lang="ts">
export default {
  data() {
    return {
      selectAll: false,
      selectedItems: [''],
      items: ['Item 1', 'item2'], // Replace with your list of items
      orderItems: [''],
    };
  },
  methods: {
    selectAllItems() {
      if (this.selectAll) {
        // Select all items
        this.selectedItems = [...this.items];
      } else {
        // Deselect all items
        this.selectedItems = [];
      }
    },
    addToOrder() {
      // Filter selected items and add them to the order
      const selected = this.items.filter(item => this.selectedItems.includes(item));

      // Add selected items to the orderItems array
      this.orderItems.push(...selected);

      // Clear the selected items (if needed)
      this.selectedItems = [];

      // You can also implement other logic here, such as calculating the total price.
    },
  }
};
</script>