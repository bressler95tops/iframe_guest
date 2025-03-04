document.addEventListener("DOMContentLoaded", function() {
    let save_opt = document.getElementById("save_opt");
    let delete_opt = document.getElementById("delete_opt");
    let cookie_output = document.getElementById("cookie_output");
    let cookie_input = document.getElementById("cookie_input");
    const default_val = 'Not saved...';
    let cookie_val = default_val;

    save_opt.addEventListener("click", function() {
        if(cookie_input.value != null && cookie_output != null && cookie_input.value != '') {
            cookie_val = cookie_input.value;
            cookie_output.innerHTML = cookie_val;
            window.parent.postMessage(cookie_val, "*");
        } else {
            alert("Enter some text to save");
        }


    });

    delete_opt.addEventListener("click", function() {
        cookie_val = default_val;
        cookie_output.innerHTML = cookie_val;
        window.parent.postMessage(cookie_val, "*");
    });

    window.addEventListener('message', receiveMessage, false);

    function receiveMessage(event){
        console.log("Received something from parent: " + event.origin);
        if(event.origin!=="https://bressler95tops.github.io")
        return;
        
        cookie_val = event.data;
        cookie_output.innerHTML = cookie_val;

    }

});