    function submit_click()
  {
    const form = document.getElementById("form1")

let fname = form.elements[0];
let lname = form.elements[1];
let date  = form.elements['datetime'];
let address = form.elements['addresstext'];
let country = form.elements['country']



            var re = /^[ A-Za-z_@./#&+-]*$/;
            if (!((re.test(fname.value))&&(re.test(lname.value)))) {
                window.alert("Fname or Lname is invalid");
                return false;
            }
    
    // if(fname.value=="")
    // {
    //   console.log("firstname is empty")
    //   window.alert("Enter firstname");
    //   fname.focus();
    //   return false;
    // }
    // if(lname.value=="")
    // {
    //   console.log("lastname is empty");
    //   window.alert("Enter lastname");
    //   lname.focus();
    //   return false;
    // }
    if(date.value=="")
    {
      console.log("date is invalid");
      window.alert("Enter date");
      return false;
    }
    if(address.value=="")
    {
      console.log("address is empty");
      window.alert("Enter address");
      address.focus();
      return false;
    }
    if(country.value=="")
    {
      console.log("country is empty");
      window.alert("Enter country");
      country.focus();
      return false;
    }
    else { 
    alert('Hi '+fname.value+" "+lname.value+"\n"+"Wish me on "+date.value+"\n"+"Send post to "+address.value+"\n"+"I am from "+country.value)
    }
    return true;
  }

function getArea()
{
console.log("getArea");
  const formData = document.getElementById("form1");
  let pincode = formData.elements['pincode'];
  
  
    var request = new XMLHttpRequest();

  
request.open('GET', 'https://api.postalpincode.in/pincode/'+pincode.value, false);  // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
  parseJson(request.responseText)
}
}

function parseJson(data)
  {
    let obj = JSON.parse(data);
    let objData = obj[0].PostOffice[0].Name;
    console.log("new data:"+objData);
    document.getElementById("addresstext").innerHTML = objData;
  }

function setBackColor()
{
  var color = document.getElementById("color");
  var strColor = color.value;
  document.body.style.backgroundColor = strColor;
  
}