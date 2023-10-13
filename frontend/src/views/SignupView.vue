<template >
    <div class="h-100 " 
        style="background-image: -webkit-gradient(linear, left top, right top, from(#F2BDD6), to(#76bfe9)) !important;
         background-image: linear-gradient(to right, #F2BDD6 0%, #76bfe9 100%) !important;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                    <div class="card card-registration my-4">
                        <div class="row g-0">
                            <div class="col-xl-6 d-none d-xl-block">
                                <img src="../assets/image/Logo/Tini.png"
                                    alt="Sample photo" class="img-fluid"
                                    style="border-top-left-radius: .025rem; border-bottom-left-radius: .25rem;;" />
                            </div>
                            <div class="col-xl-6">
                                <div class="card-body p-md-4 text-black">
                                    <h3 class="mb-4 text-uppercase">Đăng ký</h3>

                                    <div class="row">
                                        <div class="col-md-10 mb-5">
                                            <div class="form-outline">
                                                <label class="form-label" for="form3Example1m">Họ và tên</label>
                                                <input type="text" id="form3Example1m" class="form-control form-control-lg" />
                                                
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-10 mb-5">
                                                <div class="form-outline">
                                                    <label class="form-label" for="form3Example1m1">Tên đăng nhập</label>
                                                    <input type="text" id="form3Example1m1" class="form-control form-control-lg" />
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-10 mb-5">
                                            <label class="form-label" for="form3Example90">Mật khẩu</label>
                                            <input type="text" id="form3Example90" class="form-control form-control-lg" />
                                            
                                        </div>

                                        <div class="d-flex justify-content-end pt-3">
                                            <button type="button" class="btn btn-light btn-lg">Xóa</button>
                                            <button type="button" class="btn btn-dark btn-lg ms-2">Đăng ký</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {



    
}
</script>

<style >
    .card-registration .select-input.form-control[readonly]:not([disabled]) {
        font-size: 1rem;
        line-height: 2.15;
        padding-left: .75em;
        padding-right: .75em;
    }
    .card-registration .select-arrow {
    top: 13px;
    }
    
</style>