<template >
  <!-- <head> -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ecommerce Navbar Design</title>

    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
<!-- </head> -->
   <div class="main-navbar shadow-sm sticky-top">
        <div class="top-navbar">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block" > 
                            <h5 class="brand-name" href="../">Tini Crochet</h5>
                        
                    </div>
                    <!-- <div class="col-md-5 my-auto">
                         <div class="logo-navbar">
                        <img src="../assets/image/Logo/Tini.png" alt="Logo">
                    </div>
                    </div> -->
                   
                    <div class="col-md-5 my-auto "  >
                        <form role="search">
                            <div class="input-group">
                                <input type="search" placeholder="Tìm kiếm" class="form-control"   />
                                <button class="btn bg-white" type="submit">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-5 my-auto" >
                        <ul class="nav justify-content-end">
                            
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fa fa-shopping-cart"></i> Giỏ hàng (0)
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../signin">
                                    <i class="fa fa-sign-in" ></i> Đăng nhập
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa fa-user"></i> Hồ sơ cá nhân
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href=""><i class="fa fa-user"></i> Thông tin</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fa fa-list"></i> Đơn hàng</a></li>
                                    <!-- <li><a class="dropdown-item" href="#"><i class="fa fa-heart"></i> My Wishlist</a></li> -->
                                    <li><a class="dropdown-item" href="#"><i class="fa fa-shopping-cart"></i> Đánh giá</a></li>
                                    <li><a class="dropdown-item" href=""><i class="fa fa-sign-out"></i> Đăng xuất</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
                   Tini Crochet
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="../">Trang chủ</a>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#">Len Sợi</a>
                            <span class="arrow arrow-down"></span>
                        </li> -->
                        <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i ></i> Len Sợi
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href=""><i class="fa fa-user"></i> Thông tin</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fa fa-list"></i> Đơn hàng</a></li>
                                    <!-- <li><a class="dropdown-item" href="#"><i class="fa fa-heart"></i> My Wishlist</a></li> -->
                                    <li><a class="dropdown-item" href="#"><i class="fa fa-shopping-cart"></i> Đánh giá</a></li>
                                    <li><a class="dropdown-item" href=""><i class="fa fa-sign-out"></i> Đăng xuất</a></li>
                                </ul>
                            </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Dụng cụ đan móc</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Phụ liệu trang trí</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Thành phẩm</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#">Accessories</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Appliances</a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script> -->
</template>

<script>
export default {

}
</script>

<style scoped>
  .main-navbar{
    border-bottom: 1px solid #ccc;
}
.main-navbar .top-navbar{
    background-color: #F29BC4;
    padding-top: 10px;
    padding-bottom: 10px;
    /* margin-right: 0px; */
}
.main-navbar .top-navbar .brand-name{
    color: #fff;
}
.main-navbar .top-navbar .nav-link{
    color: #fff;
    font-size: 16px;
    font-weight: 500;
}
.main-navbar .top-navbar .dropdown-menu{
    padding: 0px 0px;
    border-radius: 0px;
}
.main-navbar .top-navbar .dropdown-menu .dropdown-item{
    padding: 8px 16px;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
}
.main-navbar .top-navbar .dropdown-menu .dropdown-item i{
    width: 20px;
    text-align: center;
    color: #f2a7ad;
    font-size: 14px;
}
.main-navbar .navbar{
    padding: 0px;
    background-color: #F2CEDE;
}
.main-navbar .navbar .nav-item .nav-link{
    padding: 8px 20px;
    color: #000;
    font-size: 20px;
    font-weight: 490;
}

@media only screen and (max-width: 600px) {
    .main-navbar .top-navbar .nav-link{
        font-size: 12px;
        padding: 8px 10px;
    }
}#navbarSupportedContent{
  margin-left: 30%;
}
.logo-navbar{
    size: 10px;
}

</style>