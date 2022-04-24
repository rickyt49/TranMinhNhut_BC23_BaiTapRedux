import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinGhe from "./ThongTinGhe";
import danhSachGhe from "../../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bgmovie.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div>
                  <div className="display-4 text-warning">
                    ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                  </div>
                  <div className="mt-3 text-light" style={{ fontSize: 25 }}>
                    Màn hình
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                    className={"mt-2"}
                  >
                    <div className="screen "></div>
                    {this.renderHangGhe()}
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="text-light mt-2" style={{ fontSize: 35 }}>
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <div>
                  <ThongTinGhe />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
