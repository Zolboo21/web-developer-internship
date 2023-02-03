$(document).ready(function() {
	$(window).load(function() {
		// var planValu = $('input[name=planSub]:checked').val();
		// if(planValu == 1){ $(".showFrmH").slideDown(); }
		// else{ $(".showFrmH").slideUp(); }
	});
	
	// $("#planSubY").click(function() {
			// $(".showFrmH").slideDown();
	// });
	// $("#planSubN").click(function() {
			// $(".showFrmH").slideUp();
	// });
	

	$('#regFrmb').on('click', function(){ 
		var valid = '',
			c_title = $("#c_title").val(),
			c_fname = $("#c_fname").val(),
			c_lname = $("#c_lname").val(),
			c_email = $("#c_email").val(),
			affiliation = $("#affiliation").val(),
			fcountry = $("#fcountry").val(),
			department = $("#department").val(),
			organisation = $("#organisation").val(),
			aline1 = $("#aline1").val(),
			aline2 = $("#aline2").val(),
			icountry = $("#icountry").val(),
			invoicetxt = $("#invoicetxt").val(),
			//paymentOn = $("input[name=planSub]:checked").val(),
			paymentTr = $("input[name=topicR]:checked").val(),
			needVisa = $("input[name=needVisa]:checked").val(),
			travelIns = $("input[name=travelIns]:checked").val(),
			cintend = $("input[name=cintend]:checked").val(),
			topicI = $('#topicI').val(),
			ccapch = $("#ccapch").val();
			
			
			
			
			//if (paymentOn == '') { $('#c_title').addClass('plcHlder'); valid += 'v'; }
			if (c_title == '') { $('#c_title').addClass('plcHlder'); valid += 'v'; }
			if (c_fname == '') { $('#c_fname').addClass('plcHlder'); valid += 'v'; }
			if (c_lname == '') { $('#c_lname').addClass('plcHlder'); valid += 'v'; }
			if (affiliation == '') { $('#affiliation').addClass('plcHlder'); valid += 'v'; }
			if (fcountry == '') { $('#fcountry').addClass('plcHlder'); valid += 'v'; }
			if (c_email == '') { $('#c_email').addClass('plcHlder'); valid += 'v'; }
			if (department == '') { $('#department').addClass('plcHlder'); valid += 'v'; }
			if (organisation == '') { $('#organisation').addClass('plcHlder'); valid += 'v'; }
			if (aline1 == '') { $('#aline1').addClass('plcHlder'); valid += 'v'; }
			if (ccapch == '') { $('#ccapch').addClass('plcHlder'); valid += 'v'; }
			// if (!cemail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) { valid += '<br />-И-мэйл хаяг'+isr; }
			$('.snfFrm input').focus(function(){
				$(this).removeClass('plcHlder');
				$("#sucsmsj").slideUp();
			});
			
			if (valid!='') {
				$("#sucsmsj").addClass('contactrmsj').fadeIn("slow");
				$("#sucsmsj").html('<h1 style="color: red">Please fill out red feild</h1>');
			}
			else {
				var datastr ='t=ajax&c_title=' + c_title + 
					'&c_fname=' + c_fname + 
					'&c_lname=' + c_lname + 
					'&c_email=' + c_email + 
					'&affiliation=' + affiliation + 
					'&fcountry=' + fcountry + 
					'&department=' + department + 
					'&organisation=' + organisation + 
					'&aline1=' + aline1 + 
					'&aline2=' + aline2 + 
					'&icountry=' + icountry + 
					'&invoicetxt=' + invoicetxt + 
					//'&paymentOn=' + paymentOn + 
					'&paymentTr=' + paymentTr + 
					'&needVisa=' + needVisa + 
					'&travelIns=' + travelIns + 
					'&cintend=' + cintend + 
					'&topicI=' + topicI + 
					'&ccapch='+ccapch;
				$("#sucsmsj").css("display", "block");
				$("#sucsmsj").html('<h1 style="color: green">Sending .... </h1>');
				$("#sucsmsj").fadeIn("slow");
				$.ajax({	
					type: "POST",
					url: "saveconf.php",
					data: datastr,
					cache: false,
					success: function(data, textStatus, jqXHR){
						if(jqXHR.status == 400) {
							$("#sucsmsj").addClass('contactrmsj').fadeIn("slow");
							$("#sucsmsj").html('<h1>'+jqXHR.responseText+'</h1>');
						}
						else {						
							$("#sucsmsj").fadeIn("slow");
							$("#sucsmsj").html(data);
							$("#ccapch").val('');
							$(".ccapclk a").click();
							$("#c_title").val('');
							$("#c_fname").val('');
							$("#c_lname").val('');
							$("#c_email").val('');
							$("#affiliation").val('');
							$("#fcountry").val('');
							$("#department").val('');
							$("#organisation").val('');
							$("#aline1").val('');
							$("#aline2").val('');
							$("#icountry").val('');
							$("input[name=planSub]:checked").val(),
							$("input[name=topicR]:checked").val(),
							$("#topicI").val('');
							$("#invoicetxt").val('');
							setTimeout('$("#sucsmsj").fadeOut("slow")',10000);
						};
					},
					error: function(jqXHR, textStatus, errorThrown){
						$("#sucsmsj").addClass('contactrmsj').fadeIn("slow");
						$("#sucsmsj").html('<h1>'+jqXHR.responseText+'</h1>');
					}
				});
			};
			return false;
			
			
			
			
	});
		
		
		
	//--------------------------------------------------------------AFF	
		
	$('#affFrmb').on('click', function(){ 
		var valid = '',
			abtitle1 = $("#abtitle1").val(),
			abfname = $("#abfname").val(),
			ablname = $("#ablname").val(),
			abemail = $("#abemail").val(),
			abaff = $("#abaff").val(),
			abaffcntr = $("#abaffcntr").val(),
			abdepartment = $("#abdepartment").val(),
			aborganisation = $("#aborganisation").val(),
			abaddressl1 = $("#abaddressl1").val(),
			abaddressl2 = $("#abaddressl2").val(),
			abaffcntr2 = $("#abaffcntr2").val(),
			ab3title = $("#ab3title").val(),
			abauthors = $("#abauthors").val(),
			abtopic = $("#abtopic").val(),
			ababstracttxt = $("#ababstracttxt").val(),
			ccapch = $("#ccapch").val();
			
			if (abtitle1 == '') { $('#abtitle1').addClass('plcHlder'); valid += 'v'; }
			if (abfname == '') { $('#abfname').addClass('plcHlder'); valid += 'v'; }
			if (ablname == '') { $('#ablname').addClass('plcHlder'); valid += 'v'; }
			if (abemail == '') { $('#abemail').addClass('plcHlder'); valid += 'v'; }
			if (abaff == '') { $('#abaff').addClass('plcHlder'); valid += 'v'; }
			if (abaffcntr == '') { $('#abaffcntr').addClass('plcHlder'); valid += 'v'; }
			if (abdepartment == '') { $('#abdepartment').addClass('plcHlder'); valid += 'v'; }
			if (aborganisation == '') { $('#aborganisation').addClass('plcHlder'); valid += 'v'; }
			if (abaddressl1 == '') { $('#abaddressl1').addClass('plcHlder'); valid += 'v'; }
			if (abaffcntr2 == '') { $('#abaffcntr2').addClass('plcHlder'); valid += 'v'; }
			if (ab3title == '') { $('#ab3title').addClass('plcHlder'); valid += 'v'; }
			if (abauthors == '') { $('#abauthors').addClass('plcHlder'); valid += 'v'; }
			if (abtopic == '') { $('#abauthors').addClass('abtopic'); valid += 'v'; }
			if (ccapch == '') { $('#ccapch').addClass('plcHlder'); valid += 'v'; }
			if(uploadChange==false) valid += 'v';
			$('.snfFrm1 input').focus(function(){
				$(this).removeClass('plcHlder');
				$("#sucsmsj").slideUp();
			});
			
			if (valid!='') {
				$("#sucsmsj").addClass('contactrmsj').fadeIn("slow");
				var str='';
				if(uploadChange==false) str=' and choose file.';
				$("#sucsmsj").html('<h1 style="color: red">Please fill out red feild'+str+'</h1>');
			}
			else {
				if(uploaded==false) uploadFiles()
				var datastr ='t=ajax&abtitle1=' + abtitle1 + 
					'&abfname=' + abfname + 
					'&ablname=' + ablname + 
					'&abemail=' + abemail + 
					'&abaff=' + abaff + 
					'&abaffcntr=' + abaffcntr + 
					'&abdepartment=' + abdepartment + 
					'&aborganisation=' + aborganisation + 
					'&abaddressl1=' + abaddressl1 + 
					'&abaddressl2=' + abaddressl2 + 
					'&abaffcntr2=' + abaffcntr2 + 
					'&ab3title=' + ab3title + 
					'&abauthors=' + abauthors + 
					'&abtopic=' + abtopic + 
					'&ababstracttxt=' + ababstracttxt + 
					'&ccapch='+ccapch;
				$("#sucsmsj").css("display", "block");
				$("#sucsmsj").html('<h1 style="color: green">Sending .... </h1>');
				$("#sucsmsj").fadeIn("slow");
				$.ajax({	
					type: "POST",
					url: "abstract.php",
					data: datastr,
					cache: false,
					success: function(data, textStatus, jqXHR){
						if(jqXHR.status == 400) {
							$("#sucsmsj").addClass('contactrmsj').fadeIn("slow");
							$("#sucsmsj").html('<h1>'+jqXHR.responseText+'</h1>');
						}
						else {						
							$("#sucsmsj").fadeIn("slow");
							$("#sucsmsj").html(data);
							$("#ccapch").val('');
							$(".ccapclk a").click();
							$("#abtitle1").val('');
							$("#abfname").val('');
							$("#ablname").val('');
							$("#abemail").val('');
							$("#abaff").val('');
							$("#abaffcntr").val('');
							$("#abdepartment").val('');
							$("#aborganisation").val('');
							$("#abaddressl1").val('');
							$("#abaddressl2").val('');
							$("#abaffcntr2").val('');
							$("#ab3title").val('');
							$("#abauthors").val('');
							$("#abtopic").val('');
							$("#ababstracttxt").val('');
							setTimeout('$("#sucsmsj").fadeOut("slow")',10000);
						};
					},
					error: function(jqXHR, textStatus, errorThrown){
						$("#sucsmsj").addClass('contactrmsj').fadeIn("slow");
						$("#sucsmsj").html('<h1>'+jqXHR.responseText+'</h1>');
					}
				});
			};
			return false;			
	});	
		
		//--------------------------------------------------------------FILE UPLOAD
		// Variable to store your files
		var files; var uploaded=false; var uploadChange=false; var fileName='';
		// Add events
		$('input[type=file]').on('change', prepareUpload);
		// Grab the files and set them to our variable
		function prepareUpload(event){
		  files = event.target.files;
		  uploadChange=true;
		  //if(!uploaded) uploadFiles();
		}
		
		// Catch the form submit and upload the files
		function uploadFiles(){
		  if(uploadChange==false){
		  	  $("#sucsmsj").html('<h1 style="color:green;">Please choose file!</h1>');
		  	  $("#sucsmsj").fadeIn("slow");
		  	  return false;
		  }
		  // START A LOADING SPINNER HERE
		  // Create a formdata object and add the files
		  $("#sucsmsj").html('<h1 style="color:green;">File uploading... Please wait!</h1>');
		  $("#sucsmsj").fadeIn("slow");
		  var data = new FormData();
		  $.each(files, function(key, value){
		    data.append(key, value);
		  });
		  $.ajax({
		    url: 'upload.php?files',
		    type: 'POST',
		    data: data,
		    cache: false,
		    dataType: 'json',
		    processData: false, // Don't process the files
		    contentType: false, // Set content type to false as jQuery will tell the server its a query string request
		    success: function(data, textStatus, jqXHR){
			  if(typeof data.error === 'undefined'){
				// Success so call function to process the form
				fileName=data.success;
				$("#sucsmsj").html('<h1 style="color:green;">File uploaded.</h1>');
				$("#sucsmsj").fadeIn("fast");
				//$('#affFrmb').css({backgroundColor:'',cursor:'auto'}).prop( "disabled", null );
				uploaded=true;
				$("#sucsmsj").fadeOut(3000);
				return false;
			  }	else{
					// Handle errors here
					$("#sucsmsj").html('<h1 style="color: red">'+data.error+'</h1>');
					$("#sucsmsj").fadeIn("slow");
					return false;
					console.log('ERRORS: ' + data.error);
					}
			   },error: function(jqXHR, textStatus, errorThrown){
		            // Handle errors here
		            //$("#sucsmsj").html('<h1 style="color: red">'+textStatus+'</h1>');
		            //$("#sucsmsj").fadeIn("slow");
		            return false;
		            console.log('ERRORS: ' + textStatus);
		            // STOP LOADING SPINNER
		       }
		    });
		}
		
		
		
		
		
		
		
		
});
