<template>
    <div id="background" class="h-full w-full bg-[#F9F7F7] py-8">
        <section class="w-full flex lg:flex-row p-6 gap-10">
            <div id="left" class="flex w-120 gap-10">
                <div id="img" class="w-36">
                    <!-- list of product -->
                    <img class="mt-4" src="https://image.uniqlo.com/UQ/ST3/th/imagesgoods/424873/item/thgoods_10_424873.jpg?width=750" alt="">
                    <img class="mt-4" src="https://image.uniqlo.com/UQ/ST3/th/imagesgoods/424873/sub/thgoods_424873_sub7.jpg?width=750" alt="">
                </div>
                <div id="img_selected" class="">
                    <!-- select product -->
                    <img id="previewImage" class="w-full" src="https://image.uniqlo.com/UQ/ST3/th/imagesgoods/424873/item/thgoods_10_424873.jpg?width=750" alt="">

                </div>
            </div>
            <aside class="flex-auto w-48">
                <div id="Product">
                    <h1 class="text-6xl font-bold">เสื้อยืด AIRism ไร้ตะเข็บ คอปาด แขนสั้น</h1>
                    <h2 class="mt-10 text-4xl font-bold">THB 590.00 ฿</h2>
                    <h3 class="mt-10 text-2xl">แอริซึ่ม' (AIRism) ผิวสัมผัสนุ่มเรียบลื่น ผิวสัมผัสเป็นธรรมชาติเหมาะกับสไตล์ที่หลากหลาย</h3>
                    <hr class="mt-5 ">
                </div>
                <!-- color -->
                <div id="color">
                <div>
                </div>
                    <h1 class="text-2xl font-bold mt-5 decoration-8">Color</h1>
                    <div class="mt-3 flex gap-6">
                        <div class="bg-black w-20 h-20 rounded-md  border-2"></div>
                        <div class="bg-[#C5C2C9] w-20 h-20 rounded-md border-2"></div>
                        <div class="bg-[#2F2B2C] w-20 h-20 rounded-md border-2"></div>
                        <div class="bg-[#E9A3A1] w-20 h-20 rounded-md border-2"></div>
                        <div class="bg-[#354E89] w-20 h-20 rounded-md border-2"></div>
                        <div class="bg-[#2E3144] w-20 h-20 rounded-md border-2"></div>
                    </div>
                </div>
            </aside>
        </section>
        <section id="Detail_main">

        </section>

    </div>
    
    <footer />
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    const previewImage = useState<string>(undefined)
        previewImage.value = "https://image.uniqlo.com/UQ/ST3/th/imagesgoods/424873/item/thgoods_10_424873.jpg?width=750"

    const change = function(_image: string){
        console.log(_image)
        previewImage.value = _image
    }


</script>