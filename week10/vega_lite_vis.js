const vg_1 = "choropleth2.json";
const vg_2 = "bump_chart.json";
const vg_3 = "line_chart.json";


vegaEmbed("#minimum_wage_map", vg_1).catch(console.error);
vegaEmbed("#avg_wage_bump", vg_2).catch(console.error);
vegaEmbed("#cpi_lines", vg_3).catch(console.error);