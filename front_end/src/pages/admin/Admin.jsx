import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";
import { URL_API } from "../../helper";
import RevenueCard from "../../components/admin/RevenueCard";
import RevenueAnnual from "../../components/admin/RevenueAnnual";
import ExpensesCard from "../../components/admin/ExpensesCard";
import ExpensesAnnual from "../../components/admin/ExpensesAnnual";
import ProfitCard from "../../components/admin/ProfitCard";
import ProfitAnnual from "../../components/admin/ProfitAnnual";
import Chart from "../../components/admin/Chart";
import TopSell from "../../components/admin/TopSell";
import TopSellAnnual from "../../components/admin/TopSellAnnual";
import ChartPieMg from "../../components/admin/ChartPieMg";
import ChartPieMl from "../../components/admin/ChartPieMl";
import ChartPieBt from "../../components/admin/ChartPieBt";
import ChartPreStock from "../../components/admin/ChartPreStock";

class Admin extends React.Component {
  state = {
    revenueMonthly: 0,
    revenueAnnual: 0,
    totalPrice: 0,
    shipping: 0,
    totalPriceMonthly: 0,
    shippingMonthly: 0,
  };

  render() {
    if (this.props.userGlobal.role !== "admin") {
      return <Redirect to="/" />;
    }

    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <h1>Admin Dashboard</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <RevenueCard />
          <ExpensesCard />
          <ProfitCard />
          <TopSell />
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <RevenueAnnual />
          <ExpensesAnnual />
          <ProfitAnnual />
          <TopSellAnnual />
        </div>
        <div className="my-4 mx-4">
          <h3 className="ml-5 mb-4">Earnings Overview <em>Excludes</em> Pre-Sales Stock Expenses and Restocks</h3>
          <Chart />
        </div>
        <br /> <br /> <br />
        <div className="my-4 mx-4">
          <h3 className="ml-5 mb-4">Earnings Overview <em>Includes</em> Pre-Sales Stock Expenses</h3>
          <ChartPreStock />
        </div>
        <br /> <br /> <br />
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            border: "solid 1px red",
          }}
        >
          <h2 className="d-flex justify-content-center p-4 mt-4">
            Drugs Sold in Milligram Unit (User's Cart)
          </h2>
          <ChartPieMg />
          <div className="d-flex flex-row justify-content-center mb-5">
            <h5 style={{ color: "#0088FE" }} className="d-inline p-2">
              Amoxicillin
            </h5>
            <h5 style={{ color: "#00C49F" }} className="d-inline p-2">
              Cefadroxil
            </h5>
            <h5 style={{ color: "#FFBB28" }} className="d-inline p-2">
              Dequalinium
            </h5>
            <h5 style={{ color: "#FF8042" }} className="d-inline p-2">
              Paracetamol
            </h5>
            <h5 style={{ color: "#e04be3" }} className="d-inline p-2">
              Valium
            </h5>
          </div>
        </div>
        <br /> <br />
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <h2 className="d-flex justify-content-center">
            Drugs Sold in Milliliter Unit (User's Cart)
          </h2>
          <ChartPieMl />
          <div className="d-flex flex-row justify-content-center">
            <h5 style={{ color: "#0088FE" }} className="d-inline p-2">
              Bromhexine
            </h5>
            <h5 style={{ color: "#00C49F" }} className="d-inline p-2">
              Ibuprofen
            </h5>
            <h5 style={{ color: "#FFBB28" }} className="d-inline p-2">
              Phenylephrine
            </h5>
            <h5 style={{ color: "#FF8042" }} className="d-inline p-2">
              Povidone
            </h5>
            <h5 style={{ color: "#e04be3" }} className="d-inline p-2">
              Simethicone
            </h5>
          </div>
        </div>
        <br /> <br />
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            border: "solid 1px red",
          }}
        >
          <h2 className="d-flex justify-content-center p-4 mt-4">
            Drugs Sold in Bottle Unit
          </h2>
          <ChartPieBt />
          <div className="d-flex flex-row justify-content-center mb-5">
            <h5 style={{ color: "#0088FE" }} className="d-inline p-2">
              Amoxicillin
            </h5>
            <h5 style={{ color: "#00C49F" }} className="d-inline p-2">
              Bromhexine
            </h5>
            <h5 style={{ color: "#FFBB28" }} className="d-inline p-2">
              Cefadroxil
            </h5>
            <h5 style={{ color: "#FF8042" }} className="d-inline p-2">
              Dequalinium
            </h5>
            <h5 style={{ color: "#e04be3" }} className="d-inline p-2">
              Ibuprofen
            </h5>
            <h5 style={{ color: "#003f5c" }} className="d-inline p-2">
              Paracetamol
            </h5>
            <h5 style={{ color: "#58508d" }} className="d-inline p-2">
              Phenylephrine
            </h5>
            <h5 style={{ color: "#bc5090" }} className="d-inline p-2">
              Povidone
            </h5>
            <h5 style={{ color: "#ff6361" }} className="d-inline p-2">
              Simethicone
            </h5>
            <h5 style={{ color: "#ffa600" }} className="d-inline p-2">
              Valium
            </h5>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
  };
};

export default connect(mapStateToProps)(Admin);
