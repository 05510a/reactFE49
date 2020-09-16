//file này quản lí state theo nghiệp vụ

const stateDefault = {
    gioHang: [
        { maSP: 1, tenSP: 'Iphone', hinhAnh: './img/sp_iphoneX.png', gia: 1000, soLuong: 1 }
    ]
}

export const GioHangReducer = (state = stateDefault, action) => {
    // Hàm này giống hàm setState
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            //xử lí trả về state với render lại tất cả các component theo dõi state này
            //tạo ra sp gio Hang
            let spGioHang = {
                maSP: action.sanPham.maSP,
                tenSP: action.sanPham.tenSP,
                hinhAnh: action.sanPham.hinhAnh,
                soLuong: 1,
                gia: action.sanPham.gia,
            };
            //xử lí thêm giỏ hàng
            const gioHangUpdate = [...state.gioHang];
            const index = gioHangUpdate.findIndex(spGH => spGH.maSP === spGioHang.maSP);
            if (index !== -1) {
                gioHangUpdate[index].soLuong += 1;
            } else {
                gioHangUpdate.push(spGioHang)
            };
            //cập nhập lại state
            state.gioHang = gioHangUpdate;
            //Trả về state mới
            return { ...state };
        }   
        case 'XOA_GIO_HANG': {
            //sao chepps giá trị giỏ hàng ra 1 biến 
            const gioHangUpdate = [...state.gioHang];
            //xử lí giỏ hàng trên biến vừa tạo
            const index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSP);
            if (index !== -1) {
                gioHangUpdate.splice(index, 1);
            }
            //cập nhập là state giỏ hàng
            state.gioHang = gioHangUpdate;
            return { ...state }
        }
        case 'TANG_GIAM_SOLUONG': {
            const gioHangUpdate = [...state.gioHang];
            const index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSP);
            if (index !== -1) {
                if (action.tangGiam) {
                    gioHangUpdate[index].soLuong += 1;
                }
                else {
                    if (gioHangUpdate[index].soLuong <= 1) {
                        alert('số lượng ko được nhỏ hơn 1');
                    }else {
                        gioHangUpdate[index].soLuong -= 1;
                    }
                }

            }
            state.gioHang = gioHangUpdate;
            return{...state};
        }   
        default: return { ...state }
    }
}
