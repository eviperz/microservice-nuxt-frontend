<template>
<!-- sticky sidebar -->
<aside class="hidden md:w-1/3 lg:w-1/4 py-4 md:block">
        <div class="sticky top-12 flex flex-col gap-2 p-2 border-r-4 mr-4">

            <AdminSideBarLink to ="/dashborad"> Dash Board</AdminSideBarLink>
            <AdminSideBarLink to ="/product"> Product</AdminSideBarLink>
            <AdminSideBarLink to ="/outOfStock"> Out of Stock</AdminSideBarLink>
            <AdminSideBarLink to ="/coupon"> Coupon Code</AdminSideBarLink>
            <AdminSideBarLink to ="/order"> Order lists</AdminSideBarLink>
            <AdminSideBarLink to ="/changeMyPassword"> Change my password</AdminSideBarLink>
            
            <button type="submit"
                class="text-red-500 text-sm font-semibold hover:text-purple-600 mb-1 bg-white px-3 py-2 hover:bg-red-200 rounded-md">
                Log Out
            </button>
        </div>
    </aside>
</template>