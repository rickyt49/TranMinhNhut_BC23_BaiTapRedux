import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"> </button>{" "}
          <span className="text-light" style={{ fontSize: 30 }}>
            ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"> </button>{" "}
          <span className="text-light" style={{ fontSize: 30 }}>
            ghế đang đặt
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: 0 }}>
            {" "}
          </button>{" "}
          <span className="text-light" style={{ fontSize: 30 }}>
            ghế chưa đặt
          </span>
        </div>
        <div className="mt-5">
          <table className="table" border={2}>
            <thead>
              <tr className="text-light" style={{ fontSize: 25 }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th />
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          const action = {
                            type: "HUY_GHE",
                            soGhe: gheDangDat.soGhe,
                          };
                          this.props.dispatch(action);
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>

            <tfoot>
              <tr className="text-warning">
                <td />
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};
export default connect(mapStateToProps)(ThongTinGhe);
