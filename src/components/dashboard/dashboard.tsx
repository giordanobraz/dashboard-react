import Chart from "react-apexcharts";
import Header from "../header/header";
import {
  cards_data,
  chart_survey_options,
  chart_survey_options_series
} from "./charts_options";
import "./dashboard.scss";

export default function Dashboard() {
  return (
    <main id="content">
      <Header />
      <div className="content_cards">
        {cards_data.map((card_data) => (
          <div className="card" key={card_data.key}>
            <img
              className="card_ico"
              src={card_data.image}
              alt={card_data.title}
            />
            <div>
              <p>{card_data.title}</p>
              <span>{card_data.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="charts">
        <Chart
          options={chart_survey_options}
          series={chart_survey_options_series}
          height={375}
          type="area"
        />
      </div>
    </main>
  );
}
