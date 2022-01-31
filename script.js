function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
    // Added % for readability
}

function compute()
{
    var principal = parseFloat(document.getElementById("principal").value); 
    if (principal <=  0) {
       alert('Enter a positive number');
       document.getElementById("principal").focus();
       return false;
    }
    // Converted to Floating Point to calculate amount
    var rate = parseFloat(document.getElementById("rate").value);
    // Converted to Floating Point to calculate amount
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var amount = principal + interest;
    // amount was undefined in the exercise
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("interest").innerText=interest;
    document.getElementById("result").innerHTML="If you deposit $"+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of $"+amount+",\<br\>in the year "+year+"\<br\>";
}

