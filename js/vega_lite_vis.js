const vg_1 = "../data/choropleth2.json";
const vg_2 = "../data/bump_chart.json";
const vg_3 = "../data/line_chart.json";
const vg_4 = "../data/line_chart3.json";


vegaEmbed("#minimum_wage_map", vg_1).catch(console.error);
vegaEmbed("#avg_wage_bump", vg_2).catch(console.error);
vegaEmbed("#cpi_lines", vg_3).catch(console.error);
vegaEmbed("#work_productivity_lines", vg_4).catch(console.error);