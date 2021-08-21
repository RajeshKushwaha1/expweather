const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.getElementById(".middle_layer");

const getInfo = async(event) => {
    event.preventDefault();
    let enteredCity = cityName.value;
    if (enteredCity.trim() === "") {
        // city_name.innerText = `Please Enter The City Name Properly`;
        // datahide.classList.add("data_hide");
        alert("Please Fill The City Name🙏");
    } else {
        try {
            console.log("you entered city " + enteredCity);
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=2ae5e977fef30cf60b520948e8e65afa`;

            const response = await fetch(url);
            let data = await response.json();

            city_name.innerText = `${data.name}, ${data.sys.country}`;
            temp_real_val.innerText = Math.floor(data.main.temp - 273);
            const tempMood = data.weather[0].main;
            console.log(city_name);

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color:yellow;font-size:5rem;'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color:silver;font-size:5rem;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud-rain' style='color:silver;font-size:5rem;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color: navy;font-size:5rem;'></i>";
            }

            datahide.classList.remove("data_hide");
        } catch (err) {
            // city_name.innerText = `Please Enter The City Name Properly`;
            datahide.classList.add("data_hide");
        }
    }
};

// Date and Time
const dNode = document.querySelector("#date");

setInterval(() => {
    const date = new Date(Date.now());
    let time = date.toTimeString().split(" ")[0];
    dNode.innerHTML = `${date.toDateString()} |  ${time}`;
}, 100);

// Background color change
submitBtn.addEventListener("click", getInfo);
(function() {
    let dynamic_color1 = document.getElementById("dynamic_color1");
    let dynamic_color2 = document.getElementById("dynamic_color2");
    let colorArr = [
        "#e74c3c",
        "#9b59b6",
        "#ecf0f1",
        "#2c3e50",
        "#f1c40f",
        "#c0392b",
        "#7f8c8d",
        "#ecf0f1",
        "#ecf0f1",
    ];
    let i = 0;
    setInterval(() => {
        if (i == colorArr.length - 1) {
            i = 0;
        } else {
            dynamic_color1.style.color = colorArr[i];
            dynamic_color2.style.color = colorArr[i];
            i++;
        }
    }, 1000);
})();