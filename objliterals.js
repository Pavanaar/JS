	let fillform={
    	    'patient_name':'abc',
    	    age:14,
    	    phno:1234567890,
    	    tag:function(){
                console.log("patient  is "+ this.patient_name+" and is "+ this.age+" years old");
    	    }
	}
    console.log(fillform.patient_name);
    console.log(fillform.tag);
    console.log(fillform.age);
    console.log();
    console.log();
    console.log();
    
    