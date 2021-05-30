import { useSelector } from "react-redux";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { getAmount, getCurrencyData, getCurrencyCode } from "../store/rates";

export function ExchangeRate() {
  const amount = useSelector(getAmount);
  const currencyCode = useSelector(getCurrencyCode);
  const currencyData = useSelector(getCurrencyData);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">Exchange Rates</h1>
      </section>
      <section>
        <AmountField amount={amount} />
        <CurrencyCodePicker
          // supportedCurrencies={supportedCurrencies}
          currencyCode={currencyCode}
        />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}
