import React, { useState, useEffect } from "react";

const SelectList = () => {
  const [selectList, setSelectList] = useState([]);
  const [currentRate, setCurrentRate] = useState("");
  const [total, setTotal] = useState(0);

  //api
  useEffect(() => {
    const url = "https://api.nbp.pl/api/exchangerates/tables/A/?format=json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSelectList(() =>
          data[0].rates.filter(({ code }) =>
            ["EUR", "USD", "CHF"].includes(code)
          )
        );
      });
  }, []);

  function handleSelectChange(e) {
    setCurrentRate(e.target.value);
  }

  // UPDATE
  const amount =
    ("submit",
    (e) => {
      e.preventDefault();

      const { newAmount } = e.currentTarget.elements;
      const newAmountValue = { amount: newAmount.value };

      resultFn(newAmountValue, currentRate);
    });

  const resultFn = (newAmountValue, currentRate) => {
    setTotal(() => newAmountValue.amount * currentRate);
  };

  const options = selectList.map(({ code, mid }) => (
    <option key={code} value={mid}>
      {code}
    </option>
  ));

  //VISUAL EFFECT
  return (
    <form onSubmit={amount}>
      <input name="newAmount">{amount.newAmount}</input>
      <select name="selectList" onChange={handleSelectChange}>
        <option key="0" value="">
          Wybierz
        </option>
        {options}
      </select>
      <button className="btnResult">Przelicz</button>
      <span name="selectResult">{"to " + total.toFixed(2) + " PLN"}</span>
    </form>
  );
};

export default SelectList;
