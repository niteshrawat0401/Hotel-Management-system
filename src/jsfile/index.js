const url= "http://localhost:3000/posts"

let form= document.getElementById("registerForm");
form.addEventListener("submit", postData)

function postData(e){
  e.preventDfault()
      let name = form.elments[0].value
        let email = form.elments[1].value
        let password = form.elments[2].value
        let repeat = form.elments[3].value

        let obj = {
          name,
          email,
          password,
          repeat
        }

        fetch(url,{
          "method": "POST",
          "body": JSON.stringify(obj),
          "headers": {"content-type" : "application/json"}
        }).then(resp=>console.log(resp))
} 
fetchData()
  function fetchData(){
    fetch(url).then(resp=>resp.json()).then(resp=>console.log(resp))
  }


  function signup(){
    window.location.href = "login.html"
}
