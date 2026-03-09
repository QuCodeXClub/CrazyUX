let btn = document.querySelector("#btn");
let p = document.querySelector(".para");
let url = "https://catfact.ninja/fact";

btn.addEventListener("click", async () => {
    btn.innerText = "Fetching Fact...";
    btn.disabled = true; 
    p.style.opacity = "0.5"; 
    let fact = await getFacts();

    p.innerText = fact;
    p.style.opacity = "1";

    btn.innerText = "Show New Fact";
    btn.disabled = false;
});

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error-", e);
        return "Oops! No cat facts found right now. Meow!";
    }
}