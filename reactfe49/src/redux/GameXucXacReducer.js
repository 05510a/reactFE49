// tổ chức reducer để lưu trữ và xử lí state bài tập của game xúc sắc
const mangXucXac =[
    {ma:1,hinhAnh:'./img/game_xuc_xac/1.png'},
    {ma:2,hinhAnh:'./img/game_xuc_xac/2.png'},
    {ma:3,hinhAnh:'./img/game_xuc_xac/3.png'},
    {ma:4,hinhAnh:'./img/game_xuc_xac/4.png'},
    {ma:5,hinhAnh:'./img/game_xuc_xac/5.png'},
    {ma:6,hinhAnh:'./img/game_xuc_xac/6.png'}
]


const stateDefault = {
    banChon:false,
    soBanThang:0,
    tongSoBanChoi:0,
    mangXucXac:[
        {ma:1,hinhAnh:'./img/game_xuc_xac/1.png'},
        {ma:2,hinhAnh:'./img/game_xuc_xac/1.png'},
        {ma:3,hinhAnh:'./img/game_xuc_xac/1.png'},
    ]
}

export const gameXucXacReducer = (state = stateDefault,action) =>{
    switch (action.type){
        case 'DAT_CUOC_TAI_XIU' : {
            state.banChon=action.ketQuaChon;
            return {...state}
        }
        case 'PLAY_GAME':{
            // B1: Xử lí tạo xúc xắc ngẫu nhiên
            // tạo ra 3 viên xúc sắc ngẫu nhiên add vào mảng xúc xắc ngẫu nhiên
            let mangXucXacNgauNhien = [];
            // Thực hiện random 3 lần để tạo ra 3 viên xúc xắc ngẫu nhiên đưa vào mảng
            for (let i =0; i<3; i++){
                let soNgauNhien = Math.floor(Math.random() *6 );
                // Từ số ngẫu nhiên tạo ra xúc xắc ngẫu nhiên
                let xucXacNgauNhien = mangXucXac[soNgauNhien];
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            //Cập nhập lại state.mangXucXac
            state.mangXucXac = mangXucXacNgauNhien;

            // cập nhập số bàn chơi
            state.tongSoBanChoi += 1;

            // Tính điểm từ mangXucXacNgauNhien 
            let tongDiem = mangXucXacNgauNhien.reduce((tongDiem,xucXacNgauNhien,index)=>{
                return tongDiem += xucXacNgauNhien.ma;
            },0)
            // so Sánh tongDiem và giá triij người dùng chọn 
            // nếu tổng điểm lớn hơn 9 và banChon = true => thắng
            // hoặc nếu tổng ddiemr <=9 và banChon=fale =>
            if((tongDiem > 9 && state.banChon == true)|| (tongDiem<=9 && !state.banChon)){
                    state.soBanThang +=1
            }
            return{...state};
        }
    }
    return {...state}
}