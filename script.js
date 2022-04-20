function submit_click()
  {
    const form = document.getElementById("form1")

let fname = form.elements[0];
let lname = form.elements[1];
let date  = form.elements['datetime'];
let address = form.elements['addresstext'];
let country = form.elements['country']

    if(fname.value=="")
    {
      console.log("firstname is empty")
      window.alert("Enter firstname");
      fname.focus();
      return false;
    }
    if(lname.value=="")
    {
      console.log("lastname is empty");
      window.alert("Enter lastname");
      lname.focus();
      return false;
    }
    if(date.value=="")
    {
      console.log("date is invalid");
      window.alert("Enter date");
      return false;
    }
    if(country.value=="")
    {
      console.log("country is empty");
      window.alert("Enter country");
      country.focus();
      return false;
    }
    if(address.value=="")
    {
      console.log("address is empty");
      window.alert("Enter address");
      address.focus();
      return false;
    }
    else {
    alert('Hi '+fname.value+" "+lname.value+"\n"+"Wish me on "+date.value+"\n"+"Send post to "+address.value+"\n"+"I am from "+country.value)
    }
    //return true;
  }


