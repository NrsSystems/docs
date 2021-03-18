var last_updated_element = document.getElementById("last-updated");

function handle_response(result){
    let iso_date = JSON.parse(result)[0]['commit']['committer']['date'];
    let date = new Date(iso_date);
    last_updated_element.innerText = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

function http_request() {
    let document_url = `https://api.github.com/repos/nrssystems/docs/commits?path=${last_updated_element.getAttribute('path')}`;

    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if(http.readyState == XMLHttpRequest.DONE){
            if(http.status == 200){
                handle_response(http.responseText);
            }
            else {
                console.error("An error has occured");
            }
        }
    }
    http.open("GET", document_url, true);
    http.send();
}

http_request();
