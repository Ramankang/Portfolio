$(document).ready(function() {
	$("#contactform").submit(function(event) {
	  // event.preventDefault();
	  // name = $("input[name=name]").val();
	  // jobTitle = $("input[name=jobTitle]").val();
	  // email = $("input[name=email]").val();
	  // contactNumber = $("input[name=contactNumber]").val();
	  // experience = $("input[name=experience]").val();
	  // education = $("input[name=education]").val();
	  // skillSet = $("input[name=skillSet]").val();
	  // hobbies = $("input[name=hobbies]").val();
	  // aboutMyself = $("textarea[name=aboutMyself]").val();
	  // uploadImage = $("input[type=file]").get(0).files[0];

	  sessionStorage.setItem("name", $("input[name=name]").val());
	  sessionStorage.setItem("jobTitle", $("input[name=jobTitle]").val());
	  sessionStorage.setItem("email", $("input[name=email]").val());
	  sessionStorage.setItem("contactNumber", $("input[name=contactNumber]").val());
	  sessionStorage.setItem("experience", $("input[name=experience]").val());
	  sessionStorage.setItem("education", $("input[name=education]").val());
	  sessionStorage.setItem("skillSet", $("input[name=skillSet]").val());
	  sessionStorage.setItem("hobbies", $("input[name=hobbies]").val());
	  sessionStorage.setItem("aboutMyself", $("textarea[name=aboutMyself]").val());
	  sessionStorage.setItem("uploadImage", $("input[type=file]").get(0).files[0]);

	  // console.log(name+" "+jobTitle+" "+email+" "+contactNumber+" "+experience+" "+education+" "+skillSet+" "+hobbies+" "+aboutMyself+" "+uploadImage);
	  // sessionStorage.getItem("name")
	// function readURL(input) {
	//   if (input.files && input.files[0]) {
	//     var reader = new FileReader();
	    
	//     reader.onload = function(e) {
	//       $("#uploadImage").attr('src', e.target.result);
	//     }
	    
	//     reader.readAsDataURL(input.files[0]); // convert to base64 string
	//   }
	// }

	$('#imgInp').change(function(){
      console.log ($('#files').prop('files'))
    })
        
	});
});