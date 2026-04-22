document.body.insertAdjacentHTML('afterbegin', `
    <nav style="background-color:#1a1a2e; padding:12px 20px; display:flex; flex-wrap:wrap; gap:6px; margin-bottom:20px; justify-content:center;">
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
           onmouseout="this.style.backgroundColor='transparent';this.style.color='#ccc'">Pie Chart</a>
    </nav>
`);