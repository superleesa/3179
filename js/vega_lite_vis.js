const vg_1 = "https://raw.githubusercontent.com/superleesa/3179/main/js/choropleth2.json";
const vg_2 = "https://raw.githubusercontent.com/superleesa/3179/main/js/bump_chart.json";
const vg_3 = "https://raw.githubusercontent.com/superleesa/3179/main/js/line_chart.json";
const vg_4 = "https://raw.githubusercontent.com/superleesa/3179/main/js/line_chart3.json";


vegaEmbed("#minimum_wage_map", vg_1).catch(console.error);
vegaEmbed("#avg_wage_bump", vg_2).catch(console.error);
vegaEmbed("#cpi_lines", vg_3).catch(console.error);
vegaEmbed("#work_productivity_lines", vg_4).catch(console.error);