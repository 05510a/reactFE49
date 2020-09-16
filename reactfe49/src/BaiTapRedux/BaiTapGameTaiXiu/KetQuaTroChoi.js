import React, { Component } from 'react'
// nhớ import cái này
import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {


    render() {
        const { banChon } = this.props;
        return (

            <div>
                <div className="display-4 text-center">
                    TỔNG ĐIỂM: <span className="text-danger">
                        {this.props.mangXucXac.reduce((tongDiem, xucXacNgauNhien, index) => {
                            return tongDiem += xucXacNgauNhien.ma;
                        }, 0)}
                    </span>
                </div>
                <div className="display-4 text-center">
                    BẠN CHỌN :<span className="text-danger">{banChon.banChon ? 'TÀI' : 'XỈU'}</span>
                </div>
                <div className="display-4 text-center">
                    SỐ BÀN THẮNG :<span className="text-success">{banChon.soBanThang}</span>
                </div>
                <div className="display-4 text-center">
                    SỐ BÀN CHƠI :<span className="text-warning">{banChon.tongSoBanChoi}</span>
                </div>
                <div className="mt-5 text-center">
                    <button className="btn btn-success" onClick={() => {
                        this.props.playGame()
                    }}>PLAY GAME</button>
                </div>
            </div>
        )
    }
}
// hàm lấy giá trị từ state redux về biến đổi thành props của component
const mapStateToProps = (state) => { // state là giá trị từ rootReducer truyền vào component
    return {
        banChon: state.stateGameXucXac,
        mangXucXac: state.stateGameXucXac.mangXucXac

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            dispatch({
                type: 'PLAY_GAME'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi)