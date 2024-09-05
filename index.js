const kiemTraTuoiLaiXe = () => {
    const doTuoi = document.getElementById("tuoi").value*1;
    let result;
    if (doTuoi >= 16) {
        result = `<span style="background-color: red; color: white; font-size: 23px;">Đủ tuổi lái xe</span>`
    } else{
        result = `<span style="background-color: red; color: white; font-size: 23px;">Chưa đủ tuổi lái xe</span>`
    }
    const pThongBao = document.getElementById("pThongBao");
    pThongBao.innerHTML = result;
}

const kiemTraSanPham = () => {
    const sanPham = document.getElementById("sanPham").value*1;
    let result;
    if(sanPham > 100) {
        result = `<span style="background-color: red; color: white; font-size: 23px;">Bạn được thưởng 10% tháng lương này</span>`
    } else{
        result= `<span style="background-color: red; color: white; font-size: 23px;">Tháng này bạn không được thưởng 10%</span>`
    }
    const pSanPham = document.getElementById("pSanPham");
    pSanPham.innerHTML=result;
}

const chietKhauSanPham = () => {
    const chietKhau = document.getElementById("khuyenMai").value*1;
    let result;
    if(chietKhau > 500) {
        result = `<span style="background-color: red; color: white; font-size: 23px;">Quý khách được giảm 20%</span>`
    } else{
        result = `<span style="background-color: red; color: white; font-size: 23px;">Quý khách chưa được giảm 20%</span>`
    }
    const pKhuyenMai = document.getElementById("pKhuyenMai");
    pKhuyenMai.innerHTML=result;

}