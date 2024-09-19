let save_opt = document.getElementById("save_opt");
let delete_opt = document.getElementById("delete_opt");
let cookie_input = document.getElementById("cookie_input");

save_opt.addEventListener("click", function() {
    if(cookie_input.value != null && cookie_input.value != '') {
        // const d = new Date();
        // let exdays = 2;
        // d.setTime(d.getTime() + (exdays * 24*60*60*1000));
        // let expires = d.toUTCString();
        localStorage.setItem("savedtext", cookie_input.value);
    } else {
        alert("Enter some text to save");
    }


    update_output();
});

delete_opt.addEventListener("click", function() {
    localStorage.clear();
    update_output();
});

function get_val(value) {
    let stored_val = localStorage.getItem(value);

    if(stored_val == null || stored_val == "") {
        return "";
    } else {
        return stored_val;
    }
}

function update_output() {
    let cookie_output = document.getElementById("cookie_output");
    let cookie_val = get_val("savedtext");

    if(cookie_val != "") {
        cookie_output.innerHTML = cookie_val;
    } else {
        cookie_output.innerHTML = "Not saved...";
    }
    
}

update_output();