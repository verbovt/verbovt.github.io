function calcthis(a)
{ 
var perc = document.getElementById("percent").value;

var planperc=new Array(0,0,0,0,0);
var depo = document.getElementById("deposit").value;

if (perc == "perc1") {planperc=Array(200, 200, 200, 200); min=30; max=10000;};
if (perc == "perc2") {planperc=Array(500, 500, 500, 500); min=300; max=20000;};
if (perc == "perc3") {planperc=Array(1000, 1000, 1000, 1000); min=2000; max=50000;};

if (depo < min)
  {
	document.getElementById("inpvar1").innerHTML = "n/a";
	document.getElementById("inpvar2").innerHTML = "n/a";						
	alert ("Minimal deposit is $"+min);	
  } 
else
if (depo > max)
  {
	document.getElementById("inpvar1").innerHTML = "n/a";
	document.getElementById("inpvar2").innerHTML = "n/a";						
	alert ("Maximal deposit is $"+max);	
  } 
  
else
  {

	  document.getElementById("inpvar1").innerHTML = planperc[0];
	  document.getElementById("inpvar2").innerHTML = planperc[0] * depo / 100;
	  
	
	if ( depo >=1000)
	  {
		document.getElementById("inpvar1").innerHTML = planperc[1];
		document.getElementById("inpvar2").innerHTML = planperc[1] * depo / 100;
	  
		if ( depo >= 1001)
		  {
			document.getElementById("inpvar1").innerHTML = planperc[2];
			document.getElementById("inpvar2").innerHTML = planperc[2] * depo / 100;
	  
			if ( depo >= 4001)
			  {
				document.getElementById("inpvar1").innerHTML = planperc[3];
				document.getElementById("inpvar2").innerHTML = planperc[3] * depo / 100;
	  
				if ( depo >= 12001)
				  {
					document.getElementById("inpvar1").innerHTML = planperc[4];
					document.getElementById("inpvar2").innerHTML = planperc[4] * depo / 100;
	  
                                                        if ( depo >= 5001)
				  {
					document.getElementById("inpvar1").innerHTML = planperc[5];
					document.getElementById("inpvar2").innerHTML = planperc[5] * depo / 100;

                                                        if ( depo >= 10001)
				  {
					document.getElementById("inpvar1").innerHTML = planperc[6];
					document.getElementById("inpvar2").innerHTML = planperc[6] * depo / 100;

				  }
                                                    }
                                                }
			  }
		  }
	  }
  }

}