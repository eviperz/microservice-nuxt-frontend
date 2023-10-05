<template>
<!-- sticky sidebar -->
<nav class="hidden md:w-44 lg:w-64 py-4 md:block">
        <div class="sticky top-12 flex flex-col gap-2 p-2 border-r-4 ">

            <AdminSideBarLink to ="/dashborad"> Dash Board</AdminSideBarLink>
            <AdminSideBarLink to ="/product"> Product</AdminSideBarLink>
            <AdminSideBarLink to ="/outOfStock"> Out of Stock</AdminSideBarLink>
            <AdminSideBarLink to ="/coupon"> Coupon Code</AdminSideBarLink>
            <AdminSideBarLink to ="/orderlist"> Order lists</AdminSideBarLink>
            <AdminSideBarLink to ="/changeMyPassword"> Change my password</AdminSideBarLink>
            
        </div>
    </nav>
</template>
