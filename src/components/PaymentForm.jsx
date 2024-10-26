import React, { useState } from "react";

const PaymentForm = () => {
  const [readyReckoner, setReadyReckoner] = useState(24000);
  const [gstPercentage, setGstPercentage] = useState(5);
  const [stampDutyPercentage, setStampDutyPercentage] = useState(6);
  const [stampDutyValue, setStampDutyValue] = useState(0);
  const [totalGstValue, setTotalGstValue] = useState(0);
  const [agreementValue, setAgreementValue] = useState(22020000);
  const [totalValue, setTotalValue] = useState(22020000);
  const [parkingCharges, setParkingCharges] = useState(2000000);
  const [showTable, setShowTable] = useState(false);
  const [preAgPercentage, setPreAgPercentage] = useState(10);
  const [preAgAmount, setPreAgAmount] = useState(0);
  const [totalCashComponent, setCashComponent] = useState(0);
  const [tds, setTds] = useState(1);
  const [tdsAmount, setTdsAmount] = useState(0);
  const [preAgGst, setPreAgGst] = useState();
  const [novPayment, setNovPayment] = useState(0);
  const [fixedInstallment, setFixedInstallment] = useState(1321200);
  const [fixedInstallment2, setFixedInstallment2] = useState(660600);
  const [fixedInstallment3, setFixedInstallment3] = useState(440400);
  const [advanceAmount,setAdvanceAmount]=useState(221000)

  const [decPayment, setDecPayment] = useState(0);

  const trs = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to calculate total value can be added here
    let gstV, sdv, agv, pagamount;
    agv = parseInt(readyReckoner) * 770 + parseInt(parkingCharges);
    setAgreementValue(parseInt(agv));
    sdv = parseInt(agv) * 0.06;
    setStampDutyValue(parseInt(sdv));

    gstV = parseInt(agv) * 0.05;
    setTotalGstValue(parseInt(gstV));
    console.log(gstV, sdv);
    setShowTable(true);

    pagamount = parseInt(agv) * (preAgPercentage / 100);
    setPreAgAmount(parseInt(pagamount));

    let remainingValue = parseInt(26000) - parseInt(readyReckoner);
    let totalCash = parseInt(remainingValue) * 770;
    setCashComponent(parseInt(totalCash));

    let tdsamountcal = (agv * tds) / 100;
    setTdsAmount(tdsamountcal);

    let preaggst = parseInt(pagamount)*0.05;
    setPreAgGst(preaggst);
    let novPaymentAmount =
      parseInt(pagamount) +
      parseInt(sdv) +
      parseInt(preaggst) +
      parseInt(tdsamountcal) +
      parseInt(totalCash);
    setNovPayment(novPaymentAmount);

    let almostPay = parseInt(fixedInstallment*4)+parseInt(fixedInstallment2)+parseInt(fixedInstallment3)+parseInt(novPaymentAmount)+parseInt(advanceAmount);
    let decPay=parseInt(totalValue)-parseInt(almostPay)
    setDecPayment(decPay)
  };

  for (let i = 0; i < 4; i++) {
    trs.push(
      <tr>
        <td className="border border-right-1">{i +2} Installment</td>
        <td>{fixedInstallment}</td>
      </tr>
    );
  }
  return (
    <div>
      <div className="d-flex justify-content-center">
        <form className="border  my-5" onSubmit={handleSubmit}>
          <div className="my-2 mx-2 d-flex justify-content-start">
            <label>Ready Reckoner Number:</label>
            <input
              type="number"
              value={readyReckoner}
              onChange={(e) => setReadyReckoner(e.target.value)}
            />
          </div>
          <div className="my-2 mx-2 d-flex justify-content-start">
            <label>GST Percentage:</label>
            <input
              type="number"
              value={gstPercentage}
              onChange={(e) => setGstPercentage(e.target.value)}
            />
          </div>
          <div className="my-2 mx-2 d-flex justify-content-start">
            <label>Stamp Duty Percentage:</label>
            <input
              type="number"
              value={stampDutyPercentage}
              onChange={(e) => setStampDutyPercentage(e.target.value)}
            />
          </div>
          <div className="my-2 mx-2 d-flex justify-content-start">
            <label>Total Value:</label>
            <input
              type="number"
              value={totalValue}
              onChange={(e) => setTotalValue(e.target.value)}
            />
          </div>
          <div className="my-2 mx-2 d-flex justify-content-start">
            <label>Parking Charges:</label>
            <input
              type="number"
              value={parkingCharges}
              onChange={(e) => setParkingCharges(e.target.value)}
            />
          </div>
          <div className="my-2 mx-2 d-flex justify-content-start">
            <label>Pre-Agreement percentage:</label>
            <input
              type="number"
              value={preAgPercentage}
              onChange={(e) => setPreAgPercentage(e.target.value / 100)}
            />
          </div>
          <div className="my-2 mx-2 d-flex justify-content-start">
            <label>Tds Percentage:</label>
            <input
              type="number"
              value={tds}
              onChange={(e) => setTds(e.target.value)}
            />
          </div>
          <div className="my-2 mx-2 d-flex justify-content-start">
            <label>Advance Amount:</label>
            <input
              type="number"
              value={advanceAmount}
              onChange={(e) => setAdvanceAmount(e.target.value)}
            />
          </div>
          <button className="my-2" type="submit">
            Calculate
          </button>
        </form>
      </div>
      <div className="d-flex  justify-content-center my-5">
        {showTable && (
          <table className="border  table mt-4 w-50">
            <thead>
              <tr>
                <th className="border border-right-1">Item</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-right-1">Agreement Value</td>
                <td>{agreementValue}</td>
              </tr>
              <tr>
                <td className="border border-right-1">Stamp Duty</td>
                <td>{stampDutyValue}</td>
              </tr>
              <tr>
                <td className="border border-right-1">Tds {tds}%</td>
                <td>{tdsAmount}</td>
              </tr>
              <tr>
                <td className="border border-right-1">Total GST Value</td>
                <td>{totalGstValue}</td>
              </tr>
              <tr>
                <td className="border border-right-1">Total Value</td>
                <td>{totalValue}</td>
              </tr>
              <tr>
                <td className="border border-right-1">
                  Pre Agreement Amount {preAgPercentage} %
                </td>
                <td>{preAgAmount}</td>
              </tr>
              <tr>
                <td className="border border-right-1">
                  Pre Agreement Amount GST {gstPercentage} %
                </td>
                <td>{preAgGst}</td>
              </tr>
              <tr>
                <td className="border border-right-1">Total Cash Component </td>
                <td>{totalCashComponent}</td>
              </tr>
              <tr>
                <td className="border border-right-1">
                  <div>
                    <div>Nov Payment (Pre Agreement) </div>(Stamp Duty + Tds +
                    Pre agreement value+ Gst on Pre Agreement Value+ Cash
                    Component)<div></div>
                  </div>
                </td>
                <td>{novPayment}</td>
              </tr>
              <tr>
                <td className="border border-right-1">December Payment </td>
                <td>{decPayment}</td>
              </tr>

              {trs}
              <tr>
                <td className="border border-right-1"> 7 Installment</td>
                <td>{fixedInstallment2}</td>
              </tr>
              <tr>
                <td className="border border-right-1">8 Installment </td>
                <td>{fixedInstallment3}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;