<template>
    <body class=" bg-white">
    <main>
        <div class="flex justify-center h-[150px] w-full bg-stone-600 from-indigo-600 via-indigo-700 to-violet-800 ">
            <div class="flex h-4/5 px-16 items-center border-b-2 md:w-[1300px]">
                <div>
                    <h1 class="font-poppin text-4xl text-white"> Amongus</h1>
                </div>
                
            </div>

        </div>

                <div class="flex">
                <AdminSideBar/>

                    <slot />
                </div>
    </main>
</body>
  </template>