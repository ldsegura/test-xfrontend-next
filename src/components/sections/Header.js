import { useAppselector } from "@/redux/hooks";
import { setCurrencyReducer } from "@/redux/features/currencyReducer";
import Link from "next/link";

const Header = (props) => {
  const { logo, menu } = props;
  const { contact, currency, lang } = menu;
  const stateCurrency = useAppselector((state) => state.currencyReducer);

  return (
    <div>
      <div>{logo}</div>
      <div>{contact}</div>
      <div>
        <Link href={{ pathname: lang.href }} locale={lang.title} legacyBehavior>
          {lang.title}
        </Link>
      </div>
      <div>
        {currency.map((item, i) => {
          return (
            <div
              key={i}
              className={`${stateCurrency.currency === item ? "active" : ""}`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
