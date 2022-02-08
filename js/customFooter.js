function printCurrentYear()  {
    const d = new Date();
    const year = d.getFullYear();
    document.getElementById('footerSpan').innerHTML = year;
}