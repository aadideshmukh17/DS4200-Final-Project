const takeaways = {
    "Aadi-boxplot.html": "📊 <strong>Takeaway:</strong> The box plot reveals that the number of months receiving WIC benefits increased notably in 2021–2023 compared to earlier years, with a wider spread suggesting greater variability in benefit duration. This likely reflects pandemic-era expansions of food assistance programs.",
    "Aadi-densityplot.html": "📊 <strong>Takeaway:</strong> The density plot shows that most households access benefits within the first few weeks of their last receipt, suggesting regular and ongoing reliance on assistance programs. The 2021–2023 wave shows a notably similar distribution to earlier years, indicating consistent patterns of benefit access.",
    "HanjunCho_Visualization1.html": "📊 <strong>Takeaway:</strong> Households that reported food worry as 'Often True' consistently received the most months of food security benefits, while 'Never True' households received the fewest. Benefit receipt rose across all worry categories in 2021–2023, reflecting pandemic program expansions.",
    "HanjunCho_Visualization2.html": "📊 <strong>Takeaway:</strong> The proportion of households with full food security increased from around 59% in 2015–2016 to 66% in 2021–2023, while low and very low food security rates declined slightly. However, roughly 1 in 3 households still experienced some level of food insecurity across all survey years.",
    "sankey.html": "📊 <strong>Takeaway:</strong> The Sankey diagram shows how the NHANES questionnaire's skip logic funnels households into food security categories. The majority (6,939) report no food worry and are classified as fully food secure. Of the 3,642 who report hardship, most experience severe enough conditions to be assessed further, ultimately landing in low (1,234) or very low (1,032) food security."
};

const currentPage = window.location.pathname.split("/").pop();
const takeawayText = takeaways[currentPage] || "";

document.body.insertAdjacentHTML('afterbegin', `
    <nav style="background-color:#1a1a2e; padding:12px 20px; display:flex; flex-wrap:wrap; gap:6px; margin-bottom:20px; justify-content:center; width:100%;">
        <a href="index.html" style="color:#ccc; text-decoration:none; font-family:Arial; font-size:14px; padding:6px 12px; border-radius:3px; transition:background 0.2s;"
           onmouseover="this.style.backgroundColor='#c4122d';this.style.color='white'"
           onmouseout="this.style.backgroundColor='transparent';this.style.color='#ccc'">Home</a>
        <a href="Aadi-boxplot.html" style="color:#ccc; text-decoration:none; font-family:Arial; font-size:14px; padding:6px 12px; border-radius:3px;"
           onmouseover="this.style.backgroundColor='#c4122d';this.style.color='white'"
           onmouseout="this.style.backgroundColor='transparent';this.style.color='#ccc'">Box Plot</a>
        <a href="Aadi-densityplot.html" style="color:#ccc; text-decoration:none; font-family:Arial; font-size:14px; padding:6px 12px; border-radius:3px;"
           onmouseover="this.style.backgroundColor='#c4122d';this.style.color='white'"
           onmouseout="this.style.backgroundColor='transparent';this.style.color='#ccc'">Density Plot</a>
        <a href="HanjunCho_Visualization1.html" style="color:#ccc; text-decoration:none; font-family:Arial; font-size:14px; padding:6px 12px; border-radius:3px;"
           onmouseover="this.style.backgroundColor='#c4122d';this.style.color='white'"
           onmouseout="this.style.backgroundColor='transparent';this.style.color='#ccc'">Bar Chart</a>
        <a href="HanjunCho_Visualization2.html" style="color:#ccc; text-decoration:none; font-family:Arial; font-size:14px; padding:6px 12px; border-radius:3px;"
           onmouseover="this.style.backgroundColor='#c4122d';this.style.color='white'"
           onmouseout="this.style.backgroundColor='transparent';this.style.color='#ccc'">Line Chart</a>
        <a href="sankey.html" style="color:#ccc; text-decoration:none; font-family:Arial; font-size:14px; padding:6px 12px; border-radius:3px;"
           onmouseover="this.style.backgroundColor='#c4122d';this.style.color='white'"
           onmouseout="this.style.backgroundColor='transparent';this.style.color='#ccc'">Sankey Diagram</a>
    </nav>
    ${takeawayText ? `
    <div style="max-width:860px; margin:0 auto 20px; padding:12px 20px; background:#f5f5f0; border-left:4px solid #c4122d; font-family:Georgia,serif; font-size:15px; line-height:1.6; color:#333;">
        ${takeawayText}
    </div>` : ""}
`);

document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";